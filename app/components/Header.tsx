//import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import NextLink from "next/link";

export default function Header() {
  return (
    <div className="green.500 p-{4} color-white">
      <div className="w-1200px flex mx-auto align-center">
        <NextLink href="/" passHref>
          <Link href='' className="xl font-bold">Quanut Nigeria Limited</Link>
        </NextLink>
        <NextLink href="/products" passHref>
          <h1 className="mx-{3}">Products</h1>
        </NextLink>
        <NextLink href="/trade-request" passHref>
          <h1 className="mx-{3}">Trade Request</h1>
        </NextLink>
        <NextLink href="/contact" passHref>
          <h1 className="mx-{3}">Contact</h1>
        </NextLink>
      </div>
    </div>
  );
}
