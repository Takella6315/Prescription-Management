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

export function RejectedReferenceRequestEmail(
  writerName: string,
  applicationName: string,
  declineReason: string | undefined,
) {
  return render(
    <RenderRejectedReferenceRequestEmail
      writerName={writerName}
      applicationName={applicationName}
      declineReason={declineReason}
    />,
  );
}

export default function RenderRejectedReferenceRequestEmail({
  writerName = 'Writer Name',
  applicationName = 'Application Name',
  declineReason = undefined,
}: {
  writerName: string;
  applicationName: string;
  declineReason: string | undefined;
}) {
  return (
    <Html>
      <Tailwind>
        <Head>
          <Title title="Declined Reference Request" />
        </Head>

        <Body className="w-full bg-[#F6F6F6]">
          <Row align="center">
            <Column align="center">
              <Container className="mt-8 bg-white p-8">
                <Section>
                  <CenteredLogo />
                  <Text className="text-left text-xl font-bold md:text-2xl">
                    You have an update to your reference letter request:
                  </Text>
                  <Text className="text-left text-xs md:text-base">
                    This message is to inform you that {writerName} has declined
                    the following reference letter request: {applicationName}.
                  </Text>

                  {declineReason && (
                    <Text className="text-left text-xs md:text-base">
                      Here is their message regarding your request:
                    </Text>
                  )}
                  {declineReason && (
                    <Text className="text-left text-xs md:text-base">
                      {declineReason}
                    </Text>
                  )}

                  <Text className="text-left text-xs md:text-base">
                    You may contact {writerName} directly for more details.
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
