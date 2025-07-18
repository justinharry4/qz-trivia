import { Outlet } from "react-router";
import { Box, Stack } from "@chakra-ui/react";

import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => (
	<Stack minH="100vh" bg="gray.100">
		<NavBar />
		<Box as="main" pt="7" mx={{ base: "5", md: "15%" }} minH="90vh">
			<Outlet />
		</Box>
		<Box mt="auto">
			<Footer />
		</Box>
	</Stack>
);

export default Layout;
