import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/layout/header";
import Container from "./components/layout/container";
import Footer from "./components/layout/footer";
import Profile from "./components/layout/profile";
import TruyenDetail from "./components/storys/truyenDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/truyen/:id" element={<TruyenDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
