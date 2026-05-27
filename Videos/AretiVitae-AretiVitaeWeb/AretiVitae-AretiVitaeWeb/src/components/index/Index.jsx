import React, { useRef, useEffect, useState } from "react";
import * as fabric from "fabric";
import stylestoolbox from "./modules/toolbox.module.css";
import stylescanva from "./modules/canva.module.css";
import Navbar from "./Navbar";
import Settings from "./Settings";

export default function Index() {
  const canvasRef         = useRef(null);
  const gridCanvasRef     = useRef(null);
  const canvasInstanceRef = useRef(null);
  const sourceBlockRef    = useRef(null);
  const tempLineRef       = useRef(null);
  const isDraggingPort    = useRef(false);
  const activePortsRef    = useRef([]);
  const [canvasReady, setCanvasReady] = useState(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const cs = new fabric.Canvas(canvasRef.current, {
      width: window.innerWidth,
      height: window.innerHeight,
      // sem backgroundColor — fundo pintado no gridCanvasRef
    });

    // ─── Grid ────────────────────────────────────────────────────────────────
    const GRID_SIZE       = 50;
    const GRID_COLOR_LINE = "#89bce8";   // linhas principais
    const GRID_COLOR_DOT  = "#5a9fd4";   // ponto de interseção (opcional)

    const drawGrid = () => {
      const gc = gridCanvasRef.current;
      if (!gc) return;
      const ctx  = gc.getContext("2d");
      const vpt  = cs.viewportTransform;
      const zoom = cs.getZoom();
      const w    = gc.width;
      const h    = gc.height;

      // Pinta o fundo azul aqui (Fabric ficará transparente)
      ctx.fillStyle = "#cce6fe";
      ctx.fillRect(0, 0, w, h);

      // Deslocamento do viewport mapeado para o espaço de tela
      const offsetX = vpt[4] % (GRID_SIZE * zoom);
      const offsetY = vpt[5] % (GRID_SIZE * zoom);

      ctx.save();
      ctx.strokeStyle = GRID_COLOR_LINE;
      ctx.lineWidth   = 1;
      ctx.globalAlpha = 0.6;

      // Linhas verticais
      for (let x = offsetX; x < w + GRID_SIZE * zoom; x += GRID_SIZE * zoom) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // Linhas horizontais
      for (let y = offsetY; y < h + GRID_SIZE * zoom; y += GRID_SIZE * zoom) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Pontos nas interseções para dar mais profundidade visual
      ctx.globalAlpha = 0.9;
      ctx.fillStyle   = GRID_COLOR_DOT;
      for (let x = offsetX; x < w + GRID_SIZE * zoom; x += GRID_SIZE * zoom) {
        for (let y = offsetY; y < h + GRID_SIZE * zoom; y += GRID_SIZE * zoom) {
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();
    };

    // Redesenha o grid sempre que o Fabric renderizar
    cs.on("after:render", drawGrid);

    // Remove qualquer background inline que o Fabric injeta nos seus canvas filhos
    // para que o gridCanvasRef (atrás via z-index) fique visível
    if (cs.lowerCanvasEl) cs.lowerCanvasEl.style.backgroundColor = "transparent";
    if (cs.upperCanvasEl) cs.upperCanvasEl.style.backgroundColor = "transparent";

    // ─── Resize handler ───────────────────────────────────────────────────────
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Fabric v6+: dimensões via width/height direto no elemento e no objeto
      cs.width  = w;
      cs.height = h;
      const upperCanvas = cs.upperCanvasEl;
      const lowerCanvas = cs.lowerCanvasEl;
      if (upperCanvas) { upperCanvas.width = w; upperCanvas.height = h; }
      if (lowerCanvas) { lowerCanvas.width = w; lowerCanvas.height = h; }

      const gc = gridCanvasRef.current;
      if (gc) { gc.width = w; gc.height = h; }

      drawGrid();
      cs.requestRenderAll();
    };
    window.addEventListener("resize", handleResize);

    // Centraliza o viewport no início
    cs.setViewportTransform([1, 0, 0, 1,
      (window.innerWidth  - 5000) / 2,
      (window.innerHeight - 5000) / 2,
    ]);
    cs.requestRenderAll();
    drawGrid();

    canvasInstanceRef.current = cs;
    setCanvasReady(cs);

    // ─── Ports ────────────────────────────────────────────────────────────────
    const PORT_RADIUS = 7;
    const PORT_FILL   = "#93c5fd";
    const PORT_STROKE = "#fff";

    const clearPorts = () => {
      activePortsRef.current.forEach((p) => cs.remove(p));
      activePortsRef.current = [];
      cs.requestRenderAll();
    };

    const createPort = (block, side) => {
      const center = block.getCenterPoint();
      const hw     = (block.width * block.scaleX) / 2;
      const OFFSET = PORT_RADIUS + 2;
      const x = side === "left" ? center.x - hw - OFFSET : center.x + hw + OFFSET;
      const y = center.y;

      const port = new fabric.Circle({
        radius:      PORT_RADIUS,
        fill:        PORT_FILL,
        stroke:      PORT_STROKE,
        strokeWidth: 2,
        left:        x,
        top:         y,
        originX:     "center",
        originY:     "center",
        selectable:  false,
        evented:     true,
        hoverCursor: "crosshair",
        _isPort:     true,
        _block:      block,
        _side:       side,
      });

      cs.add(port);
      cs.bringObjectToFront(port);
      return port;
    };

    const showPorts = (block) => {
      clearPorts();
      if (!block || block._isPort || block.isLine) return;
      const portL = createPort(block, "left");
      const portR = createPort(block, "right");
      activePortsRef.current = [portL, portR];
      cs.requestRenderAll();
    };

    const repositionPorts = (block) => {
      activePortsRef.current.forEach((port) => {
        if (port._block !== block) return;
        const center = block.getCenterPoint();
        const hw     = (block.width * block.scaleX) / 2;
        const OFFSET = PORT_RADIUS + 2;
        const x = port._side === "left" ? center.x - hw - OFFSET : center.x + hw + OFFSET;
        port.set({ left: x, top: center.y });
        port.setCoords();
      });
      cs.requestRenderAll();
    };

    const getCenter = (obj) => {
      const p = obj.getCenterPoint();
      return { x: p.x, y: p.y };
    };

    // ─── Connections ─────────────────────────────────────────────────────────
    const createConnection = (source, dest, fromSide, toSide) => {
      const srcCenter = getCenter(source);
      const dstCenter = getCenter(dest);
      const srcHW = (source.width * source.scaleX) / 2;
      const dstHW = (dest.width   * dest.scaleX)   / 2;

      const x1 = fromSide === "left" ? srcCenter.x - srcHW : srcCenter.x + srcHW;
      const y1 = srcCenter.y;
      const x2 = toSide   === "left" ? dstCenter.x - dstHW : dstCenter.x + dstHW;
      const y2 = dstCenter.y;

      const line = new fabric.Line([x1, y1, x2, y2], {
        stroke:      "#ffffff",
        strokeWidth: 5,
        selectable:  false,
        evented:     false,
        isLine:      true,
        originX:     "center",
        originY:     "center",
      });

      cs.add(line);
      cs.sendObjectToBack(line);

      if (!source.connections) source.connections = [];
      if (!dest.connections)   dest.connections   = [];
      const conn = { line, sourceBlock: source, targetBlock: dest, fromSide, toSide };
      source.connections.push(conn);
      dest.connections.push(conn);

      const updateLine = () => {
        const sc  = getCenter(source);
        const dc  = getCenter(dest);
        const shw = (source.width * source.scaleX) / 2;
        const dhw = (dest.width   * dest.scaleX)   / 2;
        line.set({
          x1: fromSide === "left" ? sc.x - shw : sc.x + shw,
          y1: sc.y,
          x2: toSide   === "left" ? dc.x - dhw : dc.x + dhw,
          y2: dc.y,
        });
        cs.requestRenderAll();
      };

      source.on("moving", updateLine);
      dest.on("moving",   updateLine);
      cs.requestRenderAll();
    };

    // ─── Temp line (drag-connect) ─────────────────────────────────────────────
    const startTempLine = (x, y) => {
      const line = new fabric.Line([x, y, x, y], {
        stroke:          "#5083ef",
        strokeWidth:     2,
        strokeDashArray: [6, 4],
        selectable:      false,
        evented:         false,
        isLine:          true,
      });
      cs.add(line);
      cs.bringObjectToFront(line);
      tempLineRef.current = line;
    };

    const updateTempLine = (x2, y2) => {
      if (!tempLineRef.current) return;
      tempLineRef.current.set({ x2, y2 });
      cs.requestRenderAll();
    };

    const removeTempLine = () => {
      if (tempLineRef.current) {
        cs.remove(tempLineRef.current);
        tempLineRef.current = null;
      }
    };

    const toCanvasPoint = (clientX, clientY) => {
      const vpt  = cs.viewportTransform;
      const zoom = cs.getZoom();
      return {
        x: (clientX - vpt[4]) / zoom,
        y: (clientY - vpt[5]) / zoom,
      };
    };

    // ─── Events ───────────────────────────────────────────────────────────────
    const onMouseDown = (opt) => {
      const target = opt.target;

      if (target?._isPort) {
        isDraggingPort.current = true;
        sourceBlockRef.current = { block: target._block, side: target._side };
        const pos = toCanvasPoint(opt.e.clientX, opt.e.clientY);
        startTempLine(pos.x, pos.y);
        cs.selection = false;
        return;
      }

      const e = opt.e;
      if (e.ctrlKey || e.button === 1) {
        isDraggingPort.current = false;
        cs.selection = false;
        cs.discardActiveObject();
        cs.requestRenderAll();
        onMouseDown._panActive = true;
        onMouseDown._lastX = e.clientX;
        onMouseDown._lastY = e.clientY;
      }
    };

    const onMouseMove = (opt) => {
      if (isDraggingPort.current) {
        const pos = toCanvasPoint(opt.e.clientX, opt.e.clientY);
        updateTempLine(pos.x, pos.y);
        return;
      }

      if (onMouseDown._panActive) {
        const PAN_LIMIT = { minX: -5000, maxX: 5000, minY: -5000, maxY: 5000 };
        const e    = opt.e;
        const vpt  = cs.viewportTransform.slice();
        const zoom = vpt[0];
        const nx   = vpt[4] + (e.clientX - onMouseDown._lastX);
        const ny   = vpt[5] + (e.clientY - onMouseDown._lastY);
        vpt[4] = Math.min(Math.max(nx, PAN_LIMIT.minX * zoom), PAN_LIMIT.maxX * zoom);
        vpt[5] = Math.min(Math.max(ny, PAN_LIMIT.minY * zoom), PAN_LIMIT.maxY * zoom);
        cs.setViewportTransform(vpt);
        onMouseDown._lastX = e.clientX;
        onMouseDown._lastY = e.clientY;
      }
    };

    const onMouseUp = (opt) => {
      onMouseDown._panActive = false;
      cs.selection = true;

      if (!isDraggingPort.current) return;
      isDraggingPort.current = false;
      removeTempLine();

      const sourceData = sourceBlockRef.current;
      sourceBlockRef.current = null;

      if (!sourceData) return;
      const { block: source, side: fromSide } = sourceData;

      const target = opt.target;
      if (!target || target.isLine || target._isPort || target === source) return;

      const destCenter = getCenter(target);
      const pos        = toCanvasPoint(opt.e.clientX, opt.e.clientY);
      const toSide     = pos.x < destCenter.x ? "left" : "right";

      createConnection(source, target, fromSide ?? "right", toSide);
    };

    const onSelected = (opt) => {
      const activeObj = cs.getActiveObject();
      if (activeObj?.type === "activeSelection") { clearPorts(); return; }
      const obj = opt.selected?.[0] ?? opt.target;
      if (!obj || obj._isPort || obj.isLine) { clearPorts(); return; }
      showPorts(obj);
    };

    const onDeselected = () => {
      if (!isDraggingPort.current) clearPorts();
    };

    const onMoving = (opt) => {
      repositionPorts(opt.target);
    };

    const onWheel = (opt) => {
      opt.e.preventDefault();
      let zoom = cs.getZoom() * (0.999 ** opt.e.deltaY);
      zoom = Math.min(Math.max(zoom, 0.5), 1.5);
      cs.zoomToPoint(new fabric.Point(opt.e.offsetX, opt.e.offsetY), zoom);
    };

    const onDoubleClick = (opt) => {
      const target = opt.target;
      if (!target || target.type !== "group") return;
      const textbox = target.getObjects().find((o) => o.type === "textbox");
      if (!textbox) return;
      target.selectable = false;
      target.evented    = false;
      cs.setActiveObject(textbox);
      textbox.enterEditing();
      textbox.selectAll();
      cs.requestRenderAll();
      textbox.on("editing:exited", () => {
        target.selectable = true;
        target.evented    = true;
        cs.setActiveObject(target);
        cs.requestRenderAll();
      });
    };

    const onKeyDown = (e) => {
      if (e.key !== "Delete") return;
      const cs = canvasInstanceRef.current;
      if (!cs) return;

      const active = cs.getActiveObject();
      if (!active || active.isEditing) return;

      if (active.type === "activeSelection") {
        const objects = [...active.getObjects()];
        cs.discardActiveObject();
        cs.requestRenderAll();
        objects.forEach((obj) => {
          if (obj.connections?.length) {
            obj.connections.forEach(({ line, sourceBlock, targetBlock }) => {
              cs.remove(line);
              const other = sourceBlock === obj ? targetBlock : sourceBlock;
              if (other?.connections) {
                other.connections = other.connections.filter((c) => c.line !== line);
              }
            });
          }
          cs.remove(obj);
        });
        clearPorts();
        cs.requestRenderAll();
        return;
      }

      if (active.connections?.length) {
        active.connections.forEach(({ line, sourceBlock, targetBlock }) => {
          cs.remove(line);
          const other = sourceBlock === active ? targetBlock : sourceBlock;
          if (other?.connections) {
            other.connections = other.connections.filter((c) => c.line !== line);
          }
        });
      }
      clearPorts();
      cs.remove(active);
      cs.discardActiveObject();
      cs.requestRenderAll();
    };

    const disableCtrlZoom = (e) => { if (e.ctrlKey) e.preventDefault(); };

    cs.on("mouse:down",        onMouseDown);
    cs.on("mouse:dblclick",    onDoubleClick);
    cs.on("mouse:move",        onMouseMove);
    cs.on("mouse:up",          onMouseUp);
    cs.on("mouse:wheel",       onWheel);
    cs.on("selection:created", onSelected);
    cs.on("selection:updated", onSelected);
    cs.on("selection:cleared", onDeselected);
    cs.on("object:moving",     onMoving);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("wheel",   disableCtrlZoom, { passive: false });
    window.addEventListener("resize",  handleResize);

    return () => {
      cs.off("mouse:down",        onMouseDown);
      cs.off("mouse:dblclick",    onDoubleClick);
      cs.off("mouse:move",        onMouseMove);
      cs.off("mouse:up",          onMouseUp);
      cs.off("mouse:wheel",       onWheel);
      cs.off("selection:created", onSelected);
      cs.off("selection:updated", onSelected);
      cs.off("selection:cleared", onDeselected);
      cs.off("object:moving",     onMoving);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("wheel",   disableCtrlZoom);
      window.removeEventListener("resize",  handleResize);
      cs.dispose();
      canvasInstanceRef.current = null;
    };
  }, []);

  // ─── Block adders ──────────────────────────────────────────────────────────
  const addBox = () => {
    const cs = canvasInstanceRef.current;
    if (!cs) return;
    const vpt     = cs.viewportTransform;
    const centerX = (window.innerWidth  / 2 - vpt[4]) / vpt[0];
    const centerY = (window.innerHeight / 2 - vpt[5]) / vpt[3];
    const box = new fabric.Rect({
      width: 300, height: 300,
      fill: "#ffffff",
      stroke: "#cccccc",
      strokeWidth: 2,
      strokeUniform: true,
      left: centerX - 150, top: centerY - 150,
      lockRotation: true,
      hasRotatingPoint: false,
      _blockType: "rect",
    });
    cs.add(box);
    cs.setActiveObject(box);
    cs.requestRenderAll();
  };

  const addGroup = () => {
    const cs = canvasInstanceRef.current;
    if (!cs) return;
    const vpt     = cs.viewportTransform;
    const centerX = (window.innerWidth  / 2 - vpt[4]) / vpt[0];
    const centerY = (window.innerHeight / 2 - vpt[5]) / vpt[3];
    const box = new fabric.Rect({
      width: 200, height: 50,
      fill: "#ffffff",
      stroke: null,
      strokeWidth: 0,
      opacity: 1,
      paintFirst: "fill",
      originX: "center", originY: "center",
      _isBackground: true,
    });
    const text = new fabric.Textbox("hello", {
      width: 200, textAlign: "center", fontFamily: "Josefin Sans",
      originX: "center", originY: "center",
      fill: "#000000",
      _isLabel: true,
    });
    const group = new fabric.Group([box, text], {
      left: centerX, top: centerY,
      originX: "center", originY: "center",
      lockRotation: true,
      hasRotatingPoint: false,
      stroke: "#cccccc",
      strokeWidth: 2,
      strokeUniform: true,
      paintFirst: "fill",
      opacity: 1,
      _blockType: "group",
    });
    cs.add(group);
    cs.setActiveObject(group);
    cs.requestRenderAll();
  };

  const addText = () => {
    const cs = canvasInstanceRef.current;
    if (!cs) return;
    const vpt     = cs.viewportTransform;
    const centerX = (window.innerWidth  / 2 - vpt[4]) / vpt[0];
    const centerY = (window.innerHeight / 2 - vpt[5]) / vpt[3];
    const text = new fabric.Textbox("Texto", {
      left: centerX, top: centerY,
      originX: "center", originY: "center",
      width: 200,
      fontFamily: "Josefin Sans",
      fontSize: 24,
      textAlign: "center",
      fill: "#333333",
      _blockType: "text",
    });
    cs.add(text);
    cs.setActiveObject(text);
    text.enterEditing();
    text.selectAll();
    cs.requestRenderAll();
  };

  return (
    <div className="App">
      <div className={stylestoolbox.toolbox}>
        <button onClick={addGroup} className={stylestoolbox.button}>addg</button>
        <button onClick={addBox}   className={stylestoolbox.button}>addb</button>
        <button onClick={addText}  className={stylestoolbox.button}>addt</button>
        <Settings canvasRef={canvasInstanceRef} canvasReady={canvasReady} />
      </div>

      <div className={stylescanva.canvaWrapper}>
        
        <canvas
          ref={gridCanvasRef}
          width={window.innerWidth}
          height={window.innerHeight}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      
        <canvas
          id="canvas"
          className={stylescanva.canva}
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      </div>

      <Navbar />
    </div>
  );
}