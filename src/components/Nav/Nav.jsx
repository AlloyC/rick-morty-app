import logo from '../../assets/Rick.jpeg';

export const Nav = () => {
    return (
        
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a className="flex items-center">
                    <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Rick and Morty APP{' '}
                    </span>
                </a>
            </div>
        </nav>
    )
}

export default Nav
