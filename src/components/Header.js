import React,{ useState }  from 'react'
import styled from 'styled-components'
import teslalogo from "../images/logo.svg"
import { selectCars } from '../features/cars/carSlice';
import { useSelector } from "react-redux";
function Header() {
const[burgerStatus,setBurgerStatus]=useState(false);
const cars = useSelector(selectCars)
console.log(cars)

  return (
    <Container>
     <a href=""><img src={teslalogo} /></a>
     <Menu>
     {cars && cars.map((car,index)=>{
        return <a key={index} href='#' >{car}</a>
     })} 
     </Menu>
     <RightMenu>
     <a href="">Shop</a>
     <a href="">Tesla Account</a>
     
     
     </RightMenu>
    
   

     <CustomMenu onClick={()=>{
      setBurgerStatus(true);
     }}>
     <i class="fa-solid fa-bars"></i>
     </CustomMenu>
     <BurgerNav show={burgerStatus}>

      <CustomWraper>
        <CustomClose  onClick={()=>{
          setBurgerStatus(false)
        }}>  <i class="fa-solid fa-xmark"></i> </CustomClose>
      </CustomWraper>
      



      <li><a href='#'>Existing Library</a></li>
      <li><a href='#'>used inventary</a></li>
      <li><a href='#'>Trade-in</a></li>
      <li><a href='#'>test - drive</a></li>
      <li><a href='#'>insurance</a></li>
      <li><a href='#'>cyber truck</a></li>
      <li><a href='#'>charging</a></li>
     </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
z-index:1;
min-height:60px;
position:fixed;
display:flex;
top:0;
right:0;
left:0;
justify-content:space-between;
align-items:center;
padding:0 20px;


`

const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a {
text-transform:uppercase;

font-weight:600;
padding:0 10px;
flex-wrap:nowrap;
}

@media(max-width:768px){
  display:none;
}
`
const RightMenu = styled.div`
display:flex;
align-items:center;
a {
  text-transform:uppercase;
  
  font-weight:600;
  padding:0 10px;
  
  margin-right:10px;
  }
`
const CustomMenu = styled.div`
cursor:pointer;


`

const BurgerNav = styled.nav`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform:${props => props.show ? 'translateX(0)':'translateY(100%)'};
transition: transform 0.2s ;
li{
  padding:15px 0;
  
  border-bottom:1px solid rgba(0,0,0,.2);

  a{
    font-wieght:600;
  }
}



`
const CustomWraper = styled.div`
 display:flex;
 justify-content:flex-end;
`

const CustomClose = styled.div`
cursor:pointer;
`