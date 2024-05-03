'use client'

import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    color: white;
    @media (min-width: 320px) and (max-width: 480px) {
        padding-top: 25px;
        padding-bottom: 25px;
        display: flex;
        border-bottom: 2px solid #7f7f7f;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        padding-left: 30px;
    }
 `

export const HeaderTitle = styled.h1`
    font-size: 25px;
    display: flex;
    align-items: center;
    gap: 12px;
    @media (min-width: 320px) and (max-width: 480px) {
        padding-left: 24px;
    }

 `

export const HeaderUl = styled.ul`
    display: flex;
    align-items: center;
    @media (min-width: 320px) and (max-width: 480px) {
        position: absolute; 
        width: 100%;
        flex-direction: column;
        background-color: #252f3d;
        font-size: 20px;
        top: 90px;
        z-index: 50;
    }
 `

export const HeaderLi = styled.li`
    position: relative;
    list-style: none;
    padding: 40px;
    cursor: pointer;
 
 &:hover {
     &::after {
         content: '';
         display: block;
         height: 3px;
         width: 25px;
         border-radius: 20px;
         bottom: 32px;
         background-color: #79b6c9;
         position: absolute; 
         left: 41px;
     }
    }
 `
export const ButtonMenuMobile = styled.button`
    display: none;
    @media (min-width: 320px) and (max-width: 480px) {
           display: flex;
           border: none;
           background-color: #252f3d;
           padding-right: 12px;
    }
 `

 export const LinkHeader = styled.a`
    display: flex;
    text-decoration: none;
    color: white
 `