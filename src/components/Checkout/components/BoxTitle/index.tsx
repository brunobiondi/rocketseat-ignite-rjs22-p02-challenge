import { ReactNode } from 'react';
import { Container, Content, Subtitle, Title } from './styled';

interface BoxTitleProps {
  title: string;
  subtitle: string;
  image: ReactNode;
}

export const BoxTitle = (props: BoxTitleProps) => {
  const { title, subtitle, image } = props;

  return (
    <Container>
      {image}
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Content>
    </Container>
  );
};
