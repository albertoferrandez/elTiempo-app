import { FaGithub } from "react-icons/fa";

const Header = () => {
    return (
        <footer className='w-4/5 md:w-3/5 pt-[10vh]'>
            <div className='flex justify-between items-center'>
                <div><h1>Hecho por: ALBERTO FERRANDEZ MIRALLES</h1></div>
                <div><a href="https://github.com/albertoferrandez" target="_blank"><FaGithub size={20}/></a></div>
            </div>
        </footer>
    )
}

export default Header