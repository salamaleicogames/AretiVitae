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
   
      const text = new Textbox("hello", {
         top:400,
        left:420,
        width:200,
        lockRotation: true,   
        hasRotatingPoint: false,
        fontFamily: 'Josefin Sans'
      });
      
   


  const addGroup = () => {
    if(canvas){
      const group = new Group([box, text],{
        top:600,
        left:600,
        interactive: true
      });
      group.setControlsVisibility({ mtr: false });
      group.setControlsVisibility({ mt: false });
       group.setControlsVisibility({ mb: false });
        group.setControlsVisibility({ ml: false });
                group.setControlsVisibility({ mr: false });
      canvas.add(group)

        canvas.on("mouse:dblclick", (opt) =>{
    const target = opt.target;
//Faz com que a partir do momento que clica, desagrupe, e logo em seguida agrupe novamente
    if(!group || group.type != "group") return;//Verifica se realmente é um grupo
            const textbox = target.getObjects().find(obj => obj.type === 'textbox');//Acha a textbox dentro do grupo
  if (!textbox) return;//Se não houver textbox, retorne e pare a execução do código
  target.selectable = false;//Faz com que o gupo não existe mais temporariamente, ou seja, para que possa dar input no textbox
  target.evented = false;

   canvas.setActiveObject(textbox);//Seleciona a textbox
  textbox.enterEditing();//Habilita o input do teclado
  textbox.selectAll();//Opcional, para ficar mais bonito
  canvas.requestRenderAll();//Padrão para reescrever o canvas
    
          text.on('editing:exited', function () {//Quando sair da edição
  group.selectable = true;
  group.evented = true;
  canvas.setActiveObject(group);
  canvas.requestRenderAll();//Reverte tudo :)
});
    
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
