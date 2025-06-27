import { Routes, Route } from "react-router";

import Layout from "./components/ui/Layout";
import QuizList from "./components/ui/QuizList";
import QuizPage from "./components/ui/QuizPage";
import "./App.css";

const App = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<QuizList />} />

				<Route path="quiz/:quizId" element={<QuizPage />} />
			</Route>
		</Routes>
	);
};

export default App;
