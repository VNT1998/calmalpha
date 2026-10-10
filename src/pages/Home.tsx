import { Seo } from '../components/Seo';
import { Hero } from '../components/Hero';
import { Flagship } from '../components/Flagship';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { Technology } from '../components/Technology';
import { Principles } from '../components/Principles';
import { Lab } from '../components/Lab';
import { Team } from '../components/Team';
import { CompanyFacts } from '../components/CompanyFacts';
import { Contact } from '../components/Contact';
import { content } from '../content';

export function Home() {
  const { meta } = content.home;

  return (
    <>
      <Seo title={meta.title} description={meta.description} />
      <Hero />
      <Flagship />
      <Services />
      <Process />
      <Technology />
      <Principles />
      <Lab />
      <Team />
      <CompanyFacts />
      <Contact />
    </>
  );
}
