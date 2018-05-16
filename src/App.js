import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Web3 from 'web3';



//Components
import  './App.css';
import Header from './components/headerComponent/header.js';
import Footer from './components/footerComponent/footer.js';
import Select from './components/bodyComponent/select.js';
import Contents from './components/bodyComponent/contents.js';
import Submitted from './components/bodyComponent/submitted.js';
import Submit_container from './components/bodyComponent/submitted_container.js'
import ContentsContainer from './components/bodyComponent/contentsContainer.js'


class App extends React.Component {
    constructor(props) {
    super(props);


    }


  render(){
    return (
          <Router>
      <div className="App">
        <Header/>


    <Route exact path = '/contracts' component = {Select}/>
        <Route exact path = '/tokencreation' component= {Contents}/>
    <Route exact path = '/submitted' component= {Submit_container}/>



        <Footer />
      </div>
        </Router>
    );
  }

}

export default App;
