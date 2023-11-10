import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import backx from "../images/model-x.jpg"
import back3 from "../images/model-3.jpg"
import backsolar from "../images/solar-panel.jpg"
import backy from "../images/model-y.jpg"
import back from "../images/model-s.jpg"
import backroof from "../images/solar-roof.jpg"
import backaccessories from "../images/accessories.jpg"
function Home() {
  return (
    <Container>
        <Section
        title="Model S"
        description="Order Online For Touchless Dilivery"
        backgroundImg={back}
        leftBtnText='Custom Order'
        rightBtnText="Existing Inventory"
        
        />
        <Section 
            title="Model X"
            description="Order Online For Touchless Dilivery"
            backgroundImg={backx}
            leftBtnText='Custom Order'
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model Y"
            description="Order Online For Touchless Dilivery"
            backgroundImg={backy}
            leftBtnText='Custom Order'
            rightBtnText="Existing Inventory"
        
        />
        <Section 
        
        title="Model 3"
        description="Order Online For Touchless Dilivery"
        backgroundImg={back3}
        leftBtnText='Custom Order'
        rightBtnText="Existing Inventory"
        />
         <Section 
        
        title="Lowest Cost Solor Panel in America"
        description="money back gurantee"
        backgroundImg={backsolar}
        leftBtnText='Order Now'
        rightBtnText="Lern More"
        />
        <Section 
        
        title="Solar for New Roofs"
        description="Solar roof Costs Less than a New Roof"
        backgroundImg={backroof}
        leftBtnText='Order Now'
        rightBtnText="Lern More"
        />
        <Section 
        
        title="Accessories"
        description=""
        backgroundImg={backaccessories}
        leftBtnText='Show Now'
        rightBtnText=""
        />
        </Container>
  )
}

export default Home
const Container=styled.div`
height:100vh;
`