import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css"
        />
        <link rel="shortcut icon" href="../public/favicon.ico" />
        
      </Head>
      <body>
        <div
          hidden
          id="snipcart"
          data-api-key="Y2IyNTk1MmEtYTBjMy00YTgxLThmZWMtOTJmNzk4NjI5ZTk5NjM4MDMwNzY4MTg5NzIxNDYx"
          data-config-modal-style="side"
          data-currency="NGN"
          
        ></div>
        <script
          async
          src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js"
          
        ></script>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
