'use client'

import styled from "styled-components";

export const ContactContainer = styled.section`
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
    @media (min-width: 320px) and (max-width: 480px) {
        padding-top: 70px;
        align-items: center;

        }
    @media (min-width: 768px) and (max-width: 1024px) {
            padding-top: 80px;
            align-items: center;

}
`

export const ContactTitle = styled.h1`
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
        left: -22.0%;
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

export const ContactSubTitle = styled.h2`
    font-size: 22px;
    padding-top: 32px;
    color: #848282;
    @media (min-width: 320px) and (max-width: 480px) {
             padding-left: 20px;
             padding-right: 8px;
        }
        @media (min-width: 768px) and (max-width: 1024px) {
            padding-left: 20px;
             padding-right: 8px;
        }
        `

export const ContactItens = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 32px;
    padding-top: 90px;
    @media (min-width: 320px) and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
        padding-top: 50px;
        }

`

export const DivIcons = styled.p`
   display: flex;
   align-items: center;
   @media (min-width: 320px) and (max-width: 480px) {
         font-size: 17px;
        width: 340px;
        word-wrap: break-word;
        }
        @media (min-width: 768px) and (max-width: 1024px) {
            width: 370px;

        }
`

export const IconsText = styled.h2`
    font-size: 20px;
    color: #848282;
    padding-left: 14px;
    @media (min-width: 320px) and (max-width: 480px) {
         font-size: 17px;
        width: 300px;
        word-wrap: break-word;
        }
        @media (min-width: 768px) and (max-width: 1024px) {
      width: 300px;
      font-size: 18px;
        word-wrap: break-word;

        }
`

export const ContactIcons = styled.img`
   width: 40px;
      height: 40px;
      align-items: center;
      display: flex;
`

export const ContactLink = styled.a`
    display: flex;
    text-decoration: none;

    &&:hover{
        transform: scale(1.1);
        transition: transform 0.3s ease; 

    }
`