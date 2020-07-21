import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/professional-illustration.svg";
import Logo from "../components/headers/logo";
import VerifyButton from "@passbase/button/react";

const Container = tw(
  ContainerBase
)`min-h-screen bg-gray-100 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const DescriptionText = styled.p`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;

export default ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Verify Your Identity",
}) => (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
          <LogoLink href={logoLinkUrl}>
            <Logo />
          </LogoLink>
          <MainContent>
            <Heading>{headingText}</Heading>
            <DescriptionText>
              We need to verify the real identity of you. Please follow our
              identification process by clicking the button below.
            </DescriptionText>
            <VerifyButton
              apiKey={
                "2b4598cdbb809d8b7a34ba534d76447634ed9a8d58bb498421f72cd8187df048"
              }
              onFinished={(error, authKey, additionalAttributes) => {}}
              integrationType={"signup"}
              additionalAttributes={{
                customer_user_id: "",
              }}
              prefillAttributes={{
                email: "",
                country: "",
              }}
              theme={{
                accentColor: "",
                font: "Arial",
              }}
            />
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
);
