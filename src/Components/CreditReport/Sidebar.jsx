import React from 'react';
import { Box, Flex, Icon, VStack } from '@chakra-ui/react';

function Sidebar({ onItemClick }) {
  return (
    <Flex height="100%">
    <Box width="100%" bg="gray.800" color="white" p="4" paddingTop="20%">
      <VStack spacing="4" align="flex-start">
        {/* Personal Information */}
        <Flex align="center"  onClick={() => onItemClick('personal')}
        cursor="pointer">
          Personal Information
        </Flex>

        {/* Account Information */}
        <Flex align="center"  onClick={() => onItemClick('account')}
        cursor="pointer">
          Account Information
        </Flex>
      </VStack>
    </Box>
    </Flex>
  );
}

export default Sidebar;
