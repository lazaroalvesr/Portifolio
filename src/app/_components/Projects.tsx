import { CardProjects } from "./CardProjects"
import { BgGlobal, Container } from "./_styles/Container.styles"
import { ContainerProjects, DivCardProjects, DivProjectHover, DivProjectImg, DivProjectName, DivProjectSubName, DivProjects, DivProjectsContainer, ProjectsContainer, ProjectsTitle } from "./_styles/Projects.styles"

export const Projects = () => {
    return (
        <BgGlobal>
            <Container id="Projects">
                <ProjectsContainer>
                    <ProjectsTitle>Projetos</ProjectsTitle>
                    <ContainerProjects>
                        <CardProjects
                            src="/img/LandPage_Arruda_Bombas.png"
                            alt="LandPage Arruda Bombas"
                            name="LandPage - Arruda Bombas"
                            subName="Um site para apresentação de nossos produtos e serviços para o setor de Construção Civil"
                            hoverText="O site foi criado para 
                        mostrar os produtos e serviços da empresa, 
                        como suas bombas de concreto, e facilitar 
                        o contato com os clientes"
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
                            hoverText="O site foi criado para 
                        mostrar os produtos e serviços da empresa, 
                        como suas bombas de concreto, e facilitar 
                        o contato com os clientes"
                            skillsText={
                                ["NodeJS", "Fastify", "Prisma", "PostgreeSQL", "TSX", "TypeScript"]
                            }
                            href="https://github.com/lazaroalvesr/Api_Car"
                        />
                    </ContainerProjects>
                </ProjectsContainer>
            </Container>
        </BgGlobal>
    )
}
