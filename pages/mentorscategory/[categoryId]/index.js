// import { useRouter } from "next/router";
import Mentors from "@/components/Mentors";
import Layout from "@/components/Layout";
import { API_URL } from "@/config";
import axios from "axios";
const https = require("https");

function MentorPage({ mentors, categoryId }) {
  // const router = useRouter();
  // const categoryId = router.query;

  console.log(mentors);

  return (
    <Layout>
      <Mentors mentors={mentors} />
    </Layout>
  );
}

export default MentorPage;

export async function getServerSideProps({ params }) {
  const options = {
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  };

  const { categoryId } = params;

  // Fetch mentors for the category
  const { data: mentors } = await axios.get(
    `${API_URL}/api/mentor/${categoryId}`,
    options
  );

  return {
    props: {
      mentors,
      categoryId,
    },
  };
}
