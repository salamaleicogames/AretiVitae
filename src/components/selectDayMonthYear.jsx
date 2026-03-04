import { useState } from "react";

function selectDayMonthYear(){

    const DayGenerator = ( )=> {
        const dayGen =  Array.from({ length: 31 }, (_, index) => index + 1);
    }
    
    const YearGenerator = () => {
        const yearGen = Array.from({length:126}, (_ ,indexo) => indexo + 1)
    }


    return (
        <>
            <select id='idday'>
               {dayGen.map((dia) => (
          <option key={dia} value={dia}>
            {dia}
          </option>
        ))}
            </select>
            <select id="idmonth">
                <option>Janeiro</option>
                <option>Fevereiro</option>
                <option>Março</option>
                <option>Abril</option>
                <option>Maio</option>
                <option>Junho</option>
                <option>Julho</option>
                <option>Agosto</option>
                <option>Setembro</option>
                <option>Outrubro</option>
                <option>Novembro</option>
                <option>Dezembro</option>
            </select>
            
            <select id="idyear">
                
                
            </select>
        
        </>

    );
}
export default selectDayMonthYear;