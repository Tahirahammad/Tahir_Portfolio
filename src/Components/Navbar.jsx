import { Menu, X } from "lucide-react";
import { data } from "../data";
import { ModeToggle } from "./ModeToggle"; 
import { useState } from "react";


export const Navbar = ({isDark, setIsDark}) => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <div className={`w-full customContainer bg-white/10 rounded-b-lg fixed top-0 ${!isDark ? 'text-black' : 'text-white'} flex items-center justify-between max-sm:px-5 max-sm:py-3`}>
                <h1 className='text-3xl font-bold max-sm:text-xl'><a href="#home">Tahir's <span className="text-violet-500">Portfolio</span></a></h1>
                <div className="flex items-center justify-center gap-10 max-md:hidden">
                    <ul className="flex items-center text-lg font-medium">
                        {data.map((Item)=>
                            <li key={Item.label} className="ml-12 hover:text-violet-500 transition-colors duration-300"><a href={Item.link}>{Item.label}</a></li>
                        )}
                    </ul>
                    <ModeToggle isDark={isDark} setIsDark={setIsDark} />
                </div>
                <div className="hidden items-center justify-between max-md:flex gap-4 flex-row-reverse">
                    {isMenuOpen ? <X onClick={()=>setIsMenuOpen(!isMenuOpen)}></X> : <Menu onClick={()=>setIsMenuOpen(!isMenuOpen)}></Menu>}
                    <div className={`flex flex-col items-center justify-center absolute left-0 top-16 w-full backdrop-blur-md ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                        {isMenuOpen ? <ul className={`flex items-center text-lg font-medium flex-col`}>
                            {data.map((Item)=>
                                <li key={Item.label} className="ml-12 hover:text-violet-500"><a href={Item.link}>{Item.label}</a></li>
                            )}
                        </ul> : ''}
                    </div>
                    <ModeToggle isDark={isDark} setIsDark={setIsDark} />
                </div>
            </div>
        </div>
    )
}