import { Box, ChakraProvider } from "@chakra-ui/react"
import theme from './styles/theme'
import { ReactNode } from "react";
//import { LayoutProps } from "@/.next/types/app/layout"

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children} : LayoutProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Header /> */}
      <Box as="main">{children}</Box>
    </ChakraProvider>
  )
}
