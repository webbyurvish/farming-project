import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Main from "@/components/Main";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Main />
    </Layout>
  );
}
