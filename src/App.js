
import './App.css';
import MainNavbar from './layout/MainNavbar';
import Footer from './layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import About from './About';
import Container from 'react-bootstrap/Container';
import {
  Route, Routes
} from "react-router-dom";
import Sub_Footer from './layout/Sub_Footer';
function App() {
  return (
    <>
      <MainNavbar />

      <Container fluid direction="horizontal" gap={3}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
      <Sub_Footer />
      <Footer />
    </>
  );
}

export default App;
