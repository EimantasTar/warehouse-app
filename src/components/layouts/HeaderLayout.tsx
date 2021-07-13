import React from 'react';
import { Flex } from '@chakra-ui/react';

export const HeaderLayout = ({ children }: { children: any }) => {
    return (
        <Flex
            direction="column"
            align="center"
            maxW={{ '2xl': '1600px' }}
            m="0 auto"
        >
            {children}
        </Flex>
    )
};
