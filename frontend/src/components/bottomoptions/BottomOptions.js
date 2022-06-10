import React from 'react'
import { StyledBottomOption, StyledBottomOptionsContainer, StyledBottomOptionsInnerContainer } from '../styled/BottomOptions.styled'
const BottomOptions = () => {
    return (
        <StyledBottomOptionsContainer>
            <StyledBottomOptionsInnerContainer>
                <StyledBottomOption>
                    <select>
                        <option>Landlords</option>
                    </select>

                    <select>
                        <option>Tenants</option>
                    </select>
                </StyledBottomOption>
                <StyledBottomOption>
                    <select>
                        <option>Commercial</option>
                    </select>
                    <select>
                        <option>Body Corperate</option>
                    </select>
                </StyledBottomOption>
            </StyledBottomOptionsInnerContainer>
        </StyledBottomOptionsContainer>
    )
}

export default BottomOptions