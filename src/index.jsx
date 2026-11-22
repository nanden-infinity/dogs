import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { UserStorage } from './UserContext.jsx';
const element = document.getElementById('root');
const root = createRoot(element);

root.render(<App />);
