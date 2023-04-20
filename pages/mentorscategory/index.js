import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Categories from "@/components/Categories";
import { API_URL } from "@/config";

export default function MentorsCategory() {
  console.log(Categories);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://localhost:44348/api/Category");
      const Categories = await res.json();
      console.log(Categories);
    })();

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  return (
    <>
      <Layout>
        <Categories />
      </Layout>
    </>
  );
}
