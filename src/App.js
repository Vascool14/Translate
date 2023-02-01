import React, { useState } from 'react';
import Menu from './components/Menu.js';
import Burger from './components/Burger.js';
import Select from './components/Select.js';
import Textbox from './components/Textbox.js';
import Result from './components/Result.js';
import Logo from './components/Logo.jsx';
import DarkModeToggle from "react-dark-mode-toggle";
import './App.css';
// const { translate } = require('free-translate'); 
const languages = [ 'en-US', 'fr-FR' , 'es-ES' , 'de-DE' , 'pt-PT' , 'ro-RO' , 'ja-JP' , 'zh-CN'];
const enter = {
  'en-US': 'Enter text here...',
  'fr-FR': 'Entrez le texte ici...',
  'es-ES': 'Introduzca el texto aquí...',
  'de-DE': 'Geben Sie den Text hier ein...',
  'pt-PT': 'Insira o texto aqui...',
  'ro-RO': 'Introduceți textul aici...',
  'ja-JP': 'ここにテキストを入力してください...',
  'zh-CN': '在此处输入文本...'
}

function App() {
  const [open, setOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
    const toggleDarkMode = (checked) => {
    if(checked) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
      setDarkMode(checked);
  };
  let andrColor = document.querySelector("meta[name=msapplication-navbutton-color]");
    if(isDarkMode) andrColor.setAttribute("content", "rgb(30 41 59)");
    else andrColor.setAttribute("content", 'rbg(255 255 255)');
  let msColor = document.querySelector("meta[name=theme-color]");
    if(isDarkMode) msColor.setAttribute("content", "rgb(30 41 59)");
    else msColor.setAttribute("content", '#rgb(255 255 255)');
  
  const [Lang, setLang] = useState([languages[5] , languages[0]]);
  const [value, setValue] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [ enterText , setEnterText ] = useState(enter[Lang[0]]);
  React.useEffect(() => {
    setEnterText(enter[Lang[0]]);
  }, [Lang]);
  return (
    <>
    <div className='absolute top-0 left-0 z-50 text-red-600'>
      <Burger open={open} setOpen={setOpen} isDarkMode={isDarkMode} />
      <Menu open={open}/>
    </div>
    <div className='h-screen w-screen top-0 right-0 z-40 fixed bg-black opacity-30' 
    style={{display: open? 'block': 'none'}} onClick={() => setOpen(false)}></div>
    <div className="App w-screen h-screen relative bg-slate-100 dark:bg-slate-900" onClick={() => setOpen(false)}>
      <nav className='bg-white dark:bg-slate-800 p-3 pl-16 transition-all duration-100'>
        <Logo />
        <DarkModeToggle onChange={toggleDarkMode} checked={isDarkMode} size={60} className="absolute top-0 right-0 m-3 z-30"/>
      </nav>
      <Select isDarkMode={isDarkMode} Lang={Lang} setLang={setLang}/>
      <div className='h-3/5 sm:h-2/5 p-2 sm:px-0 sm:pt-1'>
          <Textbox setValue={setValue} value={value}  Lang={Lang} setLang={setLang} isListening={isListening} setIsListening={setIsListening} isDarkMode={isDarkMode} enterText={enterText}/>
          <Result value={value} isDarkMode={isDarkMode} Lang={Lang} setLang={setLang}/>
      </div>
    </div>
    </>
  );
}

export default App;
