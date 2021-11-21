
import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './BienvenidaStyles';



const Bienvenida = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Te doy la bienvenida a<br/>
        mi Portfolio Profesional
        <br/>
        
      </SectionTitle>
      <SectionText>
       Mi nombre es Manuel García Romero, soy Ingeniero Biomédico y actualmente curso el máster en Ingeniería del Software: Cloud, Datos y Gestión TI de la Universidad de Sevilla.
      </SectionText>
      <br/>
      <br/>
      <Button onClick={()=> window.location ="https://drive.google.com/uc?id=1_deOQW26xsnFtpx4hV2fX19orD1IS1iJ&export=download"}>Descargar CV (PDF)</Button>
    </LeftSection>
  </Section>
);
 
export default Bienvenida;