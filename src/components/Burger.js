import '../App.css';

const Burger = ({ open, setOpen, isDarkMode }) => {
    return (
    <div className='absolute top-3 left-3 flex flex-col justify-around w-8 h-8 rounded  bg-transparent border-none cursor-pointer p-0 z-50 focus:outline-none' onClick={() => setOpen(!open)}
    style={{ transform: open ? 'translateX(14rem) translateY(1.3rem)':'',transition: 'all 0.3s linear'}}>
        <div className='burger' style={{transform: open ? 'rotate(45deg)':'rotate(0)',
            boxShadow: open? 'none':isDarkMode? 'none':'0 0 3px #222',
            backgroundColor: isDarkMode? open? '#bbb':'#fff':  open? '#333':'#fff'}}/>
        <div className='burger'
            style={{transform: open ? 'translateX(-14rem) translateY(-1.3rem)' : 'translateX(0)',
            opacity: open ? '0' : '1', boxShadow: open? 'none': isDarkMode? 'none':'0 0 3px #222',
            backgroundColor: open? '#000':'#fff'}}/>
        <div className='burger' style={{transform: open ? 'rotate(-45deg)':'rotate(0)',
            boxShadow: open? 'none': isDarkMode? 'none':'0 0 3px #222',
            backgroundColor: isDarkMode? open? '#bbb':'#fff':  open? '#333':'#fff'}}/>
    </div>
    )
}

export default Burger;