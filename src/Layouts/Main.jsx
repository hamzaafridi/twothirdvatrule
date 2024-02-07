import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Content from './Content';

function Main() {
  return (
    <Box bg="gray.300">
      <Flex direction="column">
        <Content />
      </Flex>
    </Box>
  );
}

export default Main;
