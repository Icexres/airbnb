import home1_1 from '../assets/images/home1_1.jpeg';
import home1_2 from '../assets/images/home1_2.jpeg';
import home1_3 from '../assets/images/home1_3.jpeg';
import home1_4 from '../assets/images/home1_4.jpeg';
import Carousel from './Carousel';

const slides=[
    home1_1,
    home1_2,
    home1_3,
    home1_4,
]
const Home = () => {
    return ( 
        <>
       <div className="max-w-xs space-x-4 flex">
             <Carousel>
                {slides.map((s)=>(
                    <img src={s} alt='cardimages'/>
                ))}
            </Carousel>
            <Carousel>
                {slides.map((s)=>(
                    <img src={s} alt='cardimages'/>
                ))}
            </Carousel>
            <Carousel>
                {slides.map((s)=>(
                    <img src={s} alt='cardimages'/>
                ))}
            </Carousel>
            <Carousel>
                {slides.map((s)=>(
                    <img src={s} alt='cardimages'/>
                ))}
            </Carousel>
       </div>
       <div className="flex items-center justify-center flex-col pt-36 space-y-4">
        <div className='text-2xl font-Cereal font-semibold'>Continue exploring bed and breakfast</div>
        <div className='bg-black text-white flex justify-center items-center rounded-xl h-10 w-32 hover:cursor-pointer'>Show more</div>
        </div>
       </>
     );
}
 
export default Home;