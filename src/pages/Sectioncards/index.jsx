import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading } from "../../components";

export default function SectioncardsPage() {
  return (
    <>
      <Helmet>
        <title>xerocodepage</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="h-[1300px] w-full relative">
        <div className="flex flex-col w-[94%] h-full gap-[87px] left-0 bottom-0 top-0 my-auto md:gap-[65px] sm:gap-[43px] absolute">
          <Heading as="h1" className="self-end text-center !font-bold bg-gradient1 bg-clip-text">
            Use AI to handle workflows in your chat platforms.
          </Heading>
          <div className="flex flex-col w-full gap-16 md:p-5 sm:gap-8 max-w-[1207px]">
            <div className="flex w-[56%] md:w-full">
              <div className="flex flex-col items-start justify-center h-[427px] w-full md:h-auto gap-[111px] p-8 md:gap-[83px] sm:gap-[55px] sm:p-5 bg-[url(/public/images/img_frame_1951.png)] bg-cover bg-no-repeat rounded-[40px]">
                <div className="flex flex-col self-stretch mt-7 gap-3">
                  <Text size="2xl" as="p" className="!text-transparent bg-gradient1 bg-clip-text">
                    ask questions
                  </Text>
                  <Text size="s" as="p">
                    <span className="text-white-A700">
                      <>
                        To assist with managing the development, testing, and <br />
                        deployment process, ask it questions or issue instructions
                      </>
                    </span>
                    <span className="text-white-A700 tracking-[3.00px] text-3xl font-medium">.</span>
                  </Text>
                </div>
                <Button shape="round" className="mb-7 sm:px-5 uppercase font-bold min-w-[189px] !rounded-[27px]">
                  Comming soon
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-start h-[371px] md:h-auto ml-[228px] gap-5 p-8 md:ml-0 sm:p-5 bg-[url(/public/images/img_frame_1951.png)] bg-cover bg-no-repeat rounded-[40px]">
              <Heading size="xs" as="h2" className="w-[76%] md:w-full mt-7 bg-gradient2 bg-clip-text">
                Fix security concerns more quickly using generated code recommendations
              </Heading>
              <Text size="s" as="p" className="w-[92%] md:w-full mb-[79px]">
                <>
                  With the aid of AI, recognise any security risk and swiftly and effectively fix it.
                  <br />
                  granting developers the freedom they require to protect their work frequently and early.
                </>
              </Text>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-[47%] right-0 top-[23%] m-auto absolute">
          <div className="flex flex-col items-start justify-center h-[427px] w-full md:h-auto gap-[54px] p-8 sm:gap-[27px] sm:p-5 bg-[url(/public/images/img_frame_1951.png)] bg-cover bg-no-repeat rounded-[40px]">
            <div className="flex flex-col self-stretch w-full mt-[26px] gap-[15px] mx-auto max-w-[616px]">
              <Text size="2xl" as="p" className="!text-transparent bg-gradient1 bg-clip-text">
                execute
              </Text>
              <Text size="s" as="p">
                <>
                  With a single command, you may run a series of tests or install a <br />
                  new version of a programme in a particular setting.
                </>
              </Text>
            </div>
            <Button shape="round" className="mb-7 sm:px-5 uppercase font-bold min-w-[189px] !rounded-[27px]">
              comming soon
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
