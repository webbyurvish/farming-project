import Layout from "@/components/Layout";
import React from "react";
import MentorProfile from "@/components/MentorProfile";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const Id = router.query;

  console.log(Id.mentorId);

  return (
    <Layout>
      <MentorProfile mentorId={Id.mentorId} />
    </Layout>
  );
}
