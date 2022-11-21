import { Feature } from "../../../shared/types/feature.type";
import { Dots } from "../../dots/dots.components";
import { GradientTitle } from "../../gradiant-title/gradiant-title.component";

type FeatureCardProps = {
  feature: Feature;
};

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  // transition-all duration-300 hover:shadow-2xl rounded
  return (
    <div className="relative group">
      <article className="pt-8 px-4 rounded-lg h-[300px] bg-white relative z-10 transition-transform ease duration-300 group-hover:-translate-y-2">
        <GradientTitle className="text-xl mb-4 text-left font-bold">
          {feature.title}
        </GradientTitle>
        <p className="text-md text-left">{feature.description}</p>
      </article>
      <Dots className="absolute -left-1 -bottom-6 z-0 w-1/2 h-1/2 transition-transform ease duration-300 group-hover:-translate-x-2" />
    </div>
  );
};
