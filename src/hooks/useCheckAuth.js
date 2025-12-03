// Hook to check if user is logged in (from Dashboard localStorage)
export const useCheckAuth = () => {
  const checkIsLoggedIn = () => {
    try {
      const authStorage = localStorage.getItem('auth-storage');
      if (!authStorage) return false;
      
      const authData = JSON.parse(authStorage);
      return !!authData.state?.token;
    } catch (error) {
      console.error('Error checking auth:', error);
      return false;
    }
  };

  const handleGetStarted = () => {
    const isLoggedIn = checkIsLoggedIn();
    
    if (isLoggedIn) {
      // Redirect to Dashboard if logged in
      window.location.href = 'https://dashboard-mauve-two.vercel.app/';
    } else {
      // Redirect to Login if not logged in
      window.location.href = 'https://dashboard-mauve-two.vercel.app/login';
    }
  };

  return { checkIsLoggedIn, handleGetStarted };
};
