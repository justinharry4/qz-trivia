import { useState } from "react";
import { useParams } from "react-router";

import QuizOverview from "./QuizOverview";
import QuizForm from "./QuizForm";
import PageLoadError from "./PageLoadError";
import useQuestions from "../../hooks/useQuestions";

type Page = "overview" | "form";

const QuizPage = () => {
	const [currentPage, setCurrentPage] = useState<Page>("overview");

	const { quizId } = useParams();
	const parsedQuizId = parseInt(quizId!);
	const { questions, error, isLoading, fetchQuestions } =
		useQuestions(parsedQuizId);

	const handleStart = () => {
		setCurrentPage("form");
		fetchQuestions();
	};

	const handleCancel = () => {
		setCurrentPage("overview");
	};

	return (
		<>
			{(isLoading || currentPage === "overview" || error) && (
				<>
					<QuizOverview
						quizId={parsedQuizId}
						onStart={handleStart}
						isLoading={isLoading}
					/>
					{error && <PageLoadError message={error} />}
				</>
			)}
			{!isLoading && questions && currentPage === "form" && (
				<QuizForm questions={questions} onCancel={handleCancel} />
			)}
		</>
	);
};

export default QuizPage;
