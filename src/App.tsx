import { Routes, Route } from "react-router";

import Layout from "./components/ui/Layout";
import Home from "./components/ui/Home";
import About from "./components/ui/About";
import QuizList from "./components/ui/QuizList";
import QuizPage from "./components/ui/QuizPage";
import QuizResult from "./components/ui/QuizResult";
import QuizReview from "./components/ui/QuizReview";
import NotFound from "./components/ui/NotFound";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="quizzes" element={<QuizList />} />

        <Route path="quizzes/:quizId" element={<QuizPage />} />

        <Route
          path="quizzes/:quizId/results/:resultId"
          element={<QuizResult />}
        />

        <Route
          path="quizzes/:quizId/results/:resultId/review"
          element={<QuizReview />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
