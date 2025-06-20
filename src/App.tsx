import { Box } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import QuizList from "./components/ui/QuizList";
import "./App.css";

const App = () => {
  return (
    <Box minH="100vh" bg="gray.100">
      <NavBar />
      <QuizList />
    </Box>
  );
};

export default App;
