import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = ({ value , setValue , Lang, isListening, setIsListening, isDarkMode }) => {
    const {transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    if (listening) {
        setValue(transcript); 
    }
    return (
    <div>
        <div className='w-full h-12 flex justify-between flex-col'> 
            <div className='absolute bottom-3 left-2 ml-1 cursor-pointer'> 
                {isListening? 
                <div className='btnClass bg-transparent w-9 h-9 p-1 hover:bg-gray-200 dark:hover:bg-slate-800 rounded-full'
                onClick={() => {setIsListening(false);SpeechRecognition.stopListening();}}>
                    <div className='ml-1 h-5 w-2 bg-gray-400 dark:bg-slate-600 inline-block'></div>
                    <div className='ml-1 h-5 w-2 bg-gray-400 dark:bg-slate-600 inline-block'></div>
                </div>:
                <div className='btnClass bg-transparent w-8 h-8 p-1 hover:bg-gray-200 dark:hover:bg-slate-800 rounded-full' 
                onClick={() => {setIsListening(true); SpeechRecognition.startListening({ language: Lang.input })}}>
                    <svg className='m-1 mb-0' viewBox="0 0 82.05 122.88"><path fill={isDarkMode? '#bbb':'#444'} d="M59.89,20.83V52.3c0,27-37.73,27-37.73,0V20.83c0-27.77,37.73-27.77,37.73,0Zm-14.18,76V118.2a4.69,4.69,0,0,1-9.37,0V96.78a40.71,40.71,0,0,1-12.45-3.51A41.63,41.63,0,0,1,12.05,85L12,84.91A41.31,41.31,0,0,1,3.12,71.68,40.73,40.73,0,0,1,0,56a4.67,4.67,0,0,1,8-3.31l.1.1A4.68,4.68,0,0,1,9.37,56a31.27,31.27,0,0,0,2.4,12.06A32,32,0,0,0,29,85.28a31.41,31.41,0,0,0,24.13,0,31.89,31.89,0,0,0,10.29-6.9l.08-.07a32,32,0,0,0,6.82-10.22A31.27,31.27,0,0,0,72.68,56a4.69,4.69,0,0,1,9.37,0,40.65,40.65,0,0,1-3.12,15.65A41.45,41.45,0,0,1,70,85l-.09.08a41.34,41.34,0,0,1-11.75,8.18,40.86,40.86,0,0,1-12.46,3.51Z"/></svg></div>
                }
            </div>
            <div className='absolute right-2 bottom-2'><p className='text-sm'>{value.length}/5000</p></div>
        </div>
    </div>
    );
};
export default Dictaphone;