import { useHistory } from 'react-router'
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

const DetailsButton = styled.button`
min-height: 10%;
width:50%;
margin-bottom:5%;
background-color:red;
color:white;
`

const ProductCard = ({ image, title, price, id }) => {

    let history = useHistory()

    const handleClick = () => {
        history.push("/productPage/" + id)
    }
    return (
        <Card>
            {console.log(`title`, title)}
            <ProductImg src={image} alt="" />
            <Title>{title}</Title>
            <Prize>€{price}</Prize>
            <DetailsButton onClick={handleClick}>Details</DetailsButton>
        </Card>
    );
}

export default ProductCard;