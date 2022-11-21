import { NextPage } from "next";
import { Description } from "../components/description/description.component";
import { Features } from "../components/features/features.component";
import { Jumbotron } from "../components/jumbotron/jumbotron.component";
import { Showcase } from "../components/showcase/showcase.component";
import { PageLayout } from "../layouts/page/page.layout";

const Home: NextPage = () => {
  return (
    <>
      <PageLayout
        seo={{
          name: "Polyflix",
          title: "Study with simplicity.",
          description:
            "Upload your video courses, create quizzes and courses all in the same app.",
        }}
      >
        <Jumbotron />
        <Features />
        <Description />
        <Showcase />
      </PageLayout>
    </>
  );
};

export default Home;
