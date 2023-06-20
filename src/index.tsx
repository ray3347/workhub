import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Views/Pages/Home/Home';
import Jobs from './Views/Pages/Jobs/Jobs';
import Navbar from './Views/Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BeAWorker from './Views/Pages/BeAWorker/BeAWorker';
import Login from './Views/Pages/LogIn/Login';
import Register from './Views/Pages/Register/Register';
import CleaningService from './Views/Pages/Jobs/CleaningService';
import WorkerDetail from './Views/Pages/Jobs/WorkerDetail';
import BookPage from './Views/Pages/Jobs/BookPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route  path='home' element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="beAworker" element={<BeAWorker />} />          
          <Route path="register" element={<Register />} />          
          <Route path="login" element={<Login />} />
          <Route path="jobs/cleaningservice" element={<CleaningService/>}/>
          <Route path="jobs/cleaningservice/workerdetail" element={<WorkerDetail/>}/>
          <Route path="jobs/cleaningservice/workerdetail/bookpage" element={<BookPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
