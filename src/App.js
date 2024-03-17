import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AlbumForm from './components/AlbumForm/AlbumForm';
import AlbumList from "./components/AlbumList/AlbumList"; 

function App() {
  return (
    <>
    <Navbar/>
    <AlbumList />
    </>
  );
}

export default App;
