import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => (
  <div className={`${inter.className}`}>
    <Head>
      <title>Okendo Intergration in Next js</title>
      <meta
        name="description"
        content="Okendo is app for customer reviews and ratings for your products and brand. Okendo is a Shopify app that integrates with your Shopify store to automatically collect reviews and ratings from your customers."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <nav>Okendo Customer Reviews</nav>
    <main>{children}</main>
  </div>
);

export default Layout;
