import { useRouter } from "next/router";
import Mentors from "@/components/Mentors";
import Layout from "@/components/Layout";

function MentorPage() {
  const router = useRouter();
  const categoryId = router.query;

  console.log(categoryId);

  return (
    <Layout>
      <Mentors categoryId={categoryId} />
    </Layout>
  );
}

export default MentorPage;
