import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Link,
  render,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

import { Footer } from './_components/footer';
import { CenteredLogo } from './_components/logo';
import { Title } from './_components/title';

export function ResetPasswordEmail(url: string) {
  return render(<RenderResetPasswordEmail url={url} />);
}

export default function RenderResetPasswordEmail({
  url = 'https://reffy.ai/reset-password',
}: {
  url: string;
}) {
  return (
    <Html>
      <Tailwind>
        <Head>
          <Title title="Reset Your Reffy Password" />
        </Head>

        <Body className="w-full bg-[#F6F6F6]">
          <Row align="center">
            <Column align="center">
              <Container className="mt-8 bg-white p-8">
                <Section>
                  <CenteredLogo />
                  <Text className="text-left text-xl font-bold md:text-2xl">
                    Reset Your Reffy Password
                  </Text>
                </Section>
                <Section>
                  <Text>
                    Change your Reffy password by clicking the button below. If
                    this wasn't you, consider updating your password.
                  </Text>
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
                        Reset Your Password
                      </Button>
                    </Column>
                  </Row>
                </Section>

                <Section className="pt-4">
                  If the above button isn't working for you, try clicking on
                  this{' '}
                  <Link className="text-[#F9D27F]" href={url}>
                    link
                  </Link>
                  .
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
