
import NetContext from "./NetContext";
import React,{ useState} from "react";


function GlobalState(props){
    const [
      login, // estado de tu login
      setLogin // funcion para cambiar tu estado
    ] = useState(localStorage.getItem("login"));
    const loginUser = token=> {
      setLogin(true); // cambia el estado de login a true y por ende react vuelve a renderizar todo lo asociado a ese valor
      localStorage.setItem("login",true);
      localStorage.setItem("token",token)
    }
    const logoutUser = () => {
      setLogin(false);  // cambia el estado de login a false y por ende react vuelve a renderizar todo lo asociado a ese valor
      localStorage.removeItem("login");
      localStorage.removeItem("token")
    }
    return (
      <NetContext.Provider
        value={{
          login:login,
          loginUser:loginUser,
          logoutUser:logoutUser
        }}
      >
        {props.children}
      </NetContext.Provider>
    );
  }

  export default GlobalState