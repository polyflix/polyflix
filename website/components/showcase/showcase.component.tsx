/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { Section } from "../section/section";
import { UnderlineTitle } from "../underline-title/underline-title";

export const Showcase = () => {
  const elements = [
    {
      src: "./images/polyflix-home.png",
      title: "Polyflix home page",
    },
    {
      src: "./images/polyflix-home.png",
      title: "Polyflix home page",
    },
    {
      src: "./images/polyflix-home.png",
      title: "Polyflix home page",
    },
    {
      src: "./images/polyflix-home.png",
      title: "Polyflix home page",
    },
    {
      src: "./images/polyflix-home.png",
      title: "Polyflix home page",
    },
    {
      src: "./images/polyflix-home.png",
      title: "Polyflix home page",
    },
  ];

  return (
    <Section>
      <UnderlineTitle>Examples</UnderlineTitle>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="grid grid-cols-auto-fit gap-x-10 gap-y-20 ">
            {elements.map((item, i: number) => (
              <article
                key={i}
                className="flex flex-col drop-shadow-md overflow-hidden"
              >
                <div className="w-full aspect-[4/3] relative">
                  <img
                    className="h-full w-full object-cover rounded-md cursor-zoom-in"
                    src={item.src}
                    alt={item.title}
                  />
                </div>
                <h3 className="z-10 mt-2">{item.title}</h3>
              </article>
            ))}
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </Section>
  );
};
