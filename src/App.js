import "./App.css";
import React, { useRef, useEffect, useState, Line } from "react";
import { Canvas, Rect, Pattern, Textbox,Group} from "fabric";
import stylestoolbox from "./index/components/modules/toolbox.module.css"
import stylescanva from "./index/components/modules/canva.module.css"
import Navbar from "./index/components/Navbar"


function App() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  //Bloquear scroll + cntrl
  useEffect(() => {
  const disableZoom = (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  };

  window.addEventListener("wheel", disableZoom, { passive: false });

  return () => {
    window.removeEventListener("wheel", disableZoom);
  };
}, []);






//Canvas
  useEffect(() => {
    if (!canvasRef.current) return;
    const initCanvas = new Canvas(canvasRef.current, {
    width: 2600,
    height: 1300,
      backgroundColor: "#B0D9FF",
    });
      setCanvas(initCanvas);
    initCanvas.renderAll();

    return () => {
      initCanvas.dispose();
    };
  }, []);


//Blocos
 
      const box = new Rect({
        top:400,
        left:400,
        width:240,
        height:100,
        fill:"#ffffff",
         hasRotatingPoint: false,
        lockRotation: true,      
      });
     
     
    
  

//Texto
   
      const text = new Textbox("hello babe", {
         top:400,
        left:420,
        width:200,
      });
      
   


  const addGroup = () => {
    if(canvas){
      const group = new Group([box, text],{
        top:500,
        left:500
      });
      group.setControlsVisibility({ mtr: false });
      canvas.add(group)

        canvas.on("mouse:dblclick", (opt) =>{
    const target = opt.target;

    if(!group || group.type != "group") return;
          
    
  });

    }
  }


  
//Instanciamento
  return (
    <div className="App">

      
      <div className={stylestoolbox.toolbox}>
          <button onClick={addGroup} className={stylestoolbox.button}>add</button>
      </div>
     
      <canvas id="canvas" className={stylescanva.canva} ref={canvasRef}/>
      <Navbar/>
     
    </div>
  );
}

export default App;
