import Layout, {siteTitle} from "../components/Layout";
import Head from "next/head";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1>Hello World</h1>
        </Layout>
    );
}
