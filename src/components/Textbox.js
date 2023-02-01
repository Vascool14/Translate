import React, { useState, useEffect } from 'react';
import Dictaphone from './Speech.js';
import x from '../assets/x.svg';

const Textbox = ({ value, setValue , Lang , setLang, setIsListening , isListening, isDarkMode, enterText }) => {
    const [textareaheight, setTextareaheight] = useState(1); 
    const handleChange = (e) => { 
        const height = e.target.scrollHeight; 
        const rowHeight = 45; 
        const trows = Math.max(Math.floor(height / rowHeight) - 2, 1);  
        if (trows !== textareaheight) setTextareaheight(trows);  
        if(trows > 8) setTextareaheight(8); 
        setValue(e.target.value); 
    }
    useEffect(() => {
        if(value.length > 5000) alert('Maximum character limit reached');
    }, [value]);
    const clearAll = () => {
        setValue('');
        document.getElementById('inputTextarea').value = '';
    }
    return (
    <div id='inputText' className='rounded-xl sm:rounded-none text-slate-900 dark:text-slate-200 bg-white dark:bg-slate-800 z-10 mb-2 relative top-0 transition-all duration-300'>
        <textarea id='inputTextarea' className='bg-transparent overflow-auto w-full h-auto p-6 pr-12 text-xl outline-none resize-none' 
            placeholder={isListening ? 'Speak now...': enterText } 
            disabled={isListening} 
            rows={textareaheight} 
            onChange={handleChange}
            value={value}>
        </textarea> 
        <Dictaphone value={value} setValue={setValue}  Lang={Lang} isListening={isListening} setIsListening={setIsListening} isDarkMode={isDarkMode}/>
        {value.length >= 1 && <div className='btnClass absolute top-2 right-1 h-12 w-12 flex flex-row justify-center items-center'>
            <img src={x} alt= 'clear' className='h-5 w-5 cursor-pointer' onClick={() => {clearAll(); value='';setTextareaheight(1);}}/>
        </div>}
    </div>
    )
}

export default Textbox;