import { Fragment } from "react";
import Document, {
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
  Html,
} from "next/document";
import { GA_TRACKING_ID } from "../utils/gtag";
import { ConfigStoreType } from "../types";

interface DocumentProps extends DocumentInitialProps {
  isProduction: boolean;
  configs: ConfigStoreType[];
}

export default class CustomDocument extends Document<DocumentProps> {
  // static async getInitialProps(ctx: DocumentContext): Promise<DocumentProps> {
  //   const initialProps = await Document.getInitialProps(ctx);
  //
  //   // Check if in production
  //   const isProduction = process.env.NODE_ENV === "production";
  //   const response = await fetch(
  //     `http://localhost:9091/api/v1/web/config-theme`
  //   ).then((res) => res.json());
  //   return {
  //     ...initialProps,
  //     isProduction,
  //     configs: response.result,
  //   };
  // }

  render() {
    const { isProduction } = this.props;
    return (
      <Html lang="en">
        <Head>
          {isProduction && (
            <Fragment>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </Fragment>
          )}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
