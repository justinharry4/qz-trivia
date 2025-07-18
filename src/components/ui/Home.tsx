import { Button, Center } from "@chakra-ui/react";
import { Link } from "react-router";

import QuizList from "./QuizList";

const HOME_QUIZ_COUNT = 7;

const Home = () => {
	return (
		<>
			<QuizList quizCount={HOME_QUIZ_COUNT}>
				<Center mt="7">
					<Button asChild colorPalette="blue" rounded="full">
						<Link to="/quizzes">View All Quizzes</Link>
					</Button>
				</Center>
			</QuizList>
		</>
	);
};

export default Home;
