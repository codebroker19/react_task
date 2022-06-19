import './App.css';
import Stories from './components/stories';

import Navbar from './components/navbar';

import Create from './components/create';
import Posts  from './components/posts';

import Sidebar from './components/sidebar';
function App() {
  return (
    <div className="App">
    
     <Navbar/>
     <div className='container'>
     <Stories/>
     <Create/>
     <Posts/>
     <Sidebar/>
    
     </div>
    
    </div>
  );
}

export default App;
