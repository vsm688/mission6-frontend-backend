import styled from "styled-components";


export const StyledHeader = styled.header`
    display:flex;
    justify-content: space-between;
    margin: 0 15%;
    margin-top: 20px;
    height: auto;
    flex-direction: column;
    h1,h2,h3,h4,p,li{
        font-family: 'Inter';
        font-style: normal;
    }
`

export const NavBarParent = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;

`

export const StyledHeaderItemContainer = styled.div`
    display:flex;
    justify-content: space-between;
    width: 50%;
`

export const StyledHeaderItemContainerList = styled.ul`
    display:flex;
    list-style: none;
    width: 100%;
    align-items: center;
    margin:0;
    padding: 0;
    justify-content: ${props => props.left ? "flex-start" : "flex-end"};
`

export const StyledHeaderItemContainerListItem = styled.li`
    margin: 0 20px;
    border-bottom: ${(props) => props.right !== true ? "3px solid #d5788b" : "none" }; 
    font-size: ${(props) => props.right !== true ? "15px" : "14px" }; 
    border-radius: 6px;
    cursor: pointer;
    img{
        cursor: pointer;
    }

`


export const StyledHeaderItemContainerListItemLogo = styled.li`
    img{
        width: 150px;
        height: 150px;
    }
    cursor: pointer;
`

export const BannerImage = styled.img`
    height: ${(props) => props.displayed === "yes" ? "auto": 0}
`