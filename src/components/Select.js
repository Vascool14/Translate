import React from 'react'

const Select = ({ isDarkMode, setLang, Lang }) => {
    const languages = [ 'en-US', 'fr-FR' , 'es-ES' , 'de-DE' , 'pt-PT' , 'ro-RO' , 'ja-JP' , 'zh-CN'];
    const changeLang = () => {
        //animation of the 2 langueges changing
        let firstField = document.getElementById('firstField');
        let secondField = document.getElementById('secondField');
        firstField.classList.add('fadeOutLeft');
        secondField.classList.add('fadeOutRight');
        setTimeout(() => {
            firstField.classList.remove('fadeOutLeft');
            secondField.classList.remove('fadeOutRight');
        }, 500);
    }
    return (
    <div id='choose' className='sm:mt-1 flex-column mt-2 dark:border-b dark:border-slate-600 flex justify-evenly bg-white dark:bg-slate-800 select-none'>
        <div className='lang inline-block w-auto p-2 pl-12 cursor-pointer text-blue-700 transition-all duration-200'>
            <select id="firstField" className='bg-white dark:bg-slate-800' value={Lang[0]} 
            onChange={(e) => setLang([e.target.value, Lang[1]])}>
                {languages.map((option, index) => {
                    return <option key={index} id='firstField'>
                    {option}</option>
                })}
            </select>
        </div>
        <div className='inline-block w-auto p-2 my-3 cursor-pointer rounded-3xl hover:bg-slate-100 dark:hover:bg-slate-700 active:bg-blue-300 dark:active:bg-blue-800 btnClass'  
        onClick={() => {changeLang();  setTimeout(() => {setLang([Lang[1], Lang[0]])}, 450)}}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{transform: 'rotate(90deg)'}} width="24" height="24" fill="none"><path fill={isDarkMode? '#ddd':'#333'} d="M7.175 4.386a.997.997 0 0 1 .552-.35c.178-.048.367-.048.544 0a.997.997 0 0 1 .555.35L11.7 7.145c.399.381.399 1 0 1.382l-.032.03a1.05 1.05 0 0 1-1.442 0L9.042 7.422V15c0 .552-.446 1-.997 1h-.09a.999.999 0 0 1-.997-1V7.42L5.773 8.558a1.05 1.05 0 0 1-1.442 0l-.032-.031a.949.949 0 0 1 0-1.382l2.876-2.758zm9.65 15.228a.997.997 0 0 1-.552.35 1.067 1.067 0 0 1-.544 0 .996.996 0 0 1-.555-.35L12.3 16.855a.949.949 0 0 1 0-1.382l.032-.03a1.05 1.05 0 0 1 1.442 0l1.185 1.135V9c0-.552.446-1 .997-1h.09c.55 0 .997.448.997 1v7.58l1.185-1.137a1.05 1.05 0 0 1 1.442 0l.032.031c.398.382.398 1 0 1.382l-2.876 2.758z"/></svg>
        </div>
        <div className='lang inline-block w-auto p-2 pr-12 cursor-pointer text-blue-700'>
            <select id="secondField" className='dark:bg-slate-800' value={Lang[1]} 
            onChange={(e) => setLang([Lang[0] , e.target.value])}>
            {languages.map((option, index) => {
                return <option key={index} id='secondField'>
                    {option}
                </option>
            })}       
            </select>
        </div>
    </div>
  )
}

export default Select