import { Dots } from "../dots/dots.components";
import { GradientTitle } from "../gradiant-title/gradiant-title.component";
import { Section } from "../section/section";

export const Description = () => {
  return (
    <Section
      id="description"
      className="items-center min-h-[500px] mx-2 sm:mx-8"
      maxWidth={false}
    >
      <div className="relative w-full">
        <div className="py-16 px-8 max-w-5xl mx-auto relative z-10 bg-white rounded-md">
          <GradientTitle
            as="h2"
            className="text-2xl text-center mb-8 font-bold"
          >
            Polyflix
          </GradientTitle>
          <p className="text-lg text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolor minus pariatur aliquam quaerat quae vero reprehenderit sunt
            doloribus beatae optio tempore amet, suscipit voluptas velit ratione
            ab reiciendis quidem.
          </p>
        </div>
        <Dots className="absolute -left-0 -bottom-10 z-0 w-1/2 sm:w-3/12 min-h-[100px] h-1/2" />
        <Dots className="absolute -right-0 -top-10 z-0 w-1/2 sm:w-3/12 min-h-[100px] h-1/2" />
      </div>
    </Section>
  );
};
