import logo from './logo.svg';
import './App.css';
import PostForm from './components/form_post';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ask questions about a web page.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PostForm></PostForm>
        </a>
      </header>
    </div>
  );
}

export default App;
