
import { AboutH1, ContainerAbout, DivAbouInfos, DivAbout, DivImg, ImgAbout, InfoName, DivImgs, ImgIcons, DivAboutMe, ParagraphAboutMe, AboutDescription, WordOnly, AboutSubDescription, AboutBg } from "./_styles/About.styles"
import { Container } from "./_styles/Container.styles"
import { LinkRedirect } from "@/lib/LinkRedirect"

export const About = () => {
    return (
        <AboutBg>
            <Container>
                <ContainerAbout>
                    <AboutH1>SObre</AboutH1>
                    <DivAbout>
                        <DivAbouInfos>
                            <DivImg>
                                <ImgAbout
                                    src="/img/perfil.jpg"
                                    about="Foto de Perfil"
                                    alt="Foto de Perfil"
                                />
                            </DivImg>
                            <InfoName>Lázaro Alves R</InfoName>
                            <DivImgs>
                                <LinkRedirect
                                    href="lazaroalves@gmail.com"
                                    src="/img/Icons/Icone_Email.png"
                                    alt="Link Redirect para o Email"
                                />
                                <LinkRedirect
                                    href="https://github.com/lazaroalvesr"
                                    src="/img/Icons/Icone_GittHub.png"
                                    alt="Link Redirect Github"
                                />
                                <LinkRedirect
                                    href="https://www.linkedin.com/in/l%C3%A1zaro-alves-r/"
                                    src="/img/Icons/Icone_Linkedin.png"
                                    alt="Link Redirect o Linkedin"
                                />
                            </DivImgs>
                        </DivAbouInfos>
                        <DivAboutMe>
                            <ParagraphAboutMe>Conheça um pouco sobre mim</ParagraphAboutMe>
                            <AboutDescription>Desenvolvedor Front-End ReactJS com 1 ano de experiência.
                            Trabalho com <WordOnly>HTML</WordOnly> , <WordOnly>CSS</WordOnly>,  <WordOnly>JavaScript</WordOnly>,  <WordOnly>TypeScript</WordOnly> , <WordOnly>ReactJS</WordOnly> ,
                              <WordOnly> Next.js</WordOnly>, <WordOnly>Tailwind CSS</WordOnly> e <WordOnly>Styled-Components</WordOnly>.
                               Tenho habilidades em <WordOnly>Node.js</WordOnly>, <WordOnly>Fastify</WordOnly> , <WordOnly>SQL</WordOnly>  , <WordOnly>PostgreSQL</WordOnly> 
                            e <WordOnly>Prisma</WordOnly></AboutDescription>
                            <AboutSubDescription>Com habilidades abrangentes, da concepção à implementação, garanto resultados de 
                                alta qualidade e impacto positivo nos projetos.</AboutSubDescription>
                        </DivAboutMe>
                    </DivAbout>
                </ContainerAbout>
            </Container>
            </AboutBg>
        
    )
}