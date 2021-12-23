import Head from "next/head";
import Header from "../components/Index/Header";
import Body from "../components/Index/Body";
import Footer from "../components/Index/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="https://blog.hubspot.com/hubfs/image8-2.jpg" />
      </Head>
      {/* Header */}
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
      <Footer />
    </div>
  );
}
