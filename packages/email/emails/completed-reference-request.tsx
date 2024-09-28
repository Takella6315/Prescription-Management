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

import { Footer } from './_components/footer';
import { CenteredLogo } from './_components/logo';
import { Title } from './_components/title';

export function CompletedReferenceRequestEmail(
  writerName: string,
  submissionMethod: string,
) {
  return render(
    <RenderCompletedReferenceRequestEmail
      writerName={writerName}
      submissionMethod={submissionMethod}
    />,
  );
}

export default function RenderCompletedReferenceRequestEmail({
  writerName = 'Writer Name',
  submissionMethod = 'Submission Method',
}: {
  writerName: string;
  submissionMethod: string;
}) {
  return (
    <Html>
      <Tailwind>
        <Head>
          <Title title="Completed Reference Request!" />
        </Head>

        <Body className="w-full bg-[#F6F6F6]">
          <Row align="center">
            <Column align="center">
              <Container className="mt-8 bg-white p-8">
                <Section>
                  <CenteredLogo />
                  <Text className="text-left text-xl font-bold md:text-2xl">
                    You have a completed reference letter request!
                  </Text>
                  <Text className="text-left text-xs md:text-base">
                    Good news, {writerName} has completed your reference
                    request!
                  </Text>
                  <Text className="text-left text-xs md:text-base">
                    {writerName} has completed your reference request and will
                    submit it through the method you requested (
                    {submissionMethod})!
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
