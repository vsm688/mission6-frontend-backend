import styled from "styled-components";


export const StyledFormParentDiv = styled.div`
    background-color: #D9D9D9;
    display:flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-bottom: 50px;
    h1,h2,h3,h4,p,li,input,select, option, button{
        font-family: 'Inter';
        font-style: normal;
    }
`

export const StyledRentalBanner = styled.div`
    display:flex;
    margin: 4px 15%;
    justify-content: center;
    background-color: #991231;
    width: 70%;
    height: 70px;
    align-items: center;
    font-size: 40px;
    color: #FFFFFF;
    font-family:  "Inter";
`

export const StyledSearchForm = styled.form`
    margin-top: 20px;
    width: 60%;
    height: auto;
    border: 3px solid #991231;
    border-radius: 10px;
    min-width: 0;
  

`
export const StyledTopForm = styled.div`
    display:flex;
    justify-content: space-between;
    width: 80%;
    
    select{
        width: 25%;
        height: 25px;
        border: none;
        background: white;
    }
    border: 3px solid #991231;
    margin-top: 35px;
    margin-left: 25px;
    padding: 10px;
    border-radius: 15px;

`

export const StyledCentreForm = styled.div`
    display:flex;
    align-items: center;
  
    border: 3px solid #991231;
    margin: 25px;
    padding: 5px 5px 5px 0;
    border-radius: 15px;
    overflow-y: scroll;

`

export const StyledBottomForm = styled.div`
    display:flex;
    width: 60%;
    margin-left: 25px;
    justify-content: flex-start;
    border: 3px solid #991231;
    margin-bottom: 30px;
    border-radius: 5px;
    

`

export const StyledPriceInputs = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    p{
        margin: 0 0 5px 10px;
    }
`

export const StyledBedroomInputs = styled.div`
    display:flex;
    margin-left: 20px;
    
    p{
        margin: 0 0 5px 10px
    }
    select{
        height: 25px;
        margin-left: 10px;
 
        border: none;
        background: white;
    }
`

export const StyledBedRoomInputHolder = styled.div`
   
    margin-left: 20px;

`
export const StyledinputHolderBathRoom = styled.div`
   
    
`

export const StyledPropertyTypeInputs = styled.div`
    display:flex;
    margin-left: 20px;
    flex-direction: column;

    p{
        margin: 0 0 5px 10px
    }
    select{
        height: 25px;
        flex-basis: 33%;
        margin-left: 10px;;
        border: none;
        background: white;
    }
`


export const StyledMultiSelectDropDown = styled.div`
    p{
    margin-top: 0px;
    margin-bottom: 0px;
    height: 25px;
    display: flex;
    margin-left: 5px;
    align-items: center;
    }

`
export const StyledMultiSelectDropDownList = styled.ul`
        position: absolute;
        background-color: white;
        width: 100%;
        margin-top: 1px;
        z-index: 2;
        list-style: none;
        text-align: left;
        margin: 0;
        padding: 0;
        display: ${props => props.open === true ? "flex" : "none"};
        flex-direction: column;
        li{
            border-bottom: 1px solid black;
            border-left: 1px solid black;
            border-right: 1px solid black;
        }
        * > *:first-of-type{
            border-top: 1px solid black;
        }
      
    
     
`

export const StyledMultiSelectDropDownParent = styled.div`
    position: relative;
    text-align: left;
    width: 150px;
    background-color: white;
`


export const StyledinputHolder = styled.div`
        select{
        height: 25px;
        margin-left: 10px;
   
        border: none;
        background: white;
    }
`

export const StyledinputHolderWithText = styled.div`
    display:flex;
    select{
        height: 25px;
        margin-left: 10px;

        border: none;
        background: white;
    }
    
    align-items: center;
    p{
        margin-left: 10px;

    }
`
export const StyledInputPriceFields = styled.div`
    display:flex;
    align-items: center;
`

export const StyledPriceDivHolder = styled.div`
    display:flex;
`

export const StyledPetsAndAvailableButtons = styled.div`
    margin-right: 50px;
    width: 50%;

`

export const StyledSearchButtonContainer = styled.div`
    margin-top: 30px;
    width: 10%;
    height: 60px;
    border-radius: 10px;
    border: 3px solid #991231;
    button{
 
        cursor: pointer;
        width: 100%;
        height: 100%;
        font-size: 2rem;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    box-shadow: 5px 5px 5px ;
    
`