import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
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

export function CreateExistingEnterpriseUserEmail(
  enterpriseName: string,
  userEmail: string,
) {
  return render(
    <RenderCreateExistingEnterpriseUserEmail
      enterpriseName={enterpriseName}
      userEmail={userEmail}
    />,
  );
}

export default function RenderCreateExistingEnterpriseUserEmail({
  enterpriseName,
  userEmail,
}: {
  enterpriseName: string;
  userEmail: string;
}) {
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
                <Section>
                  <CenteredLogo />
                  <Text className="text-center text-xl font-bold md:text-2xl">
                    Welcome to Reffy Pro!
                  </Text>
                  <Img
                    className="mx-auto w-full"
                    src="https://storage.googleapis.com/prod-emails/3.png"
                    alt="Reffy on phone"
                  />

                  <Text className="text-left text-xs md:text-base">
                    We know how much time and stress it can take to write
                    recommendation letters, which is why we created Reference
                    Builder. Our app is designed to streamline the process and
                    make it easier for you to write and manage recommendations.
                  </Text>
                </Section>

                <Section>
                  <Text className="text-xl font-bold md:text-2xl">
                    Luckily for you, {enterpriseName} has purchased an
                    enterprise subscription for Refbuilder Pro!
                  </Text>

                  <Text className="text-xs md:text-base">
                    <ol>
                      <li className="text-xs md:text-base">
                        Go ahead and login to start using your Pro features
                        provided by your organization using your email:{' '}
                        <b>{userEmail}</b>.
                      </li>
                      <li className="text-xs md:text-base">
                        You’re ready to start helping applicants achieve their
                        goals with Reference Builder!
                      </li>
                    </ol>
                  </Text>

                  <LoginButton text="Login" />
                </Section>
                <Img
                  className="w-full py-8"
                  src="https://storage.googleapis.com/prod-emails/4.png"
                  alt=""
                />
                <Hr />

                <Section>
                  <Text className="md:text-xl2 text-xl font-bold">
                    It’s a new way to help students succeed…
                  </Text>
                  <Text className="text-xs md:text-base">
                    Students need people to vouch for them.
                  </Text>

                  <Text className="text-xs md:text-base">
                    Whether they are applying to jobs, grad school, clerkships,
                    scholarships, or other opportunities, references and
                    recommendation letters can impact someone’s career — for
                    better or worse.
                  </Text>

                  <Text className="text-xs md:text-base">
                    But writing impactful letters takes a lot of time and
                    effort.
                  </Text>

                  <Text className="text-xs md:text-base">
                    That’s why we built Reffy— so you can help students without
                    resorting to recycled letters, generic templates, or even
                    asking students to write their own letters.
                  </Text>

                  <Text className="text-xs md:text-base">
                    Whether you prefer to write letters from scratch, or are
                    curious about using AI, Reffy will make your life easier,
                    and your letters better.
                  </Text>

                  <Text className="text-xs md:text-base">
                    Your students will thank you… and once you try it you’ll
                    never go back.
                  </Text>

                  <Text className="text-left text-xs md:text-base">
                    <b>— Justin Latterell, PhD</b>
                    <br />
                    <b>Founder</b>
                  </Text>
                  <LoginButton text="Get Started" />
                </Section>
              </Container>

              <Footer showLogo={true} />
            </Column>
          </Row>
        </Body>
      </Tailwind>
    </Html>
  );
}
