import Document, { Html, Head, Main, NextScript } from 'next/document'

class EvDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name='application-name' content='Evalest PWA template' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Evalest PWA template' />
          <meta name='description' content='An evalest template built on NextJS' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#000000' />

          <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='shortcut icon' href='/icons/favicon.ico' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://evalest.com' />
          <meta name='twitter:title' content='Evalest PWA template' />
          <meta name='twitter:description' content='An evalest template built on NextJS' />
          <meta name='twitter:image' content='https://evalest.com/icons/android-chrome-192x192.png' />
          <meta name='twitter:creator' content='@Evalest' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Evalest PWA template' />
          <meta property='og:description' content='An evalest template built on NextJS' />
          <meta property='og:site_name' content='Evalest PWA template' />
          <meta property='og:url' content='https://evalest.com' />
          <meta property='og:image' content='https://evalest.com/icons/apple-touch-icon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default EvDocument