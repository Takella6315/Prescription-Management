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

import { LoginButton } from './_components/button';
import { Footer } from './_components/footer';
import { CenteredLogo } from './_components/logo';
import { Title } from './_components/title';

export function NewReferenceRequestEmail(applicantName: string) {
  return render(
    <RenderNewReferenceRequestEmail applicantName={applicantName} />,
  );
}

export default function RenderNewReferenceRequestEmail({
  applicantName = 'Applicant Name',
}: {
  applicantName: string;
}) {
  return (
    <Html>
      <Tailwind>
        <Head>
          <Title title="New Reference Request!" />
        </Head>

        <Body className="w-full bg-[#F6F6F6]">
          <Row align="center">
            <Column align="center">
              <Container className="mt-8 bg-white p-8">
                <Section>
                  <CenteredLogo />
                  <Text className="text-left text-xl font-bold md:text-2xl">
                    You have a new reference letter request!
                  </Text>
                  <Text className="text-left text-xs md:text-base">
                    Good news, you have a new reference request!
                  </Text>
                  <Text className="text-left text-xs md:text-base">
                    {applicantName} completed their applicant questionnaire.
                    We’ve organized everything you need to complete their
                    request on your Reffy dashboard. If you’re a Pro user, a
                    custom first draft of your letter is ready and waiting for
                    you.
                  </Text>
                </Section>

                <Section>
                  <LoginButton text="Go to my Dashboard" />
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
