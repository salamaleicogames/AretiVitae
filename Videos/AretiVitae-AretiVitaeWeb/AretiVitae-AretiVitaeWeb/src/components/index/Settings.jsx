import React, { useState, useRef, useEffect } from "react";
import styles from "./modules/settings.module.css";

function Settings({  canvasReady }) {
  const [width, setWidth]             = useState("");
  const [height, setHeight]           = useState("");
  const [color, setColor]             = useState("#ffffff");
  const [colorStroke, setColorStroke] = useState("#cccccc");
  const selectedObjectRef             = useRef(null);


  const handleObjectSelection = (object) => {
    if (!object || object._isPort || object.isLine) return;
    selectedObjectRef.current = object;

    // Dimensões reais (considerando escala)
    setWidth(Math.round(object.width  * object.scaleX));
    setHeight(Math.round(object.height * object.scaleY));

    if (object.type === "group") {
    
      const bg = object.getObjects().find((o) => o._isBackground);
      setColor(bg?.fill ?? "#ffffff");
      setColorStroke(object.stroke ?? "#cccccc");
    } else {
      setColor(object.fill   ?? "#ffffff");
      setColorStroke(object.stroke ?? "#cccccc");
    }
  };

  const clearSettings = () => {
    selectedObjectRef.current = null;
    setWidth("");
    setHeight("");
    setColor("#ffffff");
    setColorStroke("#cccccc");
  };


  // canvasReady é a própria instância do Canvas, não apenas um boolea
 
  useEffect(() => {
    // canvasReady é null até o canvas ser inicializado no Index.jsx
    const canvas = canvasReady;
    if (!canvas) return;

    const onCreated = (e) => handleObjectSelection(e.selected?.[0]);
    const onUpdated = (e) => handleObjectSelection(e.selected?.[0]);
    const onCleared = ()  => clearSettings();

    canvas.on("selection:created", onCreated);
    canvas.on("selection:updated", onUpdated);
    canvas.on("selection:cleared", onCleared);

    return () => {
      canvas.off("selection:created", onCreated);
      canvas.off("selection:updated", onUpdated);
      canvas.off("selection:cleared", onCleared);
    };
  }, [canvasReady]); 

  // ── Width ──
  const handleWidthChange = (e) => {
    const canvas = canvasReady;
    if (!canvas) return;
    const val = parseInt(e.target.value, 10);
    setWidth(isNaN(val) ? "" : val);
    const obj = selectedObjectRef.current;
    if (!obj || isNaN(val) || val <= 0) return;

    if (obj.type === "group" || obj.type === "rect") {

      obj.set({ scaleX: val / obj.width });
    } else if (obj.type === "textbox") {
      obj.set({ width: val });
    }
    canvas.requestRenderAll();
  };

  // ── Height ──
  const handleHeightChange = (e) => {
    const canvas = canvasReady;
    if (!canvas) return;
    const val = parseInt(e.target.value, 10);
    setHeight(isNaN(val) ? "" : val);
    const obj = selectedObjectRef.current;
    if (!obj || isNaN(val) || val <= 0) return;

    if (obj.type === "group" || obj.type === "rect") {
      obj.set({ scaleY: val / obj.height });
    }
    canvas.requestRenderAll();
  };

  // ── Fill color ──
  const handleColorChange = (e) => {
    const canvas = canvasReady;
    if (!canvas) return;
    const value = e.target.value;
    setColor(value);
    const obj = selectedObjectRef.current;
    if (!obj) return;

    if (obj.type === "group") {
    
      obj.getObjects().forEach((child) => {
        if (child._isBackground) child.set({ fill: value });
      });
      obj.dirty = true;
    } else {
      obj.set({ fill: value });
    }
    canvas.requestRenderAll();
  };

  // ── Stroke color ──
  const handleStrokeColorChange = (e) => {
    const canvas = canvasReady;
    if (!canvas) return;
    const value = e.target.value;
    setColorStroke(value);
    const obj = selectedObjectRef.current;
    if (!obj) return;

    if (obj.type === "group") {
      // Stroke agora fica no próprio Group
      obj.set({ stroke: value });
      obj.dirty = true;
    } else {
      obj.set({ stroke: value });
    }
    canvas.requestRenderAll();
  };

  return (
    <div className={styles.div}>
      <input
        type="text"
        placeholder="W"
        onChange={handleWidthChange}
        value={width}
        className={styles.input1}
      />
      <input
        type="text"
        placeholder="H"
        value={height}
        onChange={handleHeightChange}
        className={styles.input2}
      />
      <label className={styles.label}>Fill</label>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        className={styles.inputColor}
      />
      <label className={styles.label}>Stroke</label>
      <input
        type="color"
        value={colorStroke}
        onChange={handleStrokeColorChange}
        className={styles.inputColor}
      />
    </div>
  );
}

export default Settings;