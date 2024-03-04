import { useRouter } from 'next/navigation';
import { jwtDecode } from "jwt-decode";

const requireAdminAuth = (Component) => {
  return (props) => {
    const router = useRouter();
    let token = null;

    if (typeof window !== 'undefined') {
      token = localStorage.getItem('adminToken');
    }

    if (!token || !isValidToken(token)) {
      // If token is not present or not valid, redirect to admin login page
      if (typeof window !== 'undefined') {
        router.push('/admin');
      }
      return null; // it will not render the component
    }

    return <Component {...props} />;
  };
};

const isValidToken = (token) => {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if(decodedToken.exp < currentTime){
      localStorage.removeItem('adminToken');
      return false;
    }
    return true;
  }

export default requireAdminAuth;
