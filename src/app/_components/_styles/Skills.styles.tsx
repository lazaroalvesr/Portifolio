'use client'

import styled from "styled-components";

export const ContainerSkills = styled.div`
   padding-top: 120px;
`

export const SkillSTitle = styled.h1`
    position: relative;
    text-align: center;
    font-size: 30px;
    color: white;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    display: flex;
    padding:2px;

    &&::before{
        content: '';
        position: absolute;
        left: 43.0%;
        width: 12px;
        height: 12px;
        background: linear-gradient(135deg, #6ea4a7, #fff);
        border: 5px solid #79b6c9;
        border-radius: 5px;
        display: block;
        @media (min-width: 320px) and (max-width: 480px) {
               left: 110px;
        }
        @media (min-width: 768px) and (max-width: 1024px) {
            left: 330px;

}
    }
`

export const SkillsCardContainer = styled.div`
 display: flex;
width: 100%;
margin: auto;
margin-top: 52px;
gap: 30px;
flex-wrap:wrap;
align-items: center;
justify-content: center;
@media (min-width: 320px) and (max-width: 480px) {
       width: 100%;
       gap: 19px;
    }
`

export const SkillsCards = styled.div`
  width: 194px;
  height: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  border: 2px solid #848282;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease; 

&&:hover{
  transform: scale(1.1);
}
@media (min-width: 320px) and (max-width: 480px) {
        width: 180px;
    }
`


export const SkilsImg = styled.img`
  width: 80px;
  height: 80px;
`

export const SkillsName = styled.h2`
  font-size: 20px;
  color: #fff;
`