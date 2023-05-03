import React, { useEffect, useState } from 'react'

export const ResumResp = ({data}) => {
    const [color, setColor] = useState("");
    const {resp, isCorrect, isSelected} = data;

    useEffect(() => {
        if(!isSelected) {
            setColor("");
        }else  if(isSelected === true &&  isCorrect === true) {
            setColor("success")
        } else  if(isSelected === true && isCorrect === false)  {
           setColor("danger");
        }

        if(isCorrect){
            setColor("success");

        }
        
    }, []);
  return (
    <div className={`border rounded mt-2 d-flex align-items-center p-2 bg-${color}`}>
        <p className='m-0'>{resp}</p>
    </div>
  )
}
