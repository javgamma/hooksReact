
import './App.css';
import ContainerComponents from './components/ContainerComponents';
import LikeButton from './components/LikeButton';
import ScreenContainer from './components/ScreenContainer';

function App() {
  return (
    <div className="App">
      <LikeButton />

      <div className="flex justify-center pt-10">
        <ScreenContainer />
      </div>
      <ContainerComponents />
    </div>
  );
}

export default App;
