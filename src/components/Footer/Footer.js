import React from 'react';
import { AiFillGithub,AiFillLinkedin } from 'react-icons/ai';
import { Section} from '../../styles/GlobalComponents';


import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <Section id="contacto">
    <FooterWrapper>
      <LinkList>
      <LinkColumn>

      <LinkTitle> Número de Teléfono </LinkTitle>
      <LinkItem>+34-603 532 443</LinkItem>
      </LinkColumn>
      <LinkColumn>
     
      <LinkTitle> EMAIL </LinkTitle>
      <LinkItem >mgrmanu10@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"El mejor experto también fue un dia aprendiz."</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/mgrmanu10">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/manuel-garc%C3%ADa-romero-2416951a3/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
    </Section>
  );
};

export default Footer;
