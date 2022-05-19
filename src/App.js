import logo from './logo.svg';
import './App.css';
import BannerHeader from './components/bannerHeader';

function App() {
  const data = {
    image: './memeFace.png',
    alt: 'Meme Face',
    title: 'Meme Generator',
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
  return (
    <div className="App">
      <BannerHeader {...data} />
    </div>
  );
}

export default App;
