import React, { useState } from "react";
import Layout from "@/components/Layout";
import FarmerRegister from "@/components/FarmerRegister";

export default function SignUp() {
  const [isFarmer, setIsFarmer] = useState(true);

  return (
    <Layout>
      <FarmerRegister />
    </Layout>
  );
}
