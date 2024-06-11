import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const EasySetup = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">
          Easy Setup
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Quick to set up and start streaming.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/easy-setup.jpg" alt="Easy Setup" />
        </Box>
      </VStack>
    </Container>
  );
};

export default EasySetup;