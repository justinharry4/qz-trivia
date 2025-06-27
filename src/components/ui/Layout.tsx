import { Outlet } from "react-router";
import { Box } from "@chakra-ui/react";

import NavBar from "./NavBar";

const Layout = () => (
  <Box minH="100vh" bg="gray.100">
    <NavBar />
    <Box as="main" pt="7" mx={{ base: "5", md: "15%" }}>
    	<Outlet />
    </Box>
  </Box>
);

export default Layout;
