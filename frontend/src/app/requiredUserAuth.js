import { useRouter } from 'next/navigation';
import { jwtDecode } from "jwt-decode";

const requireUserAuth = (Component) => {
  return (props) => {
    const router = useRouter();
    let token = null;

    if (typeof window !== 'undefined') {
      token = localStorage.getItem('Token');
    }

    if (!token || !isValidToken(token)) {
      // If token is not present or not valid, redirect to admin login page
      router.push('/login');
      return null; // it will not render the component
    }

    return <Component {...props} />;
  };
};

const isValidToken = (token) => {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if(decodedToken.exp < currentTime){
      localStorage.removeItem('Token');
      return false;
    }
    return true;
  }

export default requireUserAuth;
