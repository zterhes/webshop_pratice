import styled from 'styled-components'

const Card = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
max-width:20vw;
max-height:50vh;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
margin:1vw;
&:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`

const Prize = styled.h1`
font-size:100%;

`

const Title = styled.h1`
font-size:100%;
`

const ProductImg = styled.img`
max-width:100%;
max-height:70%;
`

const ProductCard = ({ image, title, price }) => {
    return (
        <Card>
            {console.log(`title`, title)}
            <ProductImg src={image} alt="" />
            <Title>{title}</Title>
            <Prize>€{price}</Prize>
        </Card>
    );
}

export default ProductCard;