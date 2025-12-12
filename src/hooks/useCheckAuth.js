// useCheckAuth.js
export const useCheckAuth = () => {
  const DASHBOARD_URL = "https://dashboard.thesuffaheducation.com";

  const checkIsLoggedIn = () => {
    try {
      const authStorage = localStorage.getItem("auth-storage");
      if (!authStorage) return false;

      const authData = JSON.parse(authStorage);
      return !!authData.state?.token;
    } catch (error) {
      console.error("Error checking auth:", error);
      return false;
    }
  };

  const redirectUser = () => {
    const logged = checkIsLoggedIn();

    if (logged) {
      window.location.href = `${DASHBOARD_URL}/`;
    } else {
      window.location.href = `${DASHBOARD_URL}/login`;
    }
  };

  return { redirectUser, checkIsLoggedIn };
};
