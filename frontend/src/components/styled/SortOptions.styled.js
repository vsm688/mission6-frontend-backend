import styled from "styled-components";


export const StyledOptionsOuterContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: 'Inter';
        font-style: normal;
`


export const StyledOptionsContainer = styled.div`
    display:flex;
    width: 60%;
    justify-content: space-between;
    align-items: center;
    font-family: 'Inter';
    font-style: normal;
    color: white;
    select{
        background-color: white;
        border:1px solid #991231;
        font-family: 'Inter';
        font-style: normal;
    }
    

`

export const StyledHereResultsButton = styled.div`
    width: 30%;
    height: 50px;
    display:flex;
    justify-content: center;
    background-color: #991231;
    color: #FFFFFF;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-family: 'Inter';
        font-style: normal;

`

export const StyledSearchResults = styled.div`
    display:flex;
    width:60%;
    height: auto;
    margin-top: 50px;
    flex-direction: column;
    h1,h2,h3,h4,p,li, select , option, input{
        font-family: 'Inter';
        font-style: normal;
    }
    color: white;
   
    
`

export const StyledSearchResultItem = styled.div`
    display: flex;
    width: 70%;
    border-radius: 20px;
    background-color: red;
    margin: 30px 0;
    h1,h2,h3,h4,p,li, select , option, input{
        font-family: 'Inter';
        font-style: normal;
        color: white;
    }
    height: 330px;
    
    
`
export const StyledSearchResultLeft = styled.img`
    flex: 1 1 auto;
    background: blue;
    width: 50%;
    border-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    h1,h2,h3,h4,p,li, select , option, input{
        font-family: 'Inter';
        font-style: normal;
        color: white;
    }
  
   
`
export const StyledSearchResultRight = styled.div`
    flex: 1 1 auto;
    background-color: red;
    width: 50%;
    margin-left: 15px;
    border-radius: 20px;
    h1,h2,h3,h4,p,li, select , option, input{
        font-family: 'Inter';
        font-style: normal;
        color: white;
    }
    
`

export const StyledIconsResults = styled.div`
    display:flex;
`

export const StyledIconGroup = styled.div`
    display:flex;
    margin-right: 20px;
    align-items: center;
    p{
        font-weight: 900;
        font-size: 24px;
        color: white;
    }
   
`