import {
  Body,
  Column,
  Container,
  Head,
  Html,
  render,
  Row,
  Tailwind,
  Text,
} from '@react-email/components';

import { CenteredLogo } from '../../../../packages/email/emails/_components/logo';
import { Title } from '../../../../packages/email/emails/_components/title';

export function SendReminderEmail(
  
) {
  return render(
    <RenderReminderEmail
    />,
  );
}

export default function RenderReminderEmail() {
  return (
    <Html>
      <Tailwind>
        <Head>
          <Title title="Welcome to Reffy!" />
        </Head>
        <Body className="w-full bg-[#F6F6F6]">
          <Row align="center">
            <Column align="center">
              <Container className="mt-8 bg-white p-8">
                  <CenteredLogo />
                  <Text className="text-center text-xl font-bold md:text-2xl">
                    Welcome bruh
                  </Text>
              </Container>
            </Column>
          </Row>
        </Body>
      </Tailwind>
    </Html>
  );
}
