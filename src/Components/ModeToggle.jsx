import { useState } from "react";
import { Moon, Sun } from "lucide-react";


export const ModeToggle = ({isDark, setIsDark}) => {

    const handleMode = () => {

        const newMode = !isDark
        setIsDark(newMode);

        if(isDark){
            document.documentElement.classList.remove('dark');
        }
        else{
            document.documentElement.classList.add('dark');
        }
    }

    return (
        <div id="one" className={`${!isDark ? 'text-black' : 'text-white'}`}>
            <button className="rounded-full cursor-pointer" onClick={() => handleMode()}>{isDark ? <Moon /> : <Sun />}</button>
        </div>
    );
}