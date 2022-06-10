import React from 'react'
import { StyledHeader, StyledHeaderItemContainer, StyledHeaderItemContainerList, 
    StyledHeaderItemContainerListItem, StyledHeaderItemContainerListItemLogo, NavBarParent,
    BannerImage } from '../styled/NavBar.styled'
import { useNavigate } from 'react-router-dom';
const NavBar = (props) => {
    
    const navigate = useNavigate();

    const NavigateToHome = () =>{
        navigate("/")
    }

    return (
        <StyledHeader>
            <NavBarParent>
                <StyledHeaderItemContainer>
                    <StyledHeaderItemContainerList left={true}>
                        <StyledHeaderItemContainerListItemLogo onClick={() => NavigateToHome()}><img src={"./svg/logos/logo.svg"} alt={"logo"}></img></StyledHeaderItemContainerListItemLogo>
                        <StyledHeaderItemContainerListItem>Residential</StyledHeaderItemContainerListItem>
                        <StyledHeaderItemContainerListItem>Commercial</StyledHeaderItemContainerListItem>
                        <StyledHeaderItemContainerListItem>Body Corperate</StyledHeaderItemContainerListItem>
                    </StyledHeaderItemContainerList>

                </StyledHeaderItemContainer>
                <StyledHeaderItemContainer>
                    <StyledHeaderItemContainerList left={false}>
                        <StyledHeaderItemContainerListItem right={true}>Why us</StyledHeaderItemContainerListItem>
                        <StyledHeaderItemContainerListItem right={true}>About Us</StyledHeaderItemContainerListItem>
                        <StyledHeaderItemContainerListItem right={true}>Client Resources</StyledHeaderItemContainerListItem>
                        <img src={"./svg/icons/redsearch.svg"}></img>
                    </StyledHeaderItemContainerList>
                </StyledHeaderItemContainer>
            </NavBarParent>
            <BannerImage displayed={props.displayed} src={"/svg/banner.svg"}>
            </BannerImage>
        </StyledHeader>
    )
}

export default NavBar