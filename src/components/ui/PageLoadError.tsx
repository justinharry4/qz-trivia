import { Center } from "@chakra-ui/react";


interface Props {
	message: string;
}
const PageLoadError = ({ message }: Props) => {
	return (
		<Center mt="7" fontWeight="bold" fontSize="lg">
			An error occured while loading this page: {message}
		</Center>
	)
}

export default PageLoadError;