import styled from "styled-components";



export const StyledSliderItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 500px;
    background-color: #00008B;
    color: #fff;
    margin: 0 5px;
    h1{
        margin:0;
        margin-top: 10px;
        padding:0;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
    }
    border-bottom: 10px solid #D5788B ;
    

`

export const StyledCarouselContainer = styled.div`
    display:flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-bottom: 60vh;
   
`

export const StyledCarouselInnerContainer = styled.div`
    display:flex;
    width: 65%;
    flex-direction: column;
    background: #e9ebed;
    padding: 100px 2.5%;
    h1{
        margin-left: 32px;
        color: #991231;
     
    }
    h1,h2,h3,h4,p,li{
        font-family: 'Inter';
        font-style: normal;
        
    }


`

export const StyledCustomButton = styled.div`
    height: 40px;
    cursor: pointer;

    
`



export const StyledImageContainer = styled.img`
    height: 60%;
    width: 100%;
   
`

export const StyledInformationContainer = styled.div`
    height: 40%;
    width: 100%;
    background-color: white;
    color: #991231;
    h1{
        padding: 0;
        margin-left: 25px;
    }
    div{
        margin-left: 25px;
    }

`

