import './App.css';
import LandingPage from './components/landingPage/landingPage';
import Main from './components/main/main';
import Youtube from './service/youtube';
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

console.log(process.env.REACT_APP_YOUTUBE_API_KEY);

const youtube = new Youtube(httpClient);

function App() {
  return (
    <div className="app">
      {/* <LandingPage /> */}
      <Main youtube={youtube} />
      {/* Sidebar */}
      {/* Recommended Video */}
    </div>
  );
}

export default App;
