// src/components/CardsContainer.js
import React from 'react';
import Card from './Card';

const cardData = [
    {
        title: 'Exclusão de disciplinas',
        description: `A solicitação de exclusão de disciplinas do 2º semestre/2024 poderá ser feita de 25/07 a 30/08.
                      De acordo com o artigo 73 do Regimento Geral da USP, a carga horária mínima não poderá ser inferior a 12 créditos-aula semanais.
                      Casos excepcionais serão analisados.`,
        link: '/exclusao'
    },
    {
        title: 'Trancamento de disciplinas',
        description: `A solicitação de trancamento de disciplinas do 2º semestre/2024 poderá ser feita de 31/08 a 16/09.
                      De acordo com o artigo 73 do Regimento Geral da USP, a carga horária mínima não poderá ser inferior a 12 créditos-aula semanais.
                      Casos excepcionais serão analisados.`,
        link: '/trancamento'
    },
    {
        title: 'Requerimento de Matrícula',
        description: `De acordo com o artigo 73 do Regimento Geral da USP, a carga horária mínima não poderá ser inferior a 12 créditos-aula semanais e, de acordo com o artigo 2.º da Resolução CoG nº 3903, não poderá ser superior a 40 horas.
                      Exceção: Alunos que são prováveis formandos e aqueles que não conseguem se inscrever em mais disciplinas por falta de requisitos.`,
        link: '/matricula'
    },
    {
        title: 'Trancamento total do curso',
        description: `A solicitação de trancamento total do curso pode ser feita em qualquer momento do semestre desde que o aluno já tenha obtido, pelo menos, 24 créditos em seu currículo (equivalências não são consideradas).
                      É possível solicitar o trancamento total por até 4 semestres, com a possibilidade de prorrogação por mais 2 semestres.`,
        link: '/trancamentoTotal'
    }
];

const CardsContainer = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-4 mt-8 lg:mt-16 px-4 lg:px-0 items-center lg:items-start">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                />
            ))}
        </div>
    );
};


export default CardsContainer;