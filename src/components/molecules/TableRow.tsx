import { Product } from '../../store/types/productState';
import { Checkbox, Td, Tr } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { updateProduct } from '../../store/slices/productSlice';

const TableRow = ({ product }: { product: Product }) => {
    const dispatch: Dispatch<any> = useDispatch();
    const handleChange = () => {
        console.log('handleChange');
        dispatch(updateProduct({
            ...product,
            isActive: !product.isActive
        }));
    };

    return (
        <Tr>
            <Td>{product.name}</Td>
            <Td>{product.EAN}</Td>
            <Td>{product.type}</Td>
            <Td>{product.weight}</Td>
            <Td>{product.color}</Td>
            <Td>{product.quantity}</Td>
            <Td>{product.price}</Td>
            <Td>
                <Checkbox
                    size="lg"
                    colorScheme="green"
                    isChecked={product.isActive}
                    onChange={handleChange}
                />
            </Td>
        </Tr>
    );
};

export default TableRow;
