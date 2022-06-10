import React from 'react'
import { useEffect, useState } from 'react';
import {
    StyledOptionsContainer, StyledOptionsOuterContainer, StyledHereResultsButton, StyledSearchResults,
    StyledSearchResultLeft, StyledSearchResultRight, StyledSearchResultItem, StyledIconsResults, StyledIconGroup
} from '../styled/SortOptions.styled'
const SortOptions = () => {


    const [searchResults, setResults] = useState([]);

    useEffect(
        () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("http://localhost:5000/properties", requestOptions)
                .then(response => response.text())
                .then(result => setResults(JSON.parse(result)))
                .catch(error => console.log('error', error));

        }
        , [])



    const callQuickSort = (arrayToSort, num) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            array: arrayToSort,
            number: num
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/properties/sort", requestOptions)
            .then(response => response.json())
            .then(result => setResults(result.theBody))
            .catch(error => console.log('error', error));
    }

    useEffect(
        () => { console.log(searchResults) }

        , [searchResults])

    return (
        <StyledOptionsOuterContainer>
            <StyledOptionsContainer>
                <StyledHereResultsButton>Here are your results</StyledHereResultsButton>
                <select>
                    <option>Sort by</option>
                    <option onClick={() => callQuickSort({ searchResults }, 1)}>Title</option>
                    <option onClick={() => callQuickSort({ searchResults }, 2)}>Rooms</option>
                    <option onClick={() => callQuickSort({ searchResults }, 3)}>Bathrooms</option>
                    <option onClick={() => callQuickSort({ searchResults }, 4)}>Garages</option>
                </select>
            </StyledOptionsContainer>
            <StyledSearchResults>
                {searchResults.map((item, index) => {
                    return (
                        <StyledSearchResultItem key={index}>
                            <StyledSearchResultLeft src={item.ImageCollection[0]}></StyledSearchResultLeft>
                            <StyledSearchResultRight>
                                <h1>{item.StreetAddress}</h1>
                                <StyledIconsResults>
                                    <StyledIconGroup>
                                        <img src={"./svg/icons/bedwhite.svg"} alt={"house"}></img>
                                        <p>{item.Bedrooms}</p>
                                    </StyledIconGroup>
                                    <StyledIconGroup>
                                        <img src={"./svg/icons/showerwhite.svg"} alt={"house"}></img>
                                        <p>{item.Bathrooms}</p>
                                    </StyledIconGroup>
                                    <StyledIconGroup>
                                        <img src={"./svg/icons/garagewhite.svg"} alt={"house"}></img>
                                        <p>{item.Garages}</p>
                                    </StyledIconGroup>
                                </StyledIconsResults>
                                <h2>Available</h2>
                                {item.PropertyType === "rent" ? <h2>${item.RentPrice}/week</h2> : <h2>Auction</h2>}

                            </StyledSearchResultRight>
                        </StyledSearchResultItem>
                    )
                })
                }


            </StyledSearchResults>
        </StyledOptionsOuterContainer>
    )
}

export default SortOptions