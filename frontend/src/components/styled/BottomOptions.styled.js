import styled from "styled-components";


export const StyledBottomOptionsContainer = styled.div`
    display:flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 15vh;
    h1,h2,h3,h4,p,li, select , option, input{
        font-family: 'Inter';
        font-style: normal;
    }
    
`

export const StyledBottomOption = styled.div`
    width: 30%;
    padding: 20px 20px 0 20px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    background-color: #D9D9D9;
    select{
        margin-bottom: 20px;
        background: white;
        border: none;
    }
`
export const StyledBottomOptionsInnerContainer = styled.div`
    display:flex;
    justify-content: space-around;
    width: 70%;
`
