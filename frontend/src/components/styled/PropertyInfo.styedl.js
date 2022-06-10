import styled from "styled-components";


export const StyledPropertyContainer = styled.div`
    width: 100%;
    margin-top: 50px;
    display:flex;
    justify-content: center;
    padding-bottom: 50px;
    h1,h2,h3,h4,p,li{
        font-family: 'Inter';
        font-style: normal;
        color: white;
    }

`

export const StyledRedPropertyBanner = styled.div`
    display:flex;
    height: 60%;
    width: 70%;
   

`
export const StyledOuterBannerChildLeft = styled.div`
      
    
`
export const StyledOuterBannerChild = styled.div`
    display:flex;
    width: 30%;
    background: red;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    border-right: 1px solid white;
    border-left: 1px solid white;
    p{
        margin:0;
        padding:5%;
    }
    h1,h2{
        margin:0;
        padding:0;
        margin-left: 30px;
        margin-top: 20px;
    }
    
`
export const StyledInnerBannerChild = styled.div`
    display:flex;
    width: 25%;
    height: 200px;
    background: red;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    border-right: 1px solid white;
    p{
        margin:0;
        padding:5%;
    }
    h1,h2{
        margin:0;
        padding:0;
        margin-left: 30px;
        margin-top: 20px
    }
`



export const StyledTop = styled.div`
    display:flex;
    justify-content: flex-start;
    width: 100%;
    align-items: center;
    height: 50%;
    img{
        margin-left: 30px;
    }
`

export const StyledBottom = styled.div`
    height: 50%;
`