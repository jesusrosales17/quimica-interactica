import React from 'react'
import styled from 'styled-components'

const ShowLetters = ({word, correctLetters}) => {
  return (
    <Container className='row d-flex justify-content-end gap-2'>
        {word.map((letter, i) => (
            <LetterContainer className="" key={i}>
                <Letter className='d-inline'>{correctLetters.length > 0 && correctLetters.includes(letter) ? letter : ""}</Letter>
            </LetterContainer>
        ))}
    </Container>
  )
}
const Container = styled.div`
    margin-top: -5%;
    margin-right: 5%;
`;
const LetterContainer = styled.div`
    border-bottom: 2px solid #fff;
    width: 45px;
    height: 35px;
`;
const Letter = styled.p`
    font-size: 22px;
    color: #fff;
    font-weight: 700;
    
`;

export default ShowLetters