import { Box } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import "./App.css";

const App = () => {
  return (
    <Box minH="100vh" bg="gray.100">
      <NavBar />
    </Box>
  );
};

export default App;
