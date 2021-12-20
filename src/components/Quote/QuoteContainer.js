import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'

const Container = styled.div`
    margin: 10rem 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const QuoteBlock = styled.div`
    max-width: 40rem;
    box-shadow: 1px 2px 6px 0px rgba(0, 0, 0, 0.25);
    height: 6.3rem;
    border-radius: 0.8rem;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Quote = styled.p`
    font-weight: 500;
`

const QuoteContainer = () =>{
    const [quoteState, setQuoteState] = useState()
    useEffect(() =>{
        generateQuote()
    }, [])


    const generateQuote = async () =>{
        const res = await fetch('https://api.kanye.rest/')

        if(!res.ok){
            setQuoteState("Ima fix wolves")
        }

        const data = await res.json()
        setQuoteState(data.quote)
    }

    const generateHandler = async () =>{
        generateQuote()
    }

    return (
        <Container>
            <h2><i>Ye said </i>😞🙏 :</h2>
            <QuoteBlock>
                <Quote>{quoteState}</Quote>
            </QuoteBlock>
            <Button onClick={generateHandler}>Generate Random Quote 🙏</Button>
        </Container>
    )
}


export default QuoteContainer