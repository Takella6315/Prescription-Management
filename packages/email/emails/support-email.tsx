import {
  Body,
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
import { CenteredLogo } from './_components/logo';
import { Footer } from './_components/footer';
import { Title } from './_components/title';

export function SendSupportEmail(name: string, email: string, message: string) {
  return render(
    <RenderSupportEmail name={name} email={email} message={message} />,
  );
}

export default function RenderSupportEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return (
    <Html>
      <Tailwind>
        <Head>
          <Title title="Support Inquiry" />
        </Head>
        <Body className="w-full bg-[#F6F6F6]">
          <Row align="center">
            <Column align="center">
              <Container className="mt-8 bg-white p-8">
                <Section>
                  <CenteredLogo />
                  <Text className="text-left text-xl font-bold md:text-2xl">
                    Support Inquiry from {name}.
                  </Text>
                </Section>
                <Section>
                  <Text>
                    User Email: {email}. Feedback/Questions: {message}.
                  </Text>
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
