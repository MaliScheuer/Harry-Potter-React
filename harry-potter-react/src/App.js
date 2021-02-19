import fetchCharacters from "./Services/fetchCharacters";
import { useState, useEffect } from 'react';
import Headline from './Headline';
import Card from './Card';
import styled from 'styled-components'


function App() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetchCharacters().then(characters => {
      const charactersFetchedFromApi = characters.map(character => ({
        name: character.name,
        house: character.house,
        patronus: character.patronus,
        hogwartsStudent: character.hogwartsStudent,
        image: character.image


      }));
      console.log(charactersFetchedFromApi)
      setCharacters(charactersFetchedFromApi)

    });

  }, [])



  const house = characters.house


  function getHouseColor() {
    if (house === 'Gryffindor') {
      return colorGryff
    }

  }





  return (
    <div className="App">
      <Headline></Headline>


      {characters.map((character, index) => (


        < Card
          key={index}
          name={character.name}
          house={character.house}
          patronus={character.patronus}
          hogwartsStudent={character.hogwartsStudent}
          color={getHouseColor()}

        ></Card>

      ))

      }


    </div >
  );
}




const colorGryff = styled.div`
border: solid 1px red;
margin: 1rem; 
padding: 0.8rem; 
background-color: var(--gryffindor);
 
 `

export default App;
