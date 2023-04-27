import { Children, useLayoutEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import { Layout } from './pages/layout';
import { Login } from './pages/login';
import { Chat } from './pages/chat';
import { Dashboard } from './pages/dashboard';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/chat',
        element: <Chat />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
