import styled from 'styled-components'





export default function Card({ name, house, image, patronus, hogwartsStudent }) {

    return (
        <Wrapper>

            <h2>{name}</h2>
            <h3>{house}</h3>
            <h3>{patronus}</h3>
            <h3>{hogwartsStudent}</h3>
            <img src={image} alt='A picture of a Hogwards Character' />

        </Wrapper>
    )
}

const Wrapper = styled.div`
border: solid 1px red;
margin: 1rem; 
padding: 0.8rem; 
background-color: 
`

