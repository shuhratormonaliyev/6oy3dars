import React from 'react';
import Counter from './components/Counter';
import TabSelector from './components/TabSelector';
import SocialMediaPost from './components/SocialMediaPost';
import GameNamePicker from './components/GameNamePicker';
import ProgressBar from './components/ProgressBar';
import ImageGallery from './components/ImageGallery';
import './App.css';
function App() {
  return (
    <div>
      <Counter />
      <TabSelector />
      <SocialMediaPost />
      <GameNamePicker />
      <ProgressBar />
      <ImageGallery />
    </div>
  );
}

export default App;
