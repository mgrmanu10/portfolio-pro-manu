import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { DiWindows } from 'react-icons/di';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Bienvenido a<br/>
        mi Portfolio Profesional
      </SectionTitle>
      <SectionText>
       Mi nombre es Manuel García Romero, soy Ingeniero Biomédico y actualmente curso el máster en Ingeniería del Software: Cloud, Datos y Gestión TI de la Universidad de Sevilla.
      </SectionText>
      <Button onClick={() => window.location="https://www.mediafire.com/file/tk04rfsetxr857i/ManuelGarc%25C3%25ADaRomero_CV_Nov2021.pdf/file"}> Descargar CV (PDF)</Button>
    </LeftSection>
  </Section>
);
 
export default Hero;