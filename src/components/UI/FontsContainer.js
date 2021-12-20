import styled from "styled-components";
import React from 'react'

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');

    font-family: "Inter", sans-serif;
`

const FontsContainer = ({children}) =>{
    return (
        <Container>
            {children}
        </Container>
    )
}

export default FontsContainer