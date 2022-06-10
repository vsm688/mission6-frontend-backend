import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Form from '../components/form/Form'
import PropertyInfo from '../components/propertyInfo/PropertyInfo'
import LastestProperties from '../components/latestproperties/LastestProperties'
import BottomOptions from '../components/bottomoptions/BottomOptions'
import Footer from '../components/footer/Footer'
const HomePage = () => {
    return (
        <>
            <NavBar displayed={"yes"}></NavBar>
            <Form></Form>
            <PropertyInfo></PropertyInfo>
            <LastestProperties></LastestProperties>
            <BottomOptions></BottomOptions>
            <Footer></Footer>


        </>
    )
}

export default HomePage