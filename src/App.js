import './App.css';
import Face from './components/Face'
import QuoteTile from './components/QuoteTile';
import Detailbar from './components/Detailbar';
import Languages from './components/Languages';
import Floatnav from './components/Floatingsection';
import { useState } from 'react';
// import Footer from './components/Footer';
function App() {

  var [loader,setLoader] = useState(false);
  var img = new Image()
  img.src = 'assets/pic.png';
  img.onload = () => {setLoader(true)}

  return ( loader ? 
    <>
      <Face image={img}/>
      <QuoteTile/>
      <Detailbar>
        I completed by Computer Science High Schooling from
        M.K.M H.S.S Piravom and currently I'm doing my Computer Application
        Degree from BPC College Piravom.
      </Detailbar>
      <Languages/>
      {/* <Footer/> */}
      <Floatnav />
    </> : <>Loading...</>
  );
}

export default App;
