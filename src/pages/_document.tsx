import Document, { Html, Head, Main, NextScript } from "next/document";
import { getInitColorSchemeScript } from "@mui/material/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Ursa Minor</title>
          <meta name="description" content="Hackaday 2023" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>

        <body>
          {getInitColorSchemeScript()}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
