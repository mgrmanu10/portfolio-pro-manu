import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Bienvenida from '../components/Bienvenida/Bienvenida';
import Proyectos from '../components/Proyectos/Proyectos';
import Skills from '../components/Skills/Skills';
import SobreMi from '../components/SobreMi/SobreMi';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Bienvenida />
        <BgAnimation />
      </Section>
      <br/>
      <Proyectos />
      <br/>
      <br/>
      <br/>
      <br/>
      <Skills />
      <br/>
      <br/>
      <br/>
      <SobreMi />
    </Layout>
  );
};

export default Home;
