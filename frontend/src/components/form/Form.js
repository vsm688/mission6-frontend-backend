import React from 'react'
import { useState, useEffect } from 'react'
import {
    StyledFormParentDiv, StyledRentalBanner, StyledSearchForm, StyledTopForm,
    StyledBottomForm, StyledCentreForm, StyledMultiSelectDropDown,
    StyledMultiSelectDropDownParent, StyledMultiSelectDropDownList, StyledPriceInputs, StyledBedroomInputs, StyledPropertyTypeInputs,
    StyledinputHolder, StyledinputHolderWithText, StyledInputPriceFields, StyledPriceDivHolder, StyledBedRoomInputHolder, StyledinputHolderBathRoom, StyledPetsAndAvailableButtons
    ,StyledSearchButtonContainer
} from '../styled/Form.styled'
import { useNavigate } from 'react-router-dom';



const Form = () => {
  
    const [formState, setFormState] = useState("");
    const [suburbState, setSuburbState] = useState("");
    const [suburbArrayState, setsuburbArrayState] = useState(null);
    const [multiSelectMenuOpenState, setMultiSelectMenuOpenState] = useState(false);


    const [selectedCheckBox, setSelectedCheckBox] = useState([]);

    const navigate = useNavigate();

    const redirectToSearchResults = (event) =>{
        event.preventDefault();
        navigate("/searchresults")

    }

    const checktheCheckBox = (item) => {
        if (!selectedCheckBox.includes(item)) {
            setSelectedCheckBox(
                [...selectedCheckBox, item]
            )

        } else {
            const filteredCheckBoxState = selectedCheckBox.filter((c) => c !== item)
            setSelectedCheckBox(filteredCheckBoxState);
            // let copiedCheckBoxState = selectedCheckBox;
            // let itemIndex = copiedCheckBoxState.indexOf(item)
            // copiedCheckBoxState.splice()
        }

    }
    useEffect(
        () => { console.log(selectedCheckBox) }
        , [selectedCheckBox])




    useEffect(() => {
        if (suburbState === "Auckland City") {
            setsuburbArrayState(aucklandCity);
        }
        if (suburbState === "Franklin") {
            setsuburbArrayState(franklin);
        }
        if (suburbState === "Manukau City") {
            setsuburbArrayState(manukauCity);
        }
        if (suburbState === "Far North") {
            setsuburbArrayState(farNorth);
        }
        if (suburbState === "Kaipara") {
            setsuburbArrayState(kaipara);
        }
        if (suburbState === "Central Otago") {
            setsuburbArrayState(centralOtago);
        }
        if (suburbState === "Dunedin") {
            setsuburbArrayState(dunedin);
        }
        if (suburbState === "All Districts") {
            setsuburbArrayState(null)
        }
    }, [suburbState])

    useEffect(() => {

    }, [multiSelectMenuOpenState])


    const respondToFormClick = (event) => {
        setFormState(event.target.value);
    }

    const respondToDistrictClick = (event) => {
        setSuburbState(event.target.value);
    }

    const aucklandDistricts = ["All Districts", "Auckland City", "Franklin", "Manukau City"];
    const northlandDistricts = ["All Districts", "Far North", "Kaipara"]
    const otagoDistricts = ["All Districts", "Central Otago", "Dunedin"]


    // Auckland Location
    const aucklandCity = ["Mt Eden", "Epsom", "Hillsborough", "Mount Roskill", "Balmoral", "Blockhouse Bay"]
    const franklin = ["Aka Aka", "Ararimu", "Awhitu", "Bombay"]
    const manukauCity = ["Alfriston", "Beachlands", "Botany Downs", "Brookby", "Bucklands Beach"]

    // Northland
    const farNorth = ["Ahipara", "Awanui", "Broadwood", "Cable Bay", "Cape Reinga"]
    const kaipara = ["Aranga", "Arapohue", "Baylys Beach", "Dargaville"]
    // Otago
    const centralOtago = ["Alexandra", "Clyde", "Ettrick", "Ophir"]
    const dunedin = ["Abbotsford", "allanton", "Clyde Hill", "FairField"]


    let chosenDistrict = null;
    let options = null;

    if (formState === "Auckland") {
        chosenDistrict = aucklandDistricts;
    } else if (formState === "Northland") {
        chosenDistrict = northlandDistricts;
    } else if (formState === "Otago") {
        chosenDistrict = otagoDistricts;
    }

    if (chosenDistrict) {
        options = chosenDistrict.map((item) => <option key={item + "District"}>{item}</option>)
    }




    return (
        <StyledFormParentDiv>
            <StyledRentalBanner>Find your rental</StyledRentalBanner>
            <StyledSearchForm>
                <StyledTopForm>
                    <select onChange={respondToFormClick} onClick={(event) => {
                        setMultiSelectMenuOpenState(false)
                    }} >
                        <option>All New Zealand</option>
                        <option>Auckland</option>
                        <option>Northland</option>
                        <option>Otago</option>
                    </select>
                    <select onChange={respondToDistrictClick}
                        onClick={(event) => { setMultiSelectMenuOpenState(false) }}
                    >
                        {options === null ? <option>All Districts</option> : options}
                    </select>
                    <StyledMultiSelectDropDownParent onClick={() => setMultiSelectMenuOpenState(!multiSelectMenuOpenState)} >
                        <StyledMultiSelectDropDown >
                            <p>Suburb</p>
                            <StyledMultiSelectDropDownList open={multiSelectMenuOpenState} onClick={(event) => event.stopPropagation()}>
                                {suburbArrayState === null ? <li></li> :

                                    suburbArrayState.map((item) => <li key={item}> <input type={"checkbox"} defaultChecked={selectedCheckBox.includes(item)} value={item} onClick={(e) => checktheCheckBox(e.target.value)}></input>{item}</li>)
                                }
                            </StyledMultiSelectDropDownList>
                        </StyledMultiSelectDropDown>
                    </StyledMultiSelectDropDownParent>
                </StyledTopForm>

                <StyledCentreForm>
                    <StyledPriceInputs>

                        <StyledPriceDivHolder>
                            <p>Price</p>
                        </StyledPriceDivHolder>
                        <StyledInputPriceFields>
                            <StyledinputHolder>
                                <select>
                                    <option>$100,000</option>
                                    <option>$200,000</option>
                                    <option>$300,000</option>
                                    <option>$400,000</option>
                                    <option>$500,000</option>
                                    <option>$600,000</option>
                                </select>
                            </StyledinputHolder>
                            <StyledinputHolderWithText>
                                <p>To</p>
                                <select>
                                    <option>$100,000</option>
                                    <option>$200,000</option>
                                    <option>$300,000</option>
                                    <option>$400,000</option>
                                    <option>$500,000</option>
                                    <option>$600,000</option>
                                </select>
                            </StyledinputHolderWithText>
                        </StyledInputPriceFields>
                    </StyledPriceInputs>

                    <StyledBedroomInputs>
                        <StyledBedRoomInputHolder>
                            <StyledPriceDivHolder>
                                <p>Bedrooms</p>
                            </StyledPriceDivHolder>
                            <StyledinputHolder>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5+</option>
                                </select>
                            </StyledinputHolder>
                        </StyledBedRoomInputHolder>
                        <StyledBedRoomInputHolder>
                            <StyledPriceDivHolder>
                                <p>Bathrooms</p>
                            </StyledPriceDivHolder>
                            <StyledinputHolder>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5+</option>
                                </select>
                            </StyledinputHolder>
                        </StyledBedRoomInputHolder>
                    </StyledBedroomInputs>
                    <StyledPropertyTypeInputs>
                        <StyledPriceDivHolder>
                            <p>Property Type</p>
                        </StyledPriceDivHolder>
                        <StyledinputHolderBathRoom>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5+</option>
                            </select>
                        </StyledinputHolderBathRoom>
                    </StyledPropertyTypeInputs>
                </StyledCentreForm>

                <StyledBottomForm>
                    <StyledPetsAndAvailableButtons>
                        <input type={"checkbox"}></input><label>Pets Allowed</label>
                    </StyledPetsAndAvailableButtons>
                    <StyledPetsAndAvailableButtons>
                        <input type={"checkbox"}></input><label>Pets Allowed</label>
                    </StyledPetsAndAvailableButtons>
                </StyledBottomForm>
            </StyledSearchForm>
            <StyledSearchButtonContainer>
                <button onClick={(event) => redirectToSearchResults(event)} >Search</button>
            </StyledSearchButtonContainer>

        </StyledFormParentDiv >
    )
}

export default Form
// </input><label key={item + "itemlabel"}>{item}</label>