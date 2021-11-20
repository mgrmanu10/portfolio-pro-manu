import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProyectosStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Proyectos = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Proyectos Realizados</SectionTitle>
    <GridContainer>
      {projects.map(({id,image,title,description,tags,source,visit})=>(
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <br/>
          <div>
            <TitleContent>Etiquetas</TitleContent>
            <TagList>
              {tags.map((tag,id)=>(
                <Tag key={id}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
          <ExternalLinks  href={visit}>Saber más</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>);

export default Proyectos;