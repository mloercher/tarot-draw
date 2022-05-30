import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import tarotData from './tarot-images';
import { Card, Container, Row } from 'react-bootstrap'
import reactRouterDom from 'react-router-dom';


function App() {

  // const [count, setCount] = useState(0)

  // const incrementCount = () => {
  //   setCount(count + 1)
  // }

  // const decrementCount = () => {
  //   setCount(count - 1)
  // }

  const [reading, setReading] = useState('')

  // useEffect(() => {
  //   Axios.get("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=4").then(
  //     (response) => {
  //       console.log(response)
  //       const responseCards = response.data.cards;
  //       setReading(responseCards)
  //     });
  // }, [reading]);

  // const getReading = () => {
  //   Axios.get("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=4").then(
  //     (response) => {
  //       console.log(response)
  //       const responseCards = response.data.cards;
  //       setReading(responseCards)
  //     }
  //   )
  // }

  // const getReading = () => {
  //   Axios.get("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=4").then(
  //     (response) => {
  //       console.log(response)
  //       const responseCards = response.data.cards;
  //       setReading(responseCards)
  //     }
  //   )
  // }

  // Randomly selects 5 cards from data

  const randomDraw = tarotData.cards.sort(() => Math.random() - Math.random()).slice(0, 5);
  // const randomDraw = tarotData.cards.sort(() => Math.floor(Math.random()).slice(0,5)


  // function that fires when Get Reading button is clicked--sets current state to randomDraw of 5 cards
  const getReading = () => {
    setReading(randomDraw);
    console.log(randomDraw)
  }


  //returns map of random 5 cards
  return (
    <>
      <button onClick={getReading}>GET READING</button>
      <Container>
        <Row>
          {randomDraw.map((reading) => {
            return (
              <Card key={reading.name}>
                <Card.Img src={"../images/cards/" + reading.img} />
                <Card.Body>
                  <Card.Title >
                    {reading.name}
                  </Card.Title>
                  <Card.Subtitle >
                    {reading.suit}
                  </Card.Subtitle>
                  <Card.Text >
                    {reading.fortune_telling}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default App;


// return (
//   <div className="App">
//     <button onClick={incrementCount}>+</button>
//     {count}
//     <button onClick={decrementCount}>-</button>
//     <button onClick={getReading}>Get a reading</button>
//     <div className='spread'>
//       {reading && reading.map((reading) => {
//         const { name, desc, id} = reading;
//         return (
//           <div key={id}>
//             <h1>{name}</h1>
//             <h2>{desc}</h2>
//           </div>
//         )
//       })}


//     </div>
//   </div>
// );
