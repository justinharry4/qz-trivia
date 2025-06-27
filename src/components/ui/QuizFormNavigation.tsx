import { HStack, Button } from "@chakra-ui/react";

interface QuizFormNavigationProps {
	currentIndex: number;
	totalQuestions: number;
	onNext: () => void;
	onPrev: () => void;
}

const QuizFormNavigation = ({
	currentIndex,
	totalQuestions,
	onNext,
	onPrev,
}: QuizFormNavigationProps) => (
	<HStack justifyContent="space-between">
		<Button
			type="button"
			disabled={currentIndex === 0}
			variant="outline"
			colorPalette="black"
			rounded="md"
			borderWidth="2px"
			_hover={{ bg: "gray.200" }}
			onClick={onPrev}
		>
			Back
		</Button>
		{currentIndex < totalQuestions - 1 ? (
			<Button
				type="button"
				variant="solid"
				colorPalette="blue"
				rounded="md"
				onClick={(e) => {
					e.preventDefault();
					onNext();
				}}
			>
				Next
			</Button>
		) : (
			<Button asChild variant="solid" colorPalette="blue" rounded="md">
				<button type="submit">Submit Quiz</button>
			</Button>
		)}
	</HStack>
);

export default QuizFormNavigation;
