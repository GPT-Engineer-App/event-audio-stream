import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box boxSize="sm">
          <Image src="/images/logo.png" alt="Camthis Logo" />
        </Box>
        <Heading as="h1" size="2xl" textAlign="center">
          Camthis
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Easily stream live events from multiple angles
        </Text>
        <Box boxSize="sm">
          <Image src="/images/landing-page.jpg" alt="Camthis Landing Page" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;