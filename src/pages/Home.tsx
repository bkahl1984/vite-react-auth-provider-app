import { useAuth } from '../providers/AuthProvider';

const Home: React.FC = () => {
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

export default Home
