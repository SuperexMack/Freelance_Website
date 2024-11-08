import './App.css'
import { ChatBox } from './ChatBot/ChatBot';
import { Chat } from './ChatSection/Chat'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from './Landing/Landing';
import { UserData } from './UserData/UserData';
import { AuthSecond } from './Auth/AuthSecond';
import { Authorization } from './Auth/Authorization';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing></Landing>}></Route>
      <Route path='/chat' element={<Chat></Chat>}></Route>
      <Route path='/bot' element={<ChatBox></ChatBox>}></Route>
      <Route path='/userdata' element={<UserData></UserData>}></Route>
      <Route path='/login' element={<AuthSecond></AuthSecond>}></Route>
      <Route path='/register' element={<Authorization></Authorization>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
