import './App.css';
import Face from './components/Face'
import QuoteTile from './components/QuoteTile';
import Detailbar from './components/Detailbar';
import Languages from './components/Languages';
import Floatnav from './components/Floatingsection';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Face/>
      <QuoteTile/>
      <Detailbar>
        I completed by Computer Science High Schooling from
        M.K.M H.S.S Piravom and currently I'm doing my Computer Application
        Degree from BPC College Piravom.
      </Detailbar>
      <Languages/>
      {/* <Footer/> */}
      <Floatnav />
    </>
  );
}

export default App;
