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
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div
        className="bg-fixed py-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1615716175455-9a098e2388be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80')",
        }}
      >
        <div>{children}</div>
        {router.pathname === "/" && <Buttons />}
        {router.pathname === "/" && <Testimonial />}
      </div>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "Grow With Farmers | Find the relevant mentor",
  description: "Find the relevant mentor",
  keywords: "Farmer, Farming, Farm, mentor",
};
