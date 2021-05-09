import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
display:flex;
    width:100vw;
    height:100vh;
    justify-content:center;
    align-items:center;
`

const Home = () => {
    return (
        <Page>
            <h1>Welcome in my webshop</h1>
        </Page>
    );
}

export default Home;