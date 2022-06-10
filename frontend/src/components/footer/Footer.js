import React from 'react'
import { StyledFooterOuterParentDiv, StyledFooterParentDiv, StyledFooterLowerDiv, StyledNewsLetterDiv, StyledSocialIcons, StyledFooterUpperDiv,StyledUpperContainer } from "../styled/Footer.styled"
const Footer = () => {
    return (
        <StyledFooterOuterParentDiv>
            <StyledFooterParentDiv>
                <StyledUpperContainer>
                    <StyledFooterUpperDiv>
                        <div>
                            <h1>HEAD OFFICE</h1>
                            <p>Auckland Property Management Ltd</p>
                            <p>145 Manukau Road, Epsom, 1023, Auckland</p>
                            <p>Hours: Open from 8.30am - 5.00pm Monday - Friday</p>
                        </div>
                        <div>
                            <h1>CONTACT</h1>
                            <p>Ph: (09) 638 2500</p>
                            <p>Email: reception@apm.kiwi</p>
                        </div>

                    </StyledFooterUpperDiv>
                </StyledUpperContainer>
                <StyledFooterLowerDiv>
                    <StyledNewsLetterDiv>
                        <h2>Subscribe to our newsletter</h2>
                    
                     
                    </StyledNewsLetterDiv>
                    <StyledSocialIcons>
                        <img src ={"./svg/icons/facebook.svg"} alt={"facebook logo"}></img>
                        <img src ={"./svg/icons/instagram.svg"} alt={"instagram logo"}></img>
                        <img src ={"./svg/icons/linkedin.svg"} alt={"linkedin logo"}></img>
                        <img src ={"./svg/icons/youtube.svg"} alt={"youtube logo"}></img>
                       
                    </StyledSocialIcons>
                </StyledFooterLowerDiv>
            </StyledFooterParentDiv>
        </StyledFooterOuterParentDiv>
    )
}

export default Footer