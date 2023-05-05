import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Categories from "@/components/Categories";
import axios from "axios";
const https = require("https");

import { API_URL } from "@/config";

export default function MentorsCategory({ categories }) {
  return (
    <>
      <Layout>
        <Categories categories={categories} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const options = {
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  };

  const { data: categories } = await axios.get(
    `${API_URL}/api/category/all`,
    options
  );

  return {
    props: { categories },
  };
}
