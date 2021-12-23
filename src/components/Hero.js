import React from 'react' 
// import { FaSlideshare } from 'react-icons/fa';
import styled,{css} from 'styled-components/macro' 
import { Button } from './Button'; 
import {IoMdArrowRoundForward} from 'react-icons/io' 
import {IoArrowForward,IoArrowBack} from 'react-icons/io5'

const HeroSection = styled.section` 
height:100vh; 
max-height:1100px; 
position:relative; 
overflow:hidden;`; 
 
 const HeroWrapper = styled.div` 
 width:100%; 
 height:100%; 
 display:flex; 
 justify-content:center; 
 align-items:center; 
 over-flow:hidden; 
 position:relative`; 
 
 const HeroSlide = styled.div``; 
 const HeroSlider = styled.div``; 
 const HeroImage = styled.img``; 
 const HeroContent = styled.div``;
 const Arrow = styled(IoMdArrowRoundForward)``; 

 const SliderButtons = styled.div`
 position:absolute;
 Bottom:50px;  
 right:50px;
 display:flex;
 z-index:10;


 `;
 const arrowButtons = css` 
 width:50px;
 height:50px; 
 color:#fff;
 cursor:pointer;
 background:#000d1a;
 border-radius:50px;
 padding:10px;
 margin-right:1rem; 
 user-select:none; 
 transition:0.3s; 
 &:hover{ 
     background:#CD853F;
     transform:scale(1.05);
 }
 `; 
 const PrevArrow = styled(IoArrowBack)`
 ${arrowButtons}
 `; 
 const NextArrow = styled(IoArrowForward)`
 ${arrowButtons}
 `;


const Hero = ({slides}) => {
    return (
        <HeroSection> 
        <HeroWrapper> 
        {slides.map((slide,index)=>{ 
            return (
            <HeroSlide key={index}>  
            <HeroSlider>  
            <HeroImage/> 
            <HeroContent>
                <h1>{slide.title}</h1> 
                <p>{slide.price}</p> 
                <Button to={slide.path} primary="true" style={{maxWidth:"160px"}}> 
                {slide.label} 
                <Arrow />
                </Button>
            </HeroContent>
            </HeroSlider>
            </HeroSlide>
            )
        })} 
        <SliderButtons> 
        <PrevArrow/> 
        <NextArrow/>
        </SliderButtons>
        </HeroWrapper>
            
        </HeroSection>
    )
}

export default Hero