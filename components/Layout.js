import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import { Header } from "./Header";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import Buttons from "./Buttons";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />

      <div className="mt-[5rem]">{children}</div>

      {router.pathname === "/" && <Buttons />}

      {router.pathname === "/" && <Testimonial />}

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the latest DJ and other musical events",
  keywords: "music, dj, edm, events",
};
