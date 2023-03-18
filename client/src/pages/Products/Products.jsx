import React from 'react'
import Product from '../../components/Card/Product'
import { Grid } from '@chakra-ui/react'
const Products = () => {
    return (
        <div>
           
            <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                
            </Grid>
        </div>
    )
}

export default Products