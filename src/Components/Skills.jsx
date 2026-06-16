import { Key } from "lucide-react";
import { skills } from "../data"
import { useState } from "react"


export const Skills = ({isDark}) => {

    const [active, setActive] = useState('All');

    const handleClick = (selected) => {
        setActive(selected);
    }

    return(
        <div className="customContainerPages flex justify-center items-center flex-col w-full gap-10 max-sm:px-5" id="skills">
            <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>My <span className="text-violet-500">Skills</span></h1>
            <div className="flex items-center gap-x-5 text-center flex-wrap justify-center gap-y-3 max-sm:gap-y-0">
                <h3 className={`cursor-pointer px-6 py-2 rounded-full text-lg hover:bg-violet-500 hover:text-white ${active === 'All' ? 'active' : null}
                ${isDark ? 'text-white' : 'text-black'}`} onClick={()=>handleClick('All')}>All</h3>
                {skills.map((skill) => (
                    <h3 key={skill.category} onClick={() => handleClick(skill.category)} className={`cursor-pointer text-lg rounded-full px-6 py-2 hover:bg-violet-500 hover:text-white ${active === skill.category ? 'active' : null}
                    ${isDark ? 'text-white' : 'text-black'}`}>{skill.category}</h3>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-4 w-full px-20 max-lg:grid-cols-2 max-lg:px-5 max-md:grid-cols-1 max-sm:gap-2">
                {skills.map((skill, key) => (
                    active === 'All' ||skill.category === active ? 
                        skill.skills.map((tech, key)=>(
                            <div key={key} className="bg-white/80 shadow-2xl w-full px-5 py-6 flex flex-col gap-5 rounded-lg max-sm:gap-3">
                                <h4 className="font-medium">{tech.name}</h4>
                                <div style={{width:`${tech.proficiency}`, height:'5px'}} className="rounded-full bg-violet-500"></div>
                                <h6 className="text-sm flex items-center justify-end">{tech.proficiency}</h6>
                            </div>
                        ))
                    : null
                ))}
            </div>
        </div>
    )
}