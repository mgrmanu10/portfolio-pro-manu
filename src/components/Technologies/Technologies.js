import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {AiOutlineApi} from 'react-icons/ai'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  
  <Section id="skills">
    <SectionDivider/>
    <SectionTitle>Tecnologías y Conocimientos</SectionTitle>
    <SectionText>
      He trabajado en mis proyectos con algunas de las tecnologías para el desarrollo web más actuales tanto para el Backend como el Frontend, haciendo uso del lenguaje JavaScript.
      <br/>
      <br/>
      Por otro lado, en mi experiencia del grado y máster (cursando actualmente) he ido adquiriendo conocimientos sobre distintos lenguajes como  Java, Python, PHP, C# o R; distintas herramientas para la gestión microservicios como Kubernetes o Docker; y distintos sistemas de gestión para Bases de Datos como MySQL o MongoDB.
      <br/>
      <br/>
      De forma más autodidacta, he ido formándome de manera más enfocada a mis gustos personales a través de cursos online y navegación por la web sobre el lenguaje JavaScript y la biblioteca ReactJS.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
           
            ReactJS y NextJS.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            
            NodeJS y Bases de Datos <br/>
            SQL y NO-SQL.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <AiOutlineApi size="3rem"/>
        <ListContainer>
          <ListTitle>API</ListTitle>
          <ListParagraph>
  
            API RESTful y Graphql.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      

    </List>
  </Section>
);

export default Technologies;
