import Head from "next/head";

import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <Nav />
      </Head>

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default DefaultLayout;
