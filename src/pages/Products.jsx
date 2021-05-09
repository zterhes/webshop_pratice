import React, { useEffect, useState } from 'react';
import { allProducts } from '../communications/api'
import ProductCard from '../components/ProductCard'
import styled from 'styled-components'


const ProdWrapper = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:center;
`


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(async () => {
        const data = await allProducts();
        setProducts(data);
    }, [])

    return (
        <>
            <h1>Products</h1>
            <ProdWrapper>
            {products ? (
                products.map(product => (
                    <ProductCard
                        category={product.category}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                        key={product.id} 
                        />
                ))
            ) : (
                <h1>kapcsolati hiba</h1>
            )
            }
            </ProdWrapper>
        </>
    );
}

export default Products;