import { Button } from "../button/button.component";
import { Dots } from "../dots/dots.components";
import { GradientTitle } from "../gradiant-title/gradiant-title.component";
import { Icon } from "@iconify/react";

export const Jumbotron = () => {
  return (
    <section className="pt-[200px] md:pt-0 min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-4 gap-16 max-w-6xl m-auto">
      <div className="w-full md:w-7/12">
        <div className="text-center md:text-left">
          <GradientTitle as="h1" className="text-5xl font-black">
            Study with simplicity.
          </GradientTitle>
          <h1 className="text-xl mt-4 font-light">
            Upload your video courses, create quizzes and courses all in the
            same app.
          </h1>
        </div>
        <div className="flex justify-center item-center md:justify-start gap-4">
          <Button
            as="a"
            href="https://polyflix.dopolytech.fr/"
            rel="noopener"
            target="_blank"
            className="mt-4 md:mt-6"
          >
            See webapp 🚀
          </Button>
          <Button
            as="a"
            type="icon"
            className="mt-4 md:mt-6"
            href="https://github.com/polyflix"
            rel="noopener"
            target="_blank"
          >
            <Icon
              icon="ant-design:github-outlined"
              style={{ fontSize: "24px" }}
            />
          </Button>
        </div>
      </div>
      <div className="w-full md:w-5/12 aspect-video rounded-md relative">
        <video
          src="#"
          className="bg-black w-full h-full rounded-md relative z-20"
        ></video>
        <Dots className="absolute -left-5 -bottom-5 z-10 w-1/2 h-1/2" />
      </div>
    </section>
  );
};
