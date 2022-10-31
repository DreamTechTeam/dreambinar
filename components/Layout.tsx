import Head from "next/head";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./ui/footer";
import Navbar from "./ui/navbar";

export const siteTitle = "Dreambinar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen font-content antialiased">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Dreambinar is a platform that can be used by everyone with the main features being able to search for many events and being able to create a webinar event and then share it with everyone with guaranteed security and interesting events."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar />
      <main>
        {children}
        <ScrollToTop smooth={true} color="white" width="20" height="20" />
      </main>
      <Footer />
    </div>
  );
}
