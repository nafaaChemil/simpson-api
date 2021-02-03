import React from 'react';
import axios from 'axios'
import QuoteCard from './components/QuoteCard';


const samplePerso = 
  [{
    "quote": "For once maybe someone will call me \"sir\" without adding, \"You're making a scene.\"",
    "character":"Homer Simpson",
    "image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    "characterDirection":"Right"}]
;




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sim: samplePerso[0],
    };

    this.getSim = this.getSim.bind(this);

  }

  getSim() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState({
          sim: data[0],
        });
    });
  }



  render(){
    return(
      <div className="App">
          <QuoteCard sim={this.state.sim} />
          <button type="button" onClick={this.getSim}>Get a new Simpson</button>
      </div>
    )
  }
  

}


export default App;
