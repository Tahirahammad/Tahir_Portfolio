import { GithubIcon, Navigation, Share } from "lucide-react";
import { useEffect, useState } from "react";



export const Projects = ({isDark}) => {

    const [repos, setRepos] = useState([]);

    const fetchData = async () =>{
        const URL = 'https://api.github.com/users/TahirAhammad/repos';
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    }

    useEffect(()=>{
        fetchData()
        .then(data =>setRepos(data))
        .catch(error => console.error('Error fetching data'));
    }, []);

    return(
        <div className={`customContainerPages flex justify-center items-center flex-col gap-10 ${isDark ? 'text-white' : 'text-black'} max-sm:px-5 max-sm:gap-7`} id="projects">
            <h1 className={`text-3xl font-bold`}>My <span className="text-violet-500">Projects</span></h1>
            <p className="text-lg min-md:w-2xl text-center max-sm:text-sm">Here are some of my past experinces you can go through them. Every project is carefully crafted with the attention to the details. You can have a overview on my way of creation if you can go through those projects.</p>
            <div className="grid grid-cols-3 w-full px-20 gap-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:px-5 max-sm:gap-1">
                {repos.map((repo)=>(
                    <div key={repo.id} className={`shadow-2xl px-5 py-6 text-lg flex flex-col rounded-md gap-5 max-sm:gap-3 ${isDark ? 'bg-black/25' : null}`}>
                        <h3 className="font-semibold">{repo.name}</h3>
                        <a href={repo.homepage} target="_blank"><Navigation /></a>
                        <a href={repo.html_url} target="_blank"><GithubIcon /></a>
                    </div>
                ))}
            </div>
            <a href="https://github.com/TahirAhammad" target="_blank"><button className="px-10 py-5 bg-violet-500 rounded-full mt-5 text-white cursor-pointer">Visit My Git</button></a>
        </div>
    )
}