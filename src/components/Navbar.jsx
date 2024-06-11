import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.800" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" color="white" fontWeight="bold">
          Camthis
        </Text>
        <Spacer />
        <Link as={RouterLink} to="/" color="white" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/multi-angle" color="white" mx={2}>
          Multi-Angle
        </Link>
        <Link as={RouterLink} to="/audio-quality" color="white" mx={2}>
          Audio Quality
        </Link>
        <Link as={RouterLink} to="/easy-setup" color="white" mx={2}>
          Easy Setup
        </Link>
        <Link as={RouterLink} to="/charge-audience" color="white" mx={2}>
          Charge Audience
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;