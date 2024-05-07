import { CardProjects } from "./CardProjects"
import { BgGlobal, Container } from "./_styles/Container.styles"
import { ContainerProjects, ProjectsContainer, ProjectsTitle } from "./_styles/Projects.styles"

export const Projects = () => {
    return (
        <BgGlobal>
            <Container id="Projects">
                <ProjectsContainer>
                    <ProjectsTitle>Projetos</ProjectsTitle>
                    <ContainerProjects>
                        <CardProjects
                            src="/img/LandPage_Arruda_Bombas.png"
                            alt="Arruda Bombas"
                            name="Arruda Bombas"
                            subName="Um site para apresentação de nossos produtos e serviços para o setor de Construção Civil"
                            hoverText="O site foi criado para 
                        mostrar os produtos e serviços da empresa, 
                        como suas bombas de concreto, e facilitar 
                        o contato com os clientes."
                            skillsText={
                                ["ReactJs", "NextJs", "Tailwind CSS", "TypeScript"]
                            }
                            href="https://arrudabombas.com.br/"
                        />
                        <CardProjects
                            src="/img/LandPage_API.png"
                            alt="API Gestão de carros"
                            name="API -  Gestão de loja de carros"
                            subName="API para gestão de loja de carros: criar,
                             editar, visualizar, excluir itens, buscar por ID e 
                             categorizar veículos em categorias pré-definidas"
                            hoverText="API completa para gestão de loja de carros. 
                            Cria, edita, visualiza e exclui registros, busca por ID e 
                            categoriza veículos. Ideal para comércio eletrônico automotivo
                             e sistemas de concessionárias."
                            skillsText={
                                ["NodeJS", "Fastify", "Prisma", "PostgreeSQL", "TSX", "TypeScript"]
                            }
                            href="https://github.com/lazaroalvesr/Api_Car"
                        />

                        <CardProjects
                            src="/img/LandPage_GYM.png"
                            alt="BestGym"
                            name="BestGym"
                            subName="Nosso site foi desenvolvido para apresentar os
                            produtos e serviços que oferecemos..
                            "
                            hoverText="Nosso site foi desenvolvido para apresentar os
                            produtos e serviços que oferecemos, assim como as características 
                            exclusivas que tornam a nossa academia especial "
                            skillsText={
                                ["ReactJs", "NextJs", "TypeScript", "Styled-Components"]
                            }
                            href="https://land-page-gym.vercel.app/"
                        />


                    </ContainerProjects>
                </ProjectsContainer>
            </Container>
        </BgGlobal>
    )
}