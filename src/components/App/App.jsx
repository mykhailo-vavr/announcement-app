import FirebaseState from '../../context/firebase/FirebaseState';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.scss';

function App() {
  return (
    <FirebaseState>
      <div className="App">
        <Header />
        <Main />
      </div>
    </FirebaseState>
  );
}

export default App;
