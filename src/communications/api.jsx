import axios from 'axios';


export const allProducts = async () => {
    return await axios.get('https://fakestoreapi.com/products')
        .then(response => {
            return response.data
        }
        )
        .catch(error => console.log(`error`, error))
}
