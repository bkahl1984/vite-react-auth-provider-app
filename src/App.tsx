import './App.css'
import { useAuth } from './AuthProvider';

const App: React.FC = () => {
  const { user, isLoggedIn } = useAuth()
  
  return (
    <>
      <br />
      <br />
      {isLoggedIn 
        ? <div className="text-stone-600">Welcome to the Home Page, {user?.name}!</div>
        : <div className="text-stone-600">Home Page!</div>
      }
    </>
  );
};

export default App
