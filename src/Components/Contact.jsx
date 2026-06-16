import { Locate, LocateIcon, LocationEditIcon, Mail, MapPin, Phone, Pin, Pointer, Share, } from "lucide-react";
import { contact_info } from "../data"


export const Contact = ({isDark}) =>{

    const con = 'Phone';

    return(
        <div className={`customContainerPages flex justify-center items-center flex-col gap-10 ${isDark ? 'text-white' : 'text-black'} max-sm:px-5`} id="contact">
            <h1 className="text-3xl font-bold">Contact <span className="text-violet-500">Me</span></h1>
            <p className="text-lg min-md:w-2xl text-center max-sm:text-sm">You can contact me from any of the sources. I will be active in any of the following sources.</p>
            <div className="flex flex-1 items-center justify-between gap-15 w-full px-10 max-lg:flex-col max-sm:px-2">
                <div className="w-full flex flex-col space-y-10 shadow-sm shadow-white px-4 py-5 rounded-lg max-sm:space-y-5">
                    <h2 className="text-2xl font-bold text-center">Contact Information</h2>
                    <ul className="flex flex-col gap-5 mt-5">
                        {contact_info.map((item)=>(
                            item.name === 'Email' || item.name === 'Phone' || item.name === 'Location' ? <li className="text-md font-semibold flex items-center gap-5 flex-wrap">{item.image}<div className="flex flex-col"><span>{item.name}</span><span>{item.value}</span></div></li> : null
                        ))}
                    </ul>
                    <h6 className="text-center font-medium">Connect With Me</h6>
                    <ul className="flex items-center justify-center gap-x-5">
                        {contact_info.map((item, key)=>(
                            item.name === 'LinkedIn' || item.name === 'Twitter' || item.name === 'Instagram' || item.name === 'Facebook' ? <li><a href={item.value}>{item.image}</a></li> : null
                        ))}
                    </ul>
                </div>
                <div className="w-full flex flex-col shadow-sm px-4 py-5 rounded-lg justify-center items-center bg-gray-900 text-white gap-2 max-sm:gap-1">
                    <h2 className="text-2xl font-bold">Send a Message</h2>
                    <h6 className="mt-5">Your Name</h6>
                    <input type="text" className="px-3 py-3 bg-black outline-none w-full border-white border-1" placeholder="ex: Teja" />
                    <h6 className="mt-5">Your Mail</h6>
                    <input type="text" className="px-3 py-3 bg-black outline-none w-full border-white border-1" placeholder="ex: example@gmail.com" />
                    <h6 className="mt-5">Your Message</h6>
                    <textarea type="text" className="px-7 py-5 bg-black outline-none w-full border-white border-1" placeholder="Type your msg here and I will reach out to you....." />
                    <button className="bg-violet-500 text-white w-full rounded-full py-2 mt-5">Submit Message </button>
                </div>
            </div>
        </div>
    )
}