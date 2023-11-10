import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from 'react-router-dom'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.JSX'
import Contact from './components/Contact/Contact.jsx'
import Layout from './Layout.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />              //Basically a OUTLET in layout file
      <Route path='about' element={<About />} />        //Basically a OUTLET in layout file
      <Route path='contact' element={<Contact />} />    //Basically a OUTLET in layout file
      <Route path='user/:userid' element={<User />} />  //Basically a OUTLET in layout file
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
