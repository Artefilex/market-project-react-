import React from 'react'
import {Box, Image, Button} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'
const Product = () => {
  return (

    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
        <NavLink to="card" > 
          <Image src='https://picsum.photos/200/300' alt='product'/>
          <Box p="6"> 
              <Box display='flex' alignItems="baseline">
                12 12 2010
              </Box>
              <Box mt={"1"} fontWeight="semibold" as='h4' lineHeight={"tight"}>
                Macbook
              </Box>
              <Box> 100tl</Box>
 
          </Box>
        </NavLink>
        <Button colorScheme= "pink" >Add To Basket</Button>

    </Box>
  )
}

export default Product