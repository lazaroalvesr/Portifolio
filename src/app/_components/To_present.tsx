
import Link from "next/link"
import { BgGlobal, Container } from "./_styles/Container.styles"
import { ButtonPlay, ContainerPresent, DivInfos, DowloadCurriculum, ImgInfos, ImgPlay, ParagraphInfo, PlayText, PresentDiv, ProjectsLink, TitleInfo, ViewAllProjects } from "./_styles/to_Present.styles"

export const ToPresent = () => {
    return (
        <BgGlobal>

            <Container>
                <ContainerPresent>
                    <DivInfos>
                        <TitleInfo>Lázaro Alves R</TitleInfo>
                        <ParagraphInfo>Desenvolvedor Front-End ReactJS</ParagraphInfo>
                        <PresentDiv>
                            <Link href="/dowloads/Curriculo_Para_Portifólio_Web.pdf" passHref target="_blank">
                                <DowloadCurriculum>
                                    Baixe o Curriculo
                                </DowloadCurriculum>
                            </Link>
                            <ProjectsLink href={""}>
                                <ViewAllProjects>
                                    <ButtonPlay>
                                        <ImgPlay src="/img/botao-play.png" alt="Icone de Botão de Play" />
                                    </ButtonPlay>
                                    <PlayText>Ver Projetos</PlayText>
                                </ViewAllProjects>
                            </ProjectsLink>
                        </PresentDiv>
                    </DivInfos>
                        <DivInfos>
                            <ImgInfos
                            src="/img/Dev.svg"
                            alt="Desenvolvedor sentado em uma mesa progamando no seu Computador"
                        /> 
                        </DivInfos>
                </ContainerPresent>
            </Container>
        </BgGlobal>
    )
}
