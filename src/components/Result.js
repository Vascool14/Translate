import React from 'react';
import copy from 'copy-to-clipboard';
import { useSpeechSynthesis } from "react-speech-kit";

const Result = ({isDarkMode, value, Lang}) => {
    const copyToClipboard = () => {
        copy(value); window.navigator.vibrate(40);
    }
    const { speak } = useSpeechSynthesis();
    return (
    <div id='result' className='h-auto rounded-xl sm:rounded-none  border-t-2 border-slate-100 dark:border-slate-700 transition-all duration-300 ease-in-out bg-white dark:bg-slate-800' 
    style={{transform: value.length >= 1 ? 'translateX(0%)':'translateX(-110%)'}}>
        <textarea className='bg-transparent overflow-auto w-full p-6 text-xl text-slate-700 
        dark:text-slate-400 resize-none select-text border-none outline-none' 
            value={value} readOnly disabled>
        </textarea>
        <div className=' flex flex-row justify-between h-12 p-2 pl-4'>
            <div className='btnClass speaker inline-block h-26 w-26 z-10 relative' onClick={()=> speak({ text: value })}>
                <svg height="35" viewBox="0 0 32 32" width="25"><path fill={isDarkMode? '#bbb':'#444'} d="M2 12 L8 12 L16 6 L16 26 L8 20 L2 20 z M32 16 A16 16 0 0 1 27.5 27.5 L24.5 24.5 A12 12 0 0 0 28 16 A12 12 0 0 0 24.5 7.5 L27.5 4.5 A16 16 0 0 1 32 16 M25 16 A8 8 0 0 1 22 22 L19.5 19.5 A4 4 0 0 0 21 16 A4 4 0 0 0 19.5 12.5 L22 10 A8 8 0 0 1 25 16"/></svg>
            </div>
            <button className='btnClass inline-block w-7 h-7 rounded-3xl hover:bg-slate-100 active:bg-slate-200 dark:hover:bg-slate-700 dark:active:bg-slate-600' onClick={copyToClipboard}>
                <svg width="24" height="24" fill={isDarkMode? '#bbb':'#444'} viewBox="0 0 24 24"><path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"/></svg>
            </button>
        </div>
    </div>
)
}

export default Result;