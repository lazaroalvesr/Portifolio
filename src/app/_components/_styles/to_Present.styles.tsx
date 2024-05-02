'use client'

import styled from "styled-components";

export const ContainerPresent = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 55px;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    @media (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
        padding-top: 20px;
        width: 100%;
        position: relative;
    }
`

export const DivInfos = styled.div`
    @media (min-width: 320px) and (max-width: 480px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 400px;
         padding-left: 25px;
}
`

export const ParagraphInfo = styled.p`
    color: #79b6c9;
    font-size: 30px;
    align-items: start;
    @media (min-width: 320px) and (max-width: 480px) {
           font-size: 20px;
    }
 `

export const TitleInfo = styled.p`
    color: white;
    font-size: 75px;
    font-weight: 500;
    padding-top: 12px;
    width: 100%;
    @media (min-width: 320px) and (max-width: 480px) {
           padding-left: 30px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 70px;
}
`

export const PresentDiv = styled.div`
       display: flex;
       align-items: center;
       gap: 13px;
       @media (min-width: 320px) and (max-width: 480px) {
              position: absolute;
              display: flex;
              top: 640px;
              align-items: center;
              gap: 30px;
              justify-content: center;
              left: 26px;
    }
    
`

export const ViewAllProjects = styled.div`
    display: flex;
    position: relative;
    padding-top: 20px;
    gap: 8px;
    align-items: center;
    cursor: pointer;
    &&:hover{
        transform: scale(1.1);
        transition: transform 0.3s ease; 
    }
`

export const ImgPlay = styled.img`
    width: 40px;
    height: 40px;
`

export const ButtonPlay = styled.div`
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    
`

export const PlayText = styled.p`
    color: white;
    list-style: none;
    text-decoration: none;
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 17px;
}
`

export const ProjectsLink = styled.a`
    text-decoration: none;
`

export const DowloadCurriculum = styled.button`
    width: 220px;
    border: 2px solid #499b9f;
    color: white;
    padding: 12px;
    background-color: #2b3749; 
    border-radius: 6px;
    margin-top: 26px;
    cursor: pointer;
    &&:hover{
        transform: scale(1.1);
        transition: transform 0.3s ease; 
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 170px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 170px;

}
`

export const ImgInfos = styled.img`
    width: 100%;
    max-width: 590px;
    height: 420px;
    @media (min-width: 320px) and (max-width: 480px) {
        position: absolute;
        height: auto;
        max-width: 300px;
        top: 300px ;
    }
`
