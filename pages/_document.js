import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* TODO Optimize SEO */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gray-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
