import React from 'react'
import styled from 'styled-components'
import Fade from "react-reveal/Fade"

import downarrow from "../images/down-arrow.svg.png"

function Section(props) {
  return (
    <Wrap style={{backgroundImage: `url(${props.backgroundImg})`}} >
            <Fade bottom>            
             <ItemText>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
           </ItemText>
           


           <Buttons>
           <ButtonGroup>
              <LeftButton>
                {props.leftBtnText}
                </LeftButton>
                { props.rightBtnText &&  <RightButton>
                {props.rightBtnText}
                </RightButton>}

           </ButtonGroup>
           <DownArrow src={downarrow} />
           </Buttons>
           </Fade>
        </Wrap>
  )
}

export default Section;


const Wrap = styled.div`

width:100vw;
height:100vh;
background-size: cover;
background-position:center;
background-repeat:no-repeat;
background-image: url('/images/model-s.jpg');
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

`
const ItemText=styled.div`
padding-top:10vh;
text-align-center;


`
const ButtonGroup=styled.div`
display:flex;
margin-top:30px;
@media (max-width:768px){
  flex-direction:column;
}



`
const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height:48px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
text-transform:uppercase;
font-size:12px
cursor:pointer;
margin:8px;

`

const RightButton=styled(LeftButton)`
background:white;
opacity:0.65;
color:black

`
const DownArrow = styled.img`
margin-top:20px;
height: 25px;
animation:animateDown infinite 1.5s

`
const Buttons=styled.div``