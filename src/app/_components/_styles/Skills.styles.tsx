'use client'

import styled from "styled-components";

export const ContainerSkills= styled.div`
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

export const DivSkills = styled.div`
  padding-top: 60px;
  display: flex;
  cursor: pointer;
  align-items: center;
   @media (min-width: 320px) and (max-width: 480px) {
              padding-left: 12px;
        }
`

export const SkillImg = styled.div`
 font-size: 20px;
 justify-content: center;
 align-items: center;
 text-align: center;
 height: 240px;
 display: flex;
 flex-direction: column;
 
 `

export const SkillsName = styled.p`
    display: none;
    padding-top: 12px;
  ${SkillImg}:hover & {
    display: flex;
    color: #fff;
    transform: scale(1.2);
    transition: transform 0.3s ease; 

 }
`