import React from 'react'
import { useState, useEffect } from 'react';
import {
    StyledPropertyContainer, StyledRedPropertyBanner, StyledOuterBannerChild, StyledInnerBannerChild,
     StyledTop, StyledBottom
} from '../styled/PropertyInfo.styedl'
const PropertyInfo = () => {
    const [propertyNumberState, setPropertyNumberState] = useState(0);
    const [petFriendHousesState, setPetFriendlyHousesState] = useState(0);
    useEffect(
        () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("http://localhost:5000/properties/propertypets", requestOptions)
                .then(response => response.text())
                .then(result => setPetFriendlyHousesState(JSON.parse(result)))
                .catch(error => console.log('error', error));

        }
        , [])
    useEffect(
        () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("http://localhost:5000/properties/propertycount", requestOptions)
                .then(response => response.text())
                .then(result => setPropertyNumberState(JSON.parse(result)))
                .catch(error => console.log('error', error));

        }
        , [])
    return (
        <StyledPropertyContainer>
            <StyledRedPropertyBanner>
                <StyledOuterBannerChild>
                    <StyledTop>
                        <h1>$1.9b</h1>
                    </StyledTop>
                    <StyledBottom>
                        <h2>Value of property under management</h2>
                    </StyledBottom>
                </StyledOuterBannerChild>
                <StyledInnerBannerChild>
                    <StyledTop>
                        <h1>{propertyNumberState}</h1>
                    </StyledTop>
                    <StyledBottom>
                        <h2>Properties available for rent</h2>
                    </StyledBottom>
                </StyledInnerBannerChild>
                <StyledInnerBannerChild style={{"border":"none"}}>
                    <StyledTop>
                        <h1>50+</h1>
                    </StyledTop>
                    <StyledBottom>
                        <h2>Years of success</h2>
                    </StyledBottom>
                </StyledInnerBannerChild>
                <StyledOuterBannerChild>
                    <StyledTop>
                        <img src={"./svg/icons/dog.svg"} alt={"dog icon"}></img>
                        <h1>{petFriendHousesState}</h1>
                    </StyledTop>
                    <StyledBottom>
                        <h2>Friendly pets housed with us</h2>

                    </StyledBottom>
                </StyledOuterBannerChild>
            </StyledRedPropertyBanner>
        </StyledPropertyContainer>

    )
}

export default PropertyInfo