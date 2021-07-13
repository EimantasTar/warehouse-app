import { Box, Divider, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React, { FC } from 'react';
import { PRODUCT_CREATE_PATH, PRODUCTS_LIST_PATH } from '../../utils/constants/paths';
import { MenuItem } from '../atoms';

export const Header: FC = (): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            width="100%"
            wrap="wrap"
            paddingY={{ base: 6, md: 0 }}
            paddingLeft={6}
            paddingRight={{ base: 6, md: 0 }}
            bg="main.500"
            color="white"
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                    Warehouse App
                </Heading>
            </Flex>
            <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
                <HamburgerIcon />
            </Box>
            <Box
                display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
                flexBasis={{ base: '100%', md: 'auto' }}
            >
                <Flex
                    align={{ base: 'flex-start', md: 'center' }}
                    direction={{ base: 'column', md: 'row' }}
                    pt={{ base: 5, md: 0 }}
                >
                    <Divider
                        display={{ base: 'block', md: 'none' }}
                        mb={{ base: 3, md: 0 }}
                        pb={{ base: 0, md: 0 }}
                    />
                    <MenuItem
                        to={PRODUCTS_LIST_PATH}
                        outsideHeader={false}
                    >
                        Products
                    </MenuItem>
                    <MenuItem
                        to={PRODUCT_CREATE_PATH}
                        outsideHeader={false}
                    >
                        Add product
                    </MenuItem>
                </Flex>
            </Box>
        </Flex>
    );
};
