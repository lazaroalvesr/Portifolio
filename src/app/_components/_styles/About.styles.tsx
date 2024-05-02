'use client'

import styled from "styled-components";

export const AboutBg = styled.section`
  background: linear-gradient(to bottom, #252f3d, #1f1f1f, #252f3d);


 `

export const ContainerAbout = styled.section`
       padding-top: 120px;
       @media (min-width: 320px) and (max-width: 480px) {
               padding-top: 530px;
    }
`

export const AboutH1 = styled.h1`   
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

export const DivAbout = styled.div`
    width: 100%;
    padding-top: 40px;
    flex-direction: row;
    display: flex;
    @media (min-width: 320px) and (max-width: 480px) {
           flex-direction: column;
        }

        @media (min-width: 768px) and (max-width: 1024px) {
            display: flex;
            adding-left: 30px;
}

`

export const DivAbouInfos = styled.div`
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InfoName = styled.h2`
    color: #a2a8b1;
    font-size: 20px;
    text-align: center;
    padding-top: 30px;
    
`
export const DivImg = styled.div`
    width: 240px;
    height: 240px;
    border: 4px solid #27a5ac;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 120px;
`

export const ImgAbout = styled.img`
    width: 220px;
    height: 220px;
    border-radius: 120px;
    padding: 2px;
`

export const DivImgs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 15px;
    @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 120px;
    display: flex;
    }
   
`
export const ImgIcons = styled.img`
   width: 40px;
   height: 40px;

&&:hover{
    transform: scale(1.2);
    transition: transform 0.3s ease; 
}
`

export const DivAboutMe = styled.div`
    margin-left: 270px;
@media screen and (max-width: 600px) {
    margin-left: 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
        }
        @media (min-width: 768px) and (max-width: 1024px) {
            margin-left: 40px;

}
`

export const ParagraphAboutMe = styled.p`
    color: white;
    padding-top: 20px;
    font-size: 20px;
`

export const AboutDescription = styled.p`
    width: 660px;
    padding-top: 25px;
    color: #b8b8b8;
    font-size: 20px;
    @media (min-width: 320px) and (max-width: 480px) {
           width: 100%;
           padding-left: 14px;
           padding-right: 14px;
           font-size: 17px;
 }
    @media (min-width: 768px) and (max-width: 1024px) {
           width: 460px;
           padding-left: 14px;
           padding-right: 14px;
           font-size: 17px;

}
 `
export const AboutSubDescription = styled.p`
       width: 660px;
       padding-top: 25px;
       color: #b8b8b8;
       font-size: 20px;
@media (min-width: 320px) and (max-width: 480px) {
       width: 100%;
       padding-left: 14px;
       padding-right: 10px;
       font-size: 17px;
}
@media (min-width: 768px) and (max-width: 1024px) {
       width: 460px;
       padding-left: 14px;
       padding-right: 14px;
       font-size: 17px;

}
`

export const WordOnly = styled.span`
    color: #cac7c7;
    font-weight:800;
 `