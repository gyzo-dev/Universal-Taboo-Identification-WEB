import { StyledHero, Section } from './Hero.styled';

type Props = {
  page: string;
};

function Hero({ page }: Props) {
  return (
    <StyledHero>
      <Section>
        <h1>UNIVERSAL TABOO IDENTIFICATION</h1>
        <h3>Desensitizing the World</h3>
        <hr />
        <p>{page}</p>
      </Section>
    </StyledHero>
  );
}

export default Hero;
