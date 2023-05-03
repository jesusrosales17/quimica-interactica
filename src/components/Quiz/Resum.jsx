import React, { useEffect, useState } from 'react'
import { ResumItem } from './ResumItem';

export const Resum = ({gameState}) => {
    const [respondidas, setRespondidas] = useState(0);
    const [corrects, setCorrects] = useState(0);
    
    useEffect(() => {
        const getRespondidas = () => {
            let respondidas = 0;
            
            for(let i = 0; i < gameState.length; i++) {
               
                for(let j = 0; j < gameState[i].data.resps.length; j++) {
                    
                    if(gameState[i].data.resps[j].isSelected) {
                        
                        respondidas++;
                        continue;
                    }
                }
            }

            setRespondidas(respondidas);
        }

        const getCorrects = () => {
            let correctas = 0;
            
            for(let i = 0; i < gameState.length; i++) {
               
                for(let j = 0; j < gameState[i].data.resps.length; j++) {
                    
                    if(gameState[i].data.resps[j].isSelected && gameState[i].data.resps[j].isCorrect) {
                        
                        correctas++;
                        continue;
                    }
                }
            }

            setCorrects(correctas);
        }

        getRespondidas();
        getCorrects();
    }, [])

  return (
    <div className='row container-xxl d-flex justify-content-center'>
        <div className="col-8">
            <h2 className='fs-1 text-center'>Resumen del juego</h2>
            <h3>Respondidas: {respondidas}</h3>
            <h4>Correctas: {corrects} / 10 </h4>

            <div className="mt-5 d-flex justify-content-center">
                <div className="col-10">
                    {
                        gameState.map((element, i) => (
                            <ResumItem element={element} key={i} />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
