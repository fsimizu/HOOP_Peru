import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { AboutUs } from './routes/aboutUs.jsx';
import { Community } from './routes/community.jsx';
import { Education } from './routes/education.jsx';
import { Family } from './routes/family.jsx';
import { FAQ } from './routes/faq.jsx';
import { GetInvolved } from './routes/getInvolved.jsx';
import { OurWork } from './routes/ourWork.jsx';
import { Root } from './routes/root.jsx';
import { Volunteer } from './routes/volunteer.jsx';


const router = createHashRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/about-us",
    element: <AboutUs />
  },
  {
    path: "/volunteer",
    element: <Volunteer />
  },
  {
    path: "/our-work",
    element: <OurWork />
  },
  {
    path: "/education",
    element: <Education />
  },
  {
    path: "/community",
    element: <Community />
  },
  {
    path: "/family",
    element: <Family />
  },
  {
    path: "/get-involved",
    element: <GetInvolved />
  },
  {
    path: "/faq",
    element: <FAQ />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <RouterProvider router={router} />

  </React.StrictMode> 
)
