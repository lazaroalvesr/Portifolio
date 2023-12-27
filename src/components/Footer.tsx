'use client'

import React, { useState, useEffect } from "react";

export default function Footer() {
  const [anoCriacao, setAnoCriacao] = useState("");

  useEffect(() => {
    const obterAnoAtual = () => {
      const data = new Date();
      return data.getFullYear().toString();
    };

    setAnoCriacao(obterAnoAtual());
  }, []);

  return (
    <footer className=" pb-32 text-center lg:pb-4 dark:text-gray-300 
    text-gray-900   ">
      <p className="-pt-32">© {anoCriacao} Lázaro Alves R | Todos os Direitos Reservados.</p>
    </footer>
  );
}
