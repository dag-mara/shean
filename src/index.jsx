import { createRoot } from 'react-dom/client';
import './style.css';
import { Main } from './components/Main';

const App = () => {
  return (
    <>
      <Main />
    </>
    
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
