import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <Flex flexDir="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" px="6" maxW={1480} mx="auto">
        <Sidebar />
      </Flex>
    </Flex>
  );
}
