import { talents } from "../data";



export const About = ({isDark}) => {
    return(
        <div id="about" className="customContainerPages flex justify-center items-center flex-col gap-10 max-sm:px-5 max-sm:py-3">
            <h2 className={`${isDark ? 'text-white' : 'text-black'} text-3xl font-bold`}>About <span className="text-violet-500">Me</span></h2>
            <div className="flex justify-center items-center gap-5 max-lg:flex-col space-y-10">
                <div className={`flex items-center justify-center flex-col gap-7 text-center ${isDark ? 'text-white' : 'text-black'}`}>
                    <h3 className={`text-2xl font-medium max-sm:text-xl`}>Passionate to Cyber Security Field</h3>
                    <p className="min-lg:w-sm">I have a strong interest in cybersecurity, especially in understanding how attacks and defenses work practically.</p>
                    <p className="min-lg:w-sm">I enjoy exploring tools, network security, and ethical hacking concepts to build real-world protection skills. 🔐💻</p>
                    <div className="flex gap-x-3">
                        <button className="px-8 py-1 rounded-full bg-violet-500 text-white max-sm:px-5">Get In Touch</button>
                        <button className={`px-8 py-1 rounded-full border-1 ${isDark ? 'border-violet-500' : ''} max-sm:px-5`}>Download Resume</button>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col gap-7">
                    {talents.map((talent)=>
                        <div key={talent.name} className={`bg-black/60 px-10 py-4 rounded-lg text-white`}>
                            <h4 className="text-xl font-bold">{talent.name}</h4>
                            <p className="max-w-[300px]">{talent.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
