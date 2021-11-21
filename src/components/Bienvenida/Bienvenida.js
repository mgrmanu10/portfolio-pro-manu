
import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './BienvenidaStyles';



const Bienvenida = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Manuel García Romero,<br/>
        Ingeniero Biomédico y <br/>
        Desarrollador Web
        <br/>
        
      </SectionTitle>
      <SectionText>
       Bienvenido/a a mi Porftolio Profesional
       <br/>Actualmente curso el máster en Ingeniería del Software: Cloud, Datos y Gestión TI de la Universidad de Sevilla.
       <br/>En este portfolio podrás saber más sobre los proyectos en los que he trabajado, las tecnologías que conozco y averiguar más sobre mí.

      </SectionText>
      <br/>
      <br/>
      <Button onClick={()=> window.location ="https://drive.google.com/uc?id=1_deOQW26xsnFtpx4hV2fX19orD1IS1iJ&export=download"}>Descargar CV (PDF)</Button>
    </LeftSection>
  </Section>
);
 
export default Bienvenida;