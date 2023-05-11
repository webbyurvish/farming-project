import React from "react";
import MentorLayout from "@/components/MentorLayout";
import MentorDashBoard from "@/components/MentorDashBoard";
import axios from "axios";
const https = require("https");
import { API_URL } from "@/config";

export default function mentor({ likes }) {
  return (
    <MentorLayout>
      <MentorDashBoard likes={likes} />
    </MentorLayout>
  );
}

export async function getServerSideProps() {
  const options = {
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  };

  const { data: likes } = await axios.get(
    `${API_URL}/api/like/all/122eb7b2-c3e3-4344-aa58-0f0e35d71dd3`,
    options
  );

  return {
    props: { likes },
  };
}
