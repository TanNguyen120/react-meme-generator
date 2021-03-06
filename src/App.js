
import './App.css';
import BannerHeader from './components/bannerHeader';
import FormInput from './components/formInput';
import ShowMeme from './components/showMeme';

function App() {
  const data = {
    image: './memeFace.png',
    alt: 'Meme Face',
    title: 'Meme Generator',
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  };
  return (
    <div className="App">
      <BannerHeader {...data} />
      <FormInput />
    </div>
  );
}

export default App;
