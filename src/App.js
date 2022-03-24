import './App.css';
import Face from './components/Face'
import QuoteTile from './components/QuoteTile';
import Detailbar from './components/Detailbar';
import Languages from './components/Languages';
import Floatnav from './components/Floatingsection';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded:false,
    }
  }
  
  render() {
    return (
      <>
        {this.state.loaded ? <> 
          <Face image={this.image} />
          <QuoteTile/>
          <Detailbar>
          I completed by Computer Science High Schooling from
          M.K.M H.S.S Piravom and currently I'm doing my Computer Application
          Degree from BPC College Piravom.
          </Detailbar>
          <Languages/>
          <Footer/>
          <Floatnav />
        </>
        : <Loader />
      }
      </>
  )}
  componentDidMount(){
    this.image = new Image();
    this.image.onload = ()=>{
      console.log("Loaded");
      this.setState({loaded:true});
    };
    this.image.src = '/assets/alphabgpic.png';
  }
};


export default App;
