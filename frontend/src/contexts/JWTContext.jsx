import { createContext, useEffect, useReducer } from "react";

import PropTypes from "prop-types";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

import axios from "@utils/axios";
import authReducer from "@contexts/auth-reducer/auth";
import { Login, User } from "@api/api";
import { LOGIN, LOGOUT } from "@contexts/auth-reducer/actions";

const initialState = {
  isLoggedIn: false,
  isInitialized: false,
  user: null,
};

const verifyToken = (serviceToken) => {
  if (!serviceToken) {
    return false;
  }
  const decoded = jwtDecode(serviceToken);

  return decoded.exp > Date.now() / 1000;
};

const setSession = (serviceToken) => {
  if (serviceToken) {
    localStorage.setItem("serviceToken", serviceToken);
    axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
  } else {
    localStorage.removeItem("serviceToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

const JWTContext = createContext(null);

export const JWTProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = localStorage.getItem("serviceToken");
        if (serviceToken && verifyToken(serviceToken)) {
          setSession(serviceToken);
          const res = await User();
          const { user } = res.data;
          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true,
              user,
            },
          });
        } else {
          dispatch({
            type: LOGOUT,
          });
        }
      } catch (err) {
        dispatch({
          type: LOGOUT,
        });
        toast.error(err);
      }
    };

    init();
  }, []);

  const login = async (username, password) => {
    const res = await Login(username, password);
    const { token, user } = res.data.data;
    setSession(token);
    dispatch({
      type: LOGIN,
      payload: {
        isLoggedIn: true,
        user,
      },
    });
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: LOGOUT });
  };

  if (state.isInitialized !== undefined && !state.isInitialized) {
    return;
  }

  return (
    <JWTContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </JWTContext.Provider>
  );
};

JWTProvider.propTypes = {
  children: PropTypes.node,
};

export default JWTContext;
