import { Spinner, Center } from "@chakra-ui/react";

interface LoadingIndicatorProps {
	boxWidth?: string;
	boxHeight?: string;
	size?: "sm" | "md" | "lg" | "xl" | "xs";
}

const LoadingIndicator = ({
	boxWidth,
	boxHeight,
	size,
}: LoadingIndicatorProps) => {
	return (
		<Center width={boxWidth || "100%"} height={boxHeight || "80vh"}>
			<Spinner
				scale="2"
				size={size || "xl"}
				color="blue.600"
				borderWidth="2px"
			/>
		</Center>
	);
};

export default LoadingIndicator;
