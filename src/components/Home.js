import React from 'react'
import styled from "styled-components"
import Section from "./Section"
import Footer from "./Footer"


const Container=styled.div`
    height: 100vh;




`

export default function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online For Touchless DElivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            
             />
            <Section  
                title="Model X"
                description="Order Online For Touchless DElivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory" />
            <Section 
                 title="Model Y"
                description="Order Online For Touchless DElivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                 title="Model 3"
                description="Order Online For Touchless DElivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"/>
            <Section 
                title="Solar Panel"
                description="Order Online For Touchless DElivery"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Accessories"
                backgroundImg="accessories.jpg"
                leftBtnText="Shop Now"
                
            />
            <Footer />
        </Container>
    )
}
