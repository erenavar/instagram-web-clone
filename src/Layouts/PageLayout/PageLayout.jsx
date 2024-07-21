import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import SideBar from "../../components/SideBar/SideBar";

const PageLayout = () => {
  return (
    <Flex>
      <Box>
        <SideBar />
      </Box>
      <Box></Box>
    </Flex>
  );
};

export default PageLayout;
