import * as React from 'react';
import { useReducer } from 'react';
import './root.scss';
import { BrowserRouter } from 'react-router-dom';
import GlobalContext from '../context/context';
import AppRouter from '../appRouter/appRouter';
import { reducer, initialStore } from '../reducer/reducer';

function Root() {
  const [GlobalState, GlobalDispatch] = useReducer(reducer, initialStore);
  return (
    <GlobalContext.Provider
      value={{
        GlobalState,
        GlobalDispatch,
      }}
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default Root;
