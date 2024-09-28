import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  render,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

import { Footer } from './_components/footer';
import { CenteredLogo } from './_components/logo';
import { Title } from './_components/title';

export function ShareQuestionnaireEmail(writerName: string, url: string) {
  return render(
    <RenderShareQuestionnaireEmail writerName={writerName} url={url} />,
  );
}

export default function RenderShareQuestionnaireEmail({
  writerName = 'Writer Name',
  url = 'https://reffy.ai/r/Username',
}: {
  writerName: string;
  url: string;
}) {
  return (
    <Html>
      <Tailwind>
        <Head>
          <Title title="Reference Letter Questionnaire" />
        </Head>

        <Body className="w-full bg-[#F6F6F6]">
          <Row align="center">
            <Column align="center">
              <Container className="mt-8 bg-white p-8">
                <Section>
                  <CenteredLogo />
                  <Text className="text-center text-xl font-bold md:text-2xl">
                    Reference Letter Questionnaire from {writerName}
                  </Text>
                </Section>
                <Section>
                  <Text>
                    Hello, Thanks for requesting a reference letter from me. In
                    order to help me provide a detailed and accurate letter,
                    please complete this questionnaire.
                  </Text>
                  <Text>Sincerely,</Text>
                  <Text>{writerName}</Text>
                  <Row align="center">
                    <Column align="center">
                      <Button
                        href={url}
                        style={{
                          backgroundColor: '#F9D27F',
                          padding: '1rem',
                          textDecoration: 'none',
                          color: 'black',
                          width: '250px',
                        }}
                      >
                        Go to Questionnaire
                      </Button>
                    </Column>
                  </Row>
                </Section>
              </Container>

              <Footer />
            </Column>
          </Row>
        </Body>
      </Tailwind>
    </Html>
  );
}
