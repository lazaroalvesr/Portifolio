'use client'

import styled from "styled-components";

export const ProjectsContainer = styled.section`
  padding-top: 160px;
  align-items: center;
  justify-content: center;
  margin: auto;
  display: flex;
  flex-direction: column;
`

export const ProjectsTitle = styled.h1`
    position: relative;
    text-align: center;
    font-size: 30px;
    color: white;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    display: flex;
    padding:2px;
    @media (min-width: 320px) and (max-width: 480px) {
    padding-top: 9px;
    }

    &&::before{
        content: '';
        position: absolute;
        left: -20.0%;
        width: 12px;
        height: 12px;
        background: linear-gradient(135deg, #6ea4a7, #fff);
        border: 5px solid #79b6c9;
        border-radius: 5px;
        display: block;
        @media (min-width: 320px) and (max-width: 480px) {
               left: -30px;
        }
        @media (min-width: 768px) and (max-width: 1024px) {
            left: -30px;

}
    }
`
export const ContainerProjects = styled.div`
   padding-top: 120px;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 35px;

   @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    padding-top: 50px;
   
}
@media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding-top: 40px;
}
   `

export const DivCardProjects = styled.div`
    width: 100%;
`

export const DivProjectsCardBgDown = styled.div`
  background-color: #27a5ac;
  position: absolute;
  width: 270px;
  border-radius: 4px;
  height: 10px;
  z-index: -1;
  left: 30px;
`

export const DivProjects = styled.div`
    width: 348px;
    height: 347px;
    position: relative;
    border-radius: 12px;
    background-color: #393e46;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
        &&:hover{
    transform: scale(1.1);
    transition: transform 0.3s ease; 
   }
   &&::after{
    content: '';
    position: absolute;
    background-color: #27a5ac;
    width: 310px;
    left: 15px;
    height: 10px;
    border-radius: 4px;
    top: -10px;
   }
   @media (min-width: 320px) and (max-width: 480px) {
        width: 350px;
}
`
export const DivProjectImg = styled.img`
  background-color: blue;
  width: 309px;
  margin-left: 23px;
  margin-top: 20px;
  height: 180px;
  border-radius: 5px;

`

export const DivProjectsContainer = styled.div`
  margin-left: 25px;
  padding-top: 12px;
  width: 288px;
  display: flex;
  flex-wrap: wrap;
  height: 120px;
`;


export const DivProjectHover = styled.div`
  display: none;
  
  ${DivProjects}:hover & {
  display: flex;
  left: 0;
  position: absolute;
  background-color: #393e46;
  padding: 25px;
  width: 100%;
  top: 0;
  max-width: fit-content;
  height: 100%;
  flex-direction: column;
  border-radius: 12px;
  transition: transform 0.3s ease; 
  color: white;
  }
`;

export const DivHoverTitle = styled.h3`
  font-size: 20px;
  display: flex;
`

export const DivHoverDescription = styled.h3`
  font-size: 14px;
  padding-top: 20px;
  display: flex;
  color: #b8b8b8;
`


export const HoverContainer = styled.div`
  width: 100%;
  display: flex;
  max-width: 300px;
`;

export const DivHoverSkills = styled.div`
  padding-top: 20px;
  gap: 10px;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
`;

export const DivHoverSkillsText = styled.p`
  color:#27a5ac ;
  text-align: center;
  display: flex;
  align-items: center;
  width: fit-content;
  display: flex;
  justify-content: center;
  padding: 6px;
  white-space: nowrap;
  border: 3px solid #27a5ac;
  border-radius: 12px;
`

export const DivHoverViewProject = styled.a`
  background-color: #1a212a;
  width: 300px;
  padding: 15px;
  margin-top: 30px;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  text-align: center;
  cursor: pointer;

  &&:hover{
    transform: scale(1.1);
    transition: transform 0.3s ease; 
    background-color: #252f3d;
  }
`

export const DivProjectName = styled.p`
  font-size: 20px;
  color: white;
  font-weight: 700;
  padding-top: 16px;
`;

export const DivProjectSubName = styled.p`
  font-size: 12px;
  padding-top: 12px;
  color: #b8b8b8;
  word-break: break-all;
`;
