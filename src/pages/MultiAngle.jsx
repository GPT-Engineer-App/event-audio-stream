import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const MultiAngle = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">
          Multi-Angle Streaming
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Stream live events from multiple angles effortlessly.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/multi-angle.jpg" alt="Multi-Angle Streaming" />
        </Box>
      </VStack>
    </Container>
  );
};

export default MultiAngle;