import React, { useContext } from 'react';
import Sidebar from './components/sidebar';
import Display from './components/display';
import Player from './components/player';
import { PlayerContext } from './context/playercontext';

const App = () => {
  const context = useContext(PlayerContext);


  const { audioRef,track } = context;

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
};

export default App;
