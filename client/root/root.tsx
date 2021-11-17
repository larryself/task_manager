import * as React from 'react';
import { useReducer } from 'react';
import './root.scss';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
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
        <Toaster
          position={'bottom-right'}
          toastOptions={{
            style: {
              padding: '20px',
              background: '#333',
              color: '#fff',
            },
          }}
        />
        <AppRouter />
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default Root;
