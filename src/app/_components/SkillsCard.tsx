import React from 'react'
import { SkillsCards, SkillsName, SkilsImg } from './_styles/Skills.styles'
import { SkillsProps } from '@/lib/interface'

const SkillsCard = ({ alt, src, text }: SkillsProps) => {
    return (
        <SkillsCards>
            <SkilsImg src={src} alt={alt} />
            <SkillsName>{text}</SkillsName>
        </SkillsCards>
    )
}

export default SkillsCard