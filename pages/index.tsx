import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";

const homeTitle: String = `Home | ${siteTitle}`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{homeTitle}</title>
      </Head>
    </Layout>
  );
}
