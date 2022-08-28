import "bootstrap/dist/css/bootstrap.min.css";
import "../stylesheets/App.css";
import React from "react";
import { Container } from "react-bootstrap";
import Header from "./header";
import GameBoard from "./gameBoard";
import Footer from "./footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Container className="text-white mb-5">
          <Header/>
          <GameBoard/>
        </Container>
        <Footer/>
      </>
    );
  }
}

export default App;
