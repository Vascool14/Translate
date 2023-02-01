import '../App.css';
import Logo from './Logo.jsx';

const Menu = ({open }) => {
    return ( 
    <div id='menu' className='w-72 rounded-r-2xl flex flex-col justify-start transition-transform duration-300 linear text-left px-5 py-6 absolute top-2 left-0 bg-white dark:bg-slate-800'
    style={{transform: open ? 'translateX(-2%)' : 'translateX(-110%)',transition:'all 0.3s linear',height: 'calc(100vh - 1em)',boxShadow:'4px 0px 8px rgba(0,0,0,0.5)'}}>
        <Logo />
        <hr className='w-72 relative right-5 mt-5 border-gray-400'/>
        <a className='my-2 menuItem  text-gray-900 dark:text-gray-200' rel="noreferrer" target="_blank" href="https://translate.google.com/about/?hl=en"> About Google Translate</a>
        <p className=' text-gray-900 dark:text-gray-200 absolute right-4 top-20 mt-3 font-bold'></p>
        <hr className='w-72 relative right-5 border-gray-400'/>
        <a className='menuItem  text-gray-900 dark:text-gray-200 dark:hover' rel="noreferrer" target="_blank" href="https://policies.google.com/?hl=en">Privacy & Terms</a>
        <a className='menuItem  text-gray-900 dark:text-gray-200' rel="noreferrer" target="_blank" href="https://support.google.com/translate/?hl=en">Help</a>
        <a className='menuItem  text-gray-900 dark:text-gray-200' rel="noreferrer" target="_blank" href="https://lwindows-95.web.app">My Portfolio*</a>
        <p className='mt-auto mx-auto text-lg text-slate-500'>©2021 Vascul Andrei </p>
    </div>
    )
}

export default Menu;