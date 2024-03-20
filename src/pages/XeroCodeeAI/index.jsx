import React from "react";
import { Helmet } from "react-helmet";
import { Text, Input, Heading, Img, Button } from "../../components";

export default function XeroCodeeAIPage() {
  return (
    <>
      <Helmet>
        <title>xerocodepage</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center w-full gap-[66px] p-[25px] sm:gap-[33px] sm:p-5 bg-black-900">
        <header className="w-[98%] mt-[18px] border-gray-300 border-b-[0.5px] border-solid">
          <div className="flex justify-between items-center gap-5">
            <Img src="images/img_logo_1.png" alt="logoone_one" className="w-[100px] object-cover" />
            <Button
              color="black_900"
              size="md"
              className="sm:px-5 font-spacegrotesk border-white-A700 border-2 border-solid min-w-[176px] rounded-[35px]"
            >
              XEROCODEE
            </Button>
          </div>
        </header>
        <div className="w-full mx-auto max-w-[1605px]">
          <div className="flex flex-col items-center">
            <Heading size="lg" as="h1" className="tracking-[1.20px] !font-opensans bg-gradient bg-clip-text">
              Integrate AI Throughout Your Workflow
            </Heading>
            <Text size="3xl" as="p" className="mt-6 tracking-[1.40px] !font-abeezee">
              Code Doctor
            </Text>
            <Text
              size="lg"
              as="p"
              className="w-[45%] md:w-full mt-11 tracking-[0.72px] !font-opensans text-center !leading-[33px]"
            >
              Make processes where AI collaborates with your team throughout the whole development process.
            </Text>
            <div className="flex justify-center w-[29%] md:w-full mt-[75px]">
              <div className="flex justify-between items-center w-full gap-5 p-2 border-2 border-solid purple_A200_01_purple_A200_border bg-black-900 rounded-[35px]">
                <Text size="xs" as="p" className="ml-6 md:ml-0 !text-white-A700_7f !font-spacegrotesk">
                  Your Email
                </Text>
                <Button
                  color="black_900"
                  size="xs"
                  shape="round"
                  className="font-spacegrotesk font-light border-white-A700 border-2 border-solid min-w-[109px]"
                >
                  JOIN WAITLIST
                </Button>
              </div>
            </div>
            <div className="flex flex-col self-stretch items-center mt-4">
              <div className="self-stretch">
                <div className="flex flex-col items-center">
                  <div className="flex flex-col self-stretch items-center">
                    <Img
                      src="images/img_123z_2101_w020_n001_946b_p15.png"
                      alt="123z2101w020"
                      className="self-stretch h-[619px] w-full md:h-auto z-[1] object-cover"
                    />
                    <Img src="images/img_group_4.svg" alt="image" className="h-[577px] mt-[-268px]" />
                  </div>
                  <div className="flex justify-center w-[80%] md:w-full mt-[-62px]">
                    <Heading as="h2" className="text-center bg-gradient1 bg-clip-text">
                      Boost the speed of your development and test cycles.
                    </Heading>
                  </div>
                </div>
              </div>
              <Text size="xl" as="p" className="w-[80%] md:w-full text-center">
                With AI-driven test case generation and code analysis, problems may be found and fixed more quickly.
              </Text>
            </div>
            <div className="flex flex-col w-[34%] md:w-full mt-[157px] gap-[31px] p-8 sm:p-5 bg-gray-900 rounded-[16px]">
              <div className="flex flex-col gap-8">
                <div className="flex justify-center items-start gap-5">
                  <Img src="images/img_duotone_stack.svg" alt="duotonestack" className="h-[52px] w-[52px]" />
                  <div className="flex">
                    <Text as="p" className="self-end">
                      CI/CD Pipeline Generate
                    </Text>
                  </div>
                </div>
                <div className="h-px opacity-0.12 bg-white-A700_65" />
              </div>
              <div className="flex justify-center items-start gap-5">
                <Img
                  src="images/img_duotone_stack_deep_purple_a400_01.svg"
                  alt="duotonestack"
                  className="h-[52px] w-[52px]"
                />
                <div className="flex">
                  <Text as="p" className="self-end">
                    Build / Deploymnent
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[34%] md:w-full mt-[305px] gap-8 p-[31px] sm:p-5 bg-gray-900 rounded-[16px]">
              <div className="flex justify-center items-start gap-5 flex-1">
                <Img src="images/img_duotone_stack.svg" alt="generate_test" className="h-[52px] w-[52px]" />
                <div className="flex pr-[189px] md:pr-5">
                  <Text as="p">Generate Test Cases</Text>
                </div>
              </div>
              <div className="w-[472px] h-px bg-white-A700_65" />
              <div className="flex justify-center items-start gap-5 flex-1">
                <Img
                  src="images/img_duotone_stack_deep_purple_a400_01.svg"
                  alt="duotonestack"
                  className="h-[52px] w-[52px]"
                />
                <div className="flex">
                  <Text as="p" className="self-end">
                    Code Analysis
                  </Text>
                </div>
              </div>
            </div>
            <Heading
              size="s"
              as="h3"
              className="w-[82%] md:w-full mt-[1479px] tracking-[1.04px] !font-opensans text-center bg-gradient bg-clip-text"
            >
              <>
                Automate all aspects of your delivery process with
                <br />
                AI support.
              </>
            </Heading>
            <Text size="lg" as="p" className="mt-[43px] tracking-[0.72px] !font-opensans text-center">
              Get Early Access
            </Text>
            <Input
              shape="round"
              type="email"
              name="email"
              placeholder={`Your Email`}
              className="w-[29%] mt-[25px] sm:px-5"
            />
            <Text size="lg" as="p" className="mt-[109px] tracking-[0.72px] !font-opensans text-center">
              <span className="text-white-A700">Copyright © 2023 </span>
              <span className="text-white-A700 font-bold">EXOCODE TECHNOLOGIES | All rights reserved</span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
