import Layout from "@/components/Layout";
import MentorProfile from "@/components/MentorProfile";
import axios from "axios";
import { API_URL } from "@/config";
const https = require("https");

export default function index({ mentor }) {
  console.log(mentor);

  return (
    <Layout>
      <MentorProfile mentor={mentor} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const options = {
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  };

  const { data: mentor } = await axios.get(
    `${API_URL}/api/mentor/${params.mentorId}`,
    options
  );

  return {
    props: { mentor },
  };
}
