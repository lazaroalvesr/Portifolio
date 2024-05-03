import { CardProjectsProps } from "@/lib/interface"
import { DivHoverDescription, DivHoverTitle, DivHoverSkills, DivProjectHover, DivProjectImg, DivProjectName, DivProjectSubName, DivProjects, DivProjectsContainer, DivHoverSkillsText, DivHoverViewProject, HoverContainer } from "./_styles/Projects.styles"

export const CardProjects = ({ src, alt, name, subName, hoverText, href, skillsText }: CardProjectsProps) => {
    return (
        <DivProjects>
            <DivProjectImg src={src} alt={alt} />
            <DivProjectsContainer>
                <DivProjectName>{name}</DivProjectName>
                <DivProjectSubName>{subName}</DivProjectSubName>
                <DivProjectHover>
                    <DivHoverTitle>{name}</DivHoverTitle>
                    <DivHoverDescription>{hoverText}</DivHoverDescription>
                    <HoverContainer>
                        <DivHoverSkills>
                            {skillsText.map((text, index) => (
                                <DivHoverSkillsText key={index}>{text}</DivHoverSkillsText>
                            ))}
                        </DivHoverSkills>
                    </HoverContainer>
                    <DivHoverViewProject href={href} target="_blank">Acessar</DivHoverViewProject>
                </DivProjectHover>
            </DivProjectsContainer>
        </DivProjects>
    )
}