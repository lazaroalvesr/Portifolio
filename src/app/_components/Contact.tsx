import { ContactContainer, ContactIcons, ContactItens, ContactLink, ContactSubTitle, ContactTitle, DivIcons, IconsText } from "./_styles/Contact.styles"
import { BgGlobal, Container } from "./_styles/Container.styles"

export const Contact = () => {
    return (
        <BgGlobal>
            <Container id="Contact">
                <ContactContainer>
                    <ContactTitle>Contato</ContactTitle>
                    <ContactSubTitle>Estou aqui para transformar suas ideias em realidade.
                        Vamos iniciar essa jornada juntos. Entre em contato e vamos conversar
                        sobre seu projeto.</ContactSubTitle>
                    <ContactItens>
                        <ContactLink href="https://github.com/lazaroalvesr" target="_blank">
                            <DivIcons>
                                <ContactIcons src="/img/Icons/Icone_GittHub.png" alt="Icone GitHUb" />
                                <IconsText>github.com/lazaroalvesr</IconsText>
                            </DivIcons>
                        </ContactLink>
                        <ContactLink href="/">
                            <DivIcons>
                                <ContactIcons src="/img/Icons/Icone_Email.png" alt="Icone Email"/>
                                <IconsText>lazaroalves12355@gmail.com</IconsText>
                            </DivIcons>
                        </ContactLink>
                        <ContactLink href="https://www.linkedin.com/in/l%C3%A1zaro-alves-r/" target="_blank">
                            <DivIcons>
                                <ContactIcons src="/img/Icons/Icone_Linkedin.png"  alt="Icone Linkedin"/>
                                <IconsText>Lázaro Alves R</IconsText>
                            </DivIcons>
                        </ContactLink>
                    </ContactItens>
                </ContactContainer>
            </Container>
        </BgGlobal>
    )
}