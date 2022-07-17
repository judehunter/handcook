import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';
import {extractCritical} from '@emotion/server';
import tw from 'twin.macro';
export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    const critical = extractCritical(initialProps.html);
    initialProps.html = critical.html;

    initialProps.styles = (
      <React.Fragment>
        {initialProps.styles}
        <style
          data-emotion-css={critical.ids.join(' ')}
          dangerouslySetInnerHTML={{__html: critical.css}}
        />
      </React.Fragment>
    );

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body tw="text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
