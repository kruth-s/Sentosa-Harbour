import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes,Route } from 'react-router-dom';
import AddSong from './pages/addSong';
import AddAlbum from './pages/addAlbum';
import ListAlbum from './pages/listAlbum';
import ListSong from './pages/listSong';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';


export const url = 'http://localhost:4000'


const App = () => {
  return (
    <div className='flex itens-start min-h-screen'>
      <ToastContainer />
      <Sidebar/>
      <div className='flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]'>

      <Navbar>

      </Navbar>

      <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
        <Routes>
          <Route path='/add-song' element={<AddSong />} />
          <Route path='/add-album' element={<AddAlbum />} />
          <Route path='/list-album' element={<ListAlbum />} />
          <Route path='/list-song' element={<ListSong />} />
          
        </Routes>

      </div>
        
      </div>
    </div>
  );
};

export default App;
