import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const ChargeAudience = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">
          Charge Your Audience
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Easily charge your audience for access to your live events.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/charge-audience.jpg" alt="Charge Your Audience" />
        </Box>
      </VStack>
    </Container>
  );
};

export default ChargeAudience;