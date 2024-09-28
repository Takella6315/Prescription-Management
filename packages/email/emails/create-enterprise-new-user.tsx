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

export function CreateNewEnterpriseUserEmail(
  enterpriseName: string,
  userEmail: string,
  userPassword: string,
) {
  return render(
    <RenderCreateNewEnterpriseUserEmail
      enterpriseName={enterpriseName}
      userEmail={userEmail}
      userPassword={userPassword}
    />,
  );
}

export default function RenderCreateNewEnterpriseUserEmail({
  enterpriseName,
  userEmail,
  userPassword,
}: {
  enterpriseName: string;
  userEmail: string;
  userPassword: string;
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
                    Welcome to Reffy!
                  </Text>
                  <Text className="text-center text-xs md:text-base">
                    {enterpriseName} is partnering with Reffy to simplify
                    references and letters of recommendation.
                  </Text>

                  <Img
                    className="mx-auto w-full"
                    src="https://storage.googleapis.com/prod-emails/3.png"
                    alt="Reffy on phone"
                  />

                  <Text className="text-center text-xs md:text-base">
                    Someone on the {enterpriseName} team has added you to their
                    enterprise Reffy Pro subscription.
                  </Text>
                </Section>

                <Section>
                  <Text className="text-xl font-bold md:text-2xl">
                    Getting started is easy
                  </Text>

                  <Text className="text-xs md:text-base">
                    <ol>
                      <li className="text-xs md:text-base">
                        Log in to Reffy using your email address{' '}
                        <span style={{ fontWeight: 'bold' }}>{userEmail}</span>{' '}
                        and temporary password:{' '}
                        <span style={{ fontWeight: 'bold' }}>
                          {userPassword}
                        </span>
                      </li>
                      <li className="text-xs md:text-base">
                        Customize your profile
                      </li>
                      <li className="text-xs md:text-base">
                        Start using Reffy to write and manage requests for
                        reference letters!
                      </li>
                    </ol>
                  </Text>

                  <LoginButton text="See how it works" />
                </Section>

                <Section>
                  <Text className="text-xl font-bold md:text-2xl">
                    What is Reffy anyway?
                  </Text>

                  <Text className="text-xs md:text-base">
                    Think of it as your personal reference letter assistant.
                    Reffy is an online tool that makes it easy to write
                    authentic, detailed reference letters.
                  </Text>

                  <Text className="text-xs md:text-base">
                    It’s a quick and easy way to manage student requests,
                    collect and organize students’ application information, and
                    instantly create first drafts of your letters.
                  </Text>

                  <Hr />

                  <Text className="text-center text-xs md:text-base">
                    <b>
                      <i>
                        “I just tried my first letter and it was incredible.”
                      </i>
                    </b>
                    <br />– Assistant Professor at College of the Holy Cross
                    (Worcester, MA)
                  </Text>

                  <Text className="text-center text-xs md:text-base">
                    <b>
                      <i>
                        “I have used your app with great success in crafting
                        seventeen letters of recommendation already!”
                      </i>
                    </b>
                    <br />– Senior law professor at Emory University
                  </Text>

                  <Hr />
                </Section>

                <Section>
                  <Text className="text-xl font-bold md:text-2xl">
                    Does it really help? Yep.
                  </Text>
                  <Text className="text-xs md:text-base">
                    <ul>
                      <li className="text-xs md:text-base">
                        {' '}
                        Save time – up to two hours per letter
                      </li>
                      <li className="text-xs md:text-base">
                        Unique & Personalized letters — no more guesswork or
                        generic templates
                      </li>
                      <li className="text-xs md:text-base">
                        Effortless organization – all requests and info in one
                        place
                      </li>
                      <li className="text-xs md:text-base">
                        Advance DEI goals – minimize bias and biased language in
                        reference letters
                      </li>
                      <li className="text-xs md:text-base">
                        Improve success rates – better references get better
                        results
                      </li>
                      <li className="text-xs md:text-base">
                        Foster collaboration – between faculty, students, and
                        career centers
                      </li>
                      <li className="text-xs md:text-base">
                        {' '}
                        Protect student privacy – we never sell user data
                      </li>
                    </ul>
                  </Text>

                  <LoginButton text="Login" />

                  <Img
                    className="w-full py-8"
                    src="https://storage.googleapis.com/prod-emails/4.png"
                    alt=""
                  />
                  <Hr />
                </Section>

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
                  <LoginButton text="Login into your account" />
                </Section>

                <Section className="pt-8">
                  <Text className="text-xs md:text-base">
                    If you have questions about {enterpriseName}’s Reffy
                    subscription, please contact your local administrator.
                  </Text>
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
