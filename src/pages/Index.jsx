import { Box, Flex, Image, Heading, Text, VStack, Spacer } from '@chakra-ui/react';

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading mb={4}>Welcome to Monkey World</Heading>
        <Text fontSize="lg" mb={6}>Explore the fascinating world of monkeys through our curated images.</Text>
      </Flex>
      <Flex wrap="wrap" justify="center">
        <Box p={5} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="/images/monkey1.jpg" alt="Monkey in natural setting" />
        </Box>
        <Box p={5} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="/images/monkey2.jpg" alt="Monkey hanging from a tree" />
        </Box>
        <Box p={5} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="/images/monkey3.jpg" alt="Group of monkeys" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;