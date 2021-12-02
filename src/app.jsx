import './App.css';
import LandingPage from './components/landingPage/landingPage';
import Main from './components/main/main';
import Youtube from './service/youtube';

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

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
