'use client'

import { useEffect, useState } from "react";
import { BGFooter, FooterContainer, NameFooter } from "./_styles/Footer.styles"

export const Footer = () => {
    const [anoCriacao, setAnoCriacao] = useState("");

    useEffect(() => {
      const obterAnoAtual = () => {
        const data = new Date();
        return data.getFullYear().toString();
      };
  
      setAnoCriacao(obterAnoAtual());
    }, []);
    
   
    return (
        <BGFooter>
            <FooterContainer>
                <NameFooter>© {anoCriacao} Alves R. Alguns direitos reservados.</NameFooter>
            </FooterContainer>
        </BGFooter>
    )
}

