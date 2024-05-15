import { skillsData } from "@/lib/interface";
import SkillsCard from "./SkillsCard";
import { BgGlobal, Container } from "./_styles/Container.styles";
import { ContainerSkills, SkillSTitle, SkillsCardContainer } from "./_styles/Skills.styles";


export const Skills = () => {

    return (
        <BgGlobal>
            <Container id="Skills">
                <ContainerSkills>
                    <SkillSTitle>Skills</SkillSTitle>
                </ContainerSkills>
                <SkillsCardContainer>
                    {skillsData.map((skill, index) => (
                        <SkillsCard key={index} src={skill.src} alt={skill.alt} text={skill.text} />
                    ))}
                </SkillsCardContainer>
            </Container>
        </BgGlobal>
    );
};

