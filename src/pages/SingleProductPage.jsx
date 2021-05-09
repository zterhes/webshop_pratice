import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductData } from '../communications/api'
import styled from 'styled-components'


const Page = styled.div`
height:90vh;
width:100vw;
`

const Title = styled.div`
text-align:center;
font-weight:bolder;
font-size:3vw;
margin-bottom:5vh;
`

const Container = styled.div`
display:flex;
justify-content:space-around;
height:60vh;
width:100vw;
`

const DataDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width:50%;
`

const ProductPic = styled.img`
    max-width:50%;
`

const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
`

const Text = styled.p`
    font-size:${props => props.size};
    color:grey;
`

const Price = styled.div`
    color:black;
    font-size:6vw;
    font-weight:bolder;
`

const BuyButton = styled.button`
    width:40%;
    font-size:3rem;
    background-color:red;
    border-radius: 15px;
    border:3px solid black;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:hover{
        background-color:green;
        width:50%;
    }
`


const SingleProductPage = () => {
    const { productId } = useParams();
    const [productData, setProductData] = useState([])
    useEffect(async () => {
        const data = await getProductData(productId)
        setProductData(data)
        console.log(`productData`, productData)
    }, [])


    return (
        <Page>
            <Title>{productData.title}</Title>
            <Container>
                <ProductPic src={productData.image} />
                <DataDiv>
                    <Text size="2vw">{productData.category}</Text>
                    <Text size="2vw">{productData.description}</Text>
                    <Wrapper>
                        <Price>€{productData.price}</Price>
                        <BuyButton>Buy Me</BuyButton>
                    </Wrapper>
                </DataDiv>
            </Container>
        </Page>

    );
}

export default SingleProductPage;