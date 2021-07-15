import React, { FC, useEffect } from 'react';
import { SmallAddIcon } from '@chakra-ui/icons';
import { Flex, Heading, IconButton,  } from '@chakra-ui/react';
import { ScreenLayout } from '../layouts';
import TopSection from '../organisms/TopSection';
import { PRODUCT_CREATE_PATH } from '../../utils/constants/paths';
import { LinkItem } from '../atoms';
import { useDispatch, useSelector } from 'react-redux';
import { IInitialState } from '../../store/initialState';
import { Dispatch } from 'redux';
import { getProducts } from '../../store/slices/productSlice';
import { Product } from '../../store/types/productState';
import { TableComponent } from '../organisms';

const ProductsListPage: FC = (): JSX.Element => {
    const { data }: { data: Product[] } = useSelector((state: IInitialState) => state.product);
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(getProducts(null));
    }, []);

    return (
        <ScreenLayout>
            <TopSection justify="flex-end">
                <LinkItem to={PRODUCT_CREATE_PATH} outsideHeader>
                    <IconButton
                        aria-label="Add product"
                        variant="solid"
                        bgColor="white"
                        color="green.500"
                        borderColor="green.500"
                        borderWidth="1px"
                        icon={<SmallAddIcon />}
                        isRound={false}
                        size="lg"
                        _hover={{
                            bg: 'green.500',
                            borderColor: 'green.500',
                            color: 'white',
                        }}
                        _active={{
                            bg: 'green.800',
                            borderColor: 'green.800',
                        }}
                    />
                </LinkItem>
            </TopSection>
            <Flex justify="center" width="100%" paddingBlock={3}>
                <Heading size="md" color="main.800">
                    Products list
                </Heading>
            </Flex>
            {
                data.length ? <TableComponent data={data}/> : <></>
            }
        </ScreenLayout>
    );
};

export default ProductsListPage;
