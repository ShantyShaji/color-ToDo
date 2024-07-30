 
 
import './App.css';
import ColorPicker from './ColorPicker';
import ToDo from './ToDo';

function App() {
  
  return (
    <div className='flex items-center justify-center gap-10'>
      <ColorPicker />
      <ToDo />
    </div>
  );
}

export default App;
