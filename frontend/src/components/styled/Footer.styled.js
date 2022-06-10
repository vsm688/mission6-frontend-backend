import styled from "styled-components";

export const StyledUpperContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content: flex-end;
    h1,h2,h3,h4,p,li{
        font-family: 'Inter';
        font-style: normal;
    }
    
`

export const StyledFooterOuterParentDiv = styled.div`
    width: 100%;
    height: 20vh;
    display:flex;
    justify-content: center;
    
  
`

export const StyledFooterParentDiv = styled.div`
    display:flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
    background-color: black;
    opacity: 0.56;
    padding-bottom: 150px;
    h1,h2,h3,h4,p,li{
        font-family: 'Inter';
        font-style: normal;
    }
    
`

export const StyledFooterUpperDiv = styled.div`
    display:flex;
    justify-content: flex-end;
    color: white;
    width: 70%;
    margin-right: 80px;
    div{
        margin-left: 200px;
    }
    
`


export const StyledFooterLowerDiv = styled.div`
    display:flex;
    justify-content: center;
    margin-top: 30px;
   
`
export const StyledNewsLetterDiv = styled.div`
    margin-right: 50px;
    display:flex;
    color: white;
    justify-content: center;
    align-items: center;
    h2{
        margin-right: 20px;
    }
    input{
        width: 300px;
        height: 50px;
        border-radius: 20px;
        border: none;
        padding-left: 10px;
    }
`

export const StyledSocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
