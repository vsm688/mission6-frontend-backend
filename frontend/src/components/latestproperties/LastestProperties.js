import React, { useEffect, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import { StyledSliderItem, StyledCarouselContainer, StyledCarouselInnerContainer, StyledCustomButton, StyledImageContainer, StyledInformationContainer } from "../styled/LatestPropertyInfo.styled";








const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
];

const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <img src={"./svg/carobuttons/left.svg"} alt={"house"}></img> : <img src={"./svg/carobuttons/right.svg"} alt={"house"}></img>
    return (
        <div style={{ "height": "100%", "display": "flex", "alignItems": "center" }}>
            <StyledCustomButton onClick={onClick} disabled={isEdge}>
                {pointer}
            </StyledCustomButton>
        </div>

    )
}
const LastestProperties = () => {

    const [houseState, setHouseState] = useState([]);


    useEffect(
        () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("http://localhost:5000/properties", requestOptions)
                .then(response => response.text())
                .then(result => setHouseState(JSON.parse(result).reverse().slice(0, 5)))
                .catch(error => console.log('error', error));

        }
        , [])



    return (
        <>
   
            <StyledCarouselContainer>
                <StyledCarouselInnerContainer>
                    <h1 style={{"borderBottom":" 3px solid #991231","width":"22%"}}>Latest Properties</h1>
                    <Carousel breakPoints={breakPoints} renderArrow={myArrow} renderPagination={({ pages, activePage, onClick }) => {
                        return (
                            <></>
                        )
                    }} >

                        {houseState.map(item =>

                            <StyledSliderItem key={item._id}>

                                <StyledImageContainer src={item.ImageCollection[0]}></StyledImageContainer>
                                <StyledInformationContainer>
                                    <h1>{item.Title}</h1>
                                    <div style={{ "display": "flex" }}>
                                        <span style={{ "display": "flex" }}>
                                            <img src={"./svg/icons/bed.svg"} alt={"house"}></img>
                                            <p>{item.Bedrooms}</p>
                                        </span>
                                        <span style={{ "display": "flex" }}>
                                            <img src={"./svg/icons/bathroom.svg"} alt={"bathroom"}></img>
                                            <p>{item.Bathrooms}</p>
                                        </span>
                                        <span style={{ "display": "flex" }}>
                                            <img src={"./svg/icons/garage.svg"} alt={"garage"}></img>
                                            <p>{item.Garages}</p>
                                        </span>
                                        <span style={{"display":"flex","alignItems":"center"}} >
                                            {item.PetsAllowed === true ? <img src={"./svg/icons/reddog.svg"} alt={"dog"}/> : <div></div>}
                                        </span>
                                    </div>
                                    <div style={{"display":"flex", "alignItems":"center"}}>
                                        <div style={{ "margin":"0 10px 0 0 ","width": "60%", "height": "3px", "background": "#991231" }}></div>
                                        <p>Available Now</p>
                                    </div>
                                    {item.PropertyType === "rent" ? <h1>${item.RentPrice} / week</h1> : <h1>${item.SalePrice}</h1>}

                                </StyledInformationContainer>
                            </StyledSliderItem>

                        )}



                    </Carousel>
                </StyledCarouselInnerContainer>
            </StyledCarouselContainer>
        </>
    )
}




export default LastestProperties