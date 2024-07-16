
import './App.css';
import LikeButton from './components/LikeButton';
import ScreenContainer from './components/ScreenContainer';

function App() {
  return (
    <div className="App">
      <LikeButton/>


      <div className='flex justify-center pt-10'>
        <ScreenContainer/>
      </div>
    </div>
  );
}

export default App;
