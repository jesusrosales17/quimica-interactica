import React from 'react'
import { MemoriaElement } from './MemoriaElement'
import styled from 'styled-components'

export const MemoriaGame = ({elementsOfGame, setElementsOfGame, cardsSelected,setCardsSelected}) => {
  return (
   <div className='row container-xxl mt-4 d-flex justify-content-center'>
    <Container className="gap-2">
        {
            elementsOfGame.map((element) => (
            <MemoriaElement     
                element={element} 
                key={element.idElement} 
                elementsOfGame={elementsOfGame} 
                setElementsOfGame={setElementsOfGame} 
                cardsSelected={cardsSelected}
                setCardsSelected={setCardsSelected}
            />
            ))
        }
    </Container>
   </div>
  )
}

const Container = styled.div`
display: grid;
grid-template-columns: repeat(4,120px);
width: auto;

`;