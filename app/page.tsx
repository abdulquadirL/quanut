import Image from "next/image";
import Layout from "./layout";
import { NextSeo } from 'next-seo';
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout >
      <NextSeo
        title="Quanut Nigeria | Home"
        description="Leading supplier of agricultural raw materials."
      />
      <Box textAlign="center" py={10}></Box>
    </Layout>
  );
}
