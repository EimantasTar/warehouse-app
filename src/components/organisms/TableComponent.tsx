import { Table, TableCaption, Tbody, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { Product } from '../../store/types/productState';
import { TableRow } from '../molecules';


const TableComponent = ({ data }: { data: Product[] }): JSX.Element => {

    return (
        <Table variant="striped" color="main.900">
            <TableCaption>All products that have been stored to Local Storage</TableCaption>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>EAN</Th>
                    <Th>Type</Th>
                    <Th>Weight</Th>
                    <Th>Color</Th>
                    <Th>Quantity</Th>
                    <Th>Price</Th>
                    <Th>Active</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    data.map((product: Product) => <TableRow key={product.id} product={product} />)
                }
            </Tbody>
            <Tfoot>
                <Tr>
                    <Th></Th>
                    <Th></Th>
                    <Th></Th>
                    <Th></Th>
                    <Th></Th>
                    <Th>Click to update</Th>
                    <Th>Click to update</Th>
                    <Th>Click to change</Th>
                </Tr>
            </Tfoot>
        </Table>
    )

};

export default TableComponent;
