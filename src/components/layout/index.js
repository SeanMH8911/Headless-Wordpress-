import Footer from "./footer";
import Header from "./header";
import Head from "next/head";
import Seo from "../seo";
import { isEmpty } from "lodash";
import { sanitize } from "dompurify";

const Layout = ({ data, children }) => {
  const { page, header, footer, headerMenus, footerMenus } = data || {};

  // Blank Screen on this function

  // if ( isEmpty(data?.page)) {
  //     return null;
  //   }

  return (
    <div>
      <Seo seo={page?.seo} uri={page?.uri} />
      <Head>
        <link rel="shortcut icon" href={header.favicon} />
        {Seo?.schemaDetails ? (
          <script
            type="application/ld+json"
            className="yoast-schema-graph"
            key="yoastSchema"
            dangerouslySetInnerHTML={{
              __html: sanitize(page?.seo?.schemaDetails),
            }}
          />
        ) : null}
      </Head>
      <Header header={header} headerMenus={headerMenus?.edges} />
      <div className="h-almost-screen">{children}</div>
      <Footer footer={footer} footerMenus={footerMenus?.edges} />
    </div>
  );
};

export default Layout;
