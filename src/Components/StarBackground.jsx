import { X } from "lucide-react";
import { useEffect, useState } from "react";



export const StarBackground = () => {

    const [stars, setStars] = useState([]);

    useEffect(()=>{
        generateStars();
    }, []);

    const generateStars = () => {
        const noOfStars = Math.floor(window.innerWidth * window.innerHeight)/1000;
        const newStar = [];
        for(let i=0; i<noOfStars; i++){
            newStar.push({
                id: i,
                size: Math.random() * 2 + 1,
                x :Math.random() * 100,
                y :Math.random() * 100,
                opecity: Math.random() * 0.7 + 0.3,
                animationDuration: Math.random() * 4 + 2, 
            });
        };
        setStars(newStar);
    }

    return (
        <div className="min-h-screen min-w-screen bg-[#000530] fixed -z-1 pointer-events-none inset-0">
            {stars.map((star)=>
                <div key={star.id} className="bg-white rounded-full" style={
                    {
                        width: star.size + "px",
                        height: star.size + "px",
                        position: "absolute",
                        top: star.y + "%",
                        left: star.x + "%",
                        opacity: star.opecity,
                        animationName: 'starAnimation',
                        animationDuration: star.animationDuration + 's',
                    }
                }></div>
            )}
        </div>
    );
}