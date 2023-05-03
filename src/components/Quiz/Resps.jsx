import React from 'react'

export const Resps = ({info, validQuestion}) => {
    const {id, resp} = info;
    


  return (
    <button 
        onClick={() => validQuestion(info)}
        className={`btn btn-outline-secondary  col-5 p-5`}
    >{resp}</button>
  )
}
