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
       <div className="max-w-sm w-72">
            <Carousel>
                {slides.map((s)=>(
                    <img src={s} alt='cardimages'/>
                ))}
            </Carousel>
       </div>
     );
}
 
export default Home;