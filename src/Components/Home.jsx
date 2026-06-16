import { useState } from "react";
import { Navbar } from "./Navbar";
import { StarBackground } from "./StarBackground";
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const Home = () => {

    const [isDark,setIsDark] = useState(false);

    return(
        <div>
            {/* Navbar */}
            <Navbar isDark={isDark} setIsDark={setIsDark} />
            {/* Background Effects */}
            {isDark ? <StarBackground /> : '' }
            <Hero isDark={isDark} />
            <About isDark={isDark} />
            <Skills isDark={isDark} setIsDark={setIsDark} />
            <Projects isDark={isDark}></Projects>
            <Contact isDark={isDark}/>
            <Footer isDark={isDark} />
        </div>
    );
};