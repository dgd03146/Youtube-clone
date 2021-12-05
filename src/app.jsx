import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage/landingPage';
import Main from './components/main/main';
import { useState, useCallback, useEffect } from 'react';

function App({ youtube }) {
  const [videos, setVideos] = useState([]); // make once
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = useCallback(video => {
    setSelectedVideo(video);
  }, []);

  const search = useCallback(
    query => {
      youtube
        .search(query) // generally promise line be placed
        .then(videos => {
          const promises = [];
          Promise.all(youtube.channel(videos, promises)).then(() =>
            setVideos(videos)
          );
        });
      setSelectedVideo(null);
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => {
        const promises = [];
        Promise.all(youtube.channel(videos, promises)).then(() =>
          setVideos(videos)
        );
      });
    setSelectedVideo(null);
  }, [youtube]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage onSearch={search} />} />
        <Route path="/home" element={<LandingPage onSearch={search} />} />
        <Route
          path="/main"
          element={
            <Main
              videos={videos}
              selectedVideo={selectedVideo}
              selectVideo={selectVideo}
              search={search}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
