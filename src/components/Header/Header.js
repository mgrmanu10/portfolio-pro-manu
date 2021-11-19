import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail} from 'react-icons/ai';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      
        <a style={{display: "flex", alignItems:"center", color: "white", marginBottom: "20px"}}>
          <AiOutlineMail size="2rem"/> <Span> mgrmanu10@gmail.com</Span>
        </a>
      
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>
            Proyectos
          </NavLink>      
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>
          Skills
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>
            Sobre Mí
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contacto">
          <NavLink>
          Contacto
          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/mgrmanu10">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/manuel-garc%C3%ADa-romero-2416951a3/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
