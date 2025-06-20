import { HStack, Card, Box, Button, Stack, Image } from "@chakra-ui/react";

interface QuizCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const QuizCard = ({ title, description, imageUrl }: QuizCardProps) => {
  return (
    <Card.Root
      tabIndex={0}
      p="6"
      focusRing="inside"
      focusRingColor="blue.300"
      boxShadow={{ base: "xs", _focus: "md", _hover: "md" }}
    >
      <HStack alignItems="stretch" justifyContent="space-between">
        <Stack justifyContent="space-between">
          <Card.Body p="0">
            <Card.Title>{title}</Card.Title>
            <Card.Description>{description}</Card.Description>
          </Card.Body>
          <Card.Footer p="0">
            <Button
              fontWeight="bold"
              size="sm"
              variant="subtle"
              colorPalette="gray"
            >
              Start Quiz
            </Button>
          </Card.Footer>
        </Stack>
        <Box maxW="30%">
          <Image src={imageUrl} alt={title + "art"} rounded="xl" width="100%" />
        </Box>
      </HStack>
    </Card.Root>
  );
};

export default QuizCard;
