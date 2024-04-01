import './App.css';
import AddTask from './components/AddTask';
import SingleTask from './components/SingleTask';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="container">
      <div className="App">
        <AddTask />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
