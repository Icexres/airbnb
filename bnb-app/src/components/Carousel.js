export default function Carousel({children:slides}) {
    return(
        <div className="overflow-hidden relative">
        <div className="flex ">{slides}</div>
        <div className="absolute inset-0 flex items-center justify-between p-2">
            <button className="pb-2 h-7 w-7 rounded-full bg-white/80 text-gray-800 hover:bg-white"><span>&lt;</span></button>
            <button className="pb-2 h-7 w-7 rounded-full bg-white/80 text-gray-800 hover:bg-white"><span>&gt;</span></button>
        </div> 
        </div>
    );  
  
}
