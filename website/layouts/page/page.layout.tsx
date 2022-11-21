import Head from "next/head";
import { PropsWithChildren } from "react";
import { Footer } from "../../components/footer/footer.component";
import { Seo } from "../../shared/types/seo.type";

type PageLayoutProps = {
  seo: Seo;
};

export const PageLayout = ({
  seo,
  children,
}: PropsWithChildren<PageLayoutProps>) => {
  return (
    <>
      <Head>
        <title>{seo.name}</title>
        {seo.title && (
          <>
            <meta name="title" content={seo.title}></meta>
            <meta name="og:title" content={seo.title}></meta>
            <meta name="twitter:title" content={seo.title}></meta>
          </>
        )}
        {seo.description && (
          <>
            <meta name="description" content={seo.description}></meta>
            <meta property="og:description" content={seo.description}></meta>
            <meta
              property="twitter:description"
              content={seo.description}
            ></meta>
          </>
        )}
        {seo.image && (
          <>
            <meta name="og:image" content={seo.image}></meta>
            <meta property="og:image" content={seo.image}></meta>
            <meta property="twitter:image" content={seo.image}></meta>
          </>
        )}

        <meta property="og:type" content="website"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
      </Head>
      <section>{children}</section>
    </>
  );
};
