import { useState } from "react"
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
//style={{transform:`translateX(-${curr *100}%)`}}>{slides} dont know whats happening here and everything about the slide changing function....
export default function Carousel({children:slides}) {
    const [curr,setCurr]=useState(0)
    
    const prev = () => 
        setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1));

    const next = () => 
        setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1));

    const slidesArray = Array.isArray(slides) ? slides : [slides];
    return  (
        <>
        <div className="ml-8 mt-4 h-72">
        <div className="overflow-hidden relative rounded-3xl w-72">
        <div className="flex transition-transform ease-out duration-500" style={{transform:`translateX(-${curr *100}%)`}}>{slidesArray}</div>
        <div className="absolute inset-3 flex justify-end"><FaRegHeart className=" h-6 w-6 mr-2" style={{ color: "#ffffff" }}/></div> 
        <div className="absolute inset-0 flex items-center justify-between p-2">
            <button onClick={prev} className="pb-2 h-6 w-6 rounded-full bg-white/80 text-gray-800 hover:bg-white"><FaAngleLeft className="h-6 w-6"/></button>
            <button onClick={next} className="pb-2 h-6 w-6 rounded-full bg-white/80 text-gray-800 hover:bg-white"><FaAngleRight className="h-6 w-6"/></button>
        </div> 
            <div className="absolute bottom-4 left-0 right-0">
                <div className="flex items-center justify-center gap-2">
                    {slidesArray.map((_,i) =>(   
                        <div key={i} className={`transition-all w-3 h-3 rounded-full ${curr === i ? "bg-white p-1" : "bg-gray-400 opacity-50"}`}/>
                    ))}    
                </div>            
            </div> 
        </div>
        <div className="textpart mt-4">
            <div className="top line flex justify-between">
                <div className="location">Kathmandu,Nepal</div>
                <div className="ratings"> 4.88</div>
            </div>
            <p>Hosted by Jenifer <br/> Feb 1-6 <br/>$23 night</p>
        </div>
        </div> {/*ending div for card container*/}
        </>
    );  
  
}
