import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
    return (  
        <>
        
        <div className="bg-neutral-100 h-auto mt-32">
        <h1 className="px-8 text-2xl pt-10 font-Cereal font-bold">Inspiration for future getaways</h1>
            <div className="mininav flex list-none justify-around px-8 mt-8 justify-items-start text-gray-700">
                <div className="font-bold h-10 border-b-2 border-black">Popular</div>
                <div>Outdoors</div>
                <div>Arts</div>
                <div>Mountain</div>
                <div>Beach</div>
                <div>Unique Stays</div>
                <div>Categories</div>
                <div>Things to do</div>
            </div>
            <hr class="h-px mx-16 bg-gray-300 border-0"/>
            <div className="textcontainer px-16 mt-6 font-Cereal text-sm grid grid-cols-6 gap-4 gap-y-5">
                <div>Canmore<br/>Pet friendly rentals</div>
                <div>Marbella<br/>House rentals</div>
                <div>Jasper<br/>Cabin rentals</div>
                <div>Dubai<br/>Family-friendly rentals</div>
                <div>Sonoma<br/>House rentals</div>
                <div>Orlando<br/>Cottage rentals</div>
                <div>Capri<br/>House rentals</div>
                <div>Waco<br/>Cabin rentals</div>
                <div>Sorrento<br/>House rentals</div>
                <div>Seaview<br/>Vavation rentals</div>
                <div>Seaview<br/>Vavation rentals</div>
                <div>Seaview<br/>Vavation rentals</div>
            </div>
            <hr class="h-px my-10 mx-16 bg-gray-300 border-0"/>
            <div className="ending grid grid-cols-3 gap-14 h-auto mx-16 font-Cereal">
                <div>Support
                    <ul className="flex-col space-y-3 text-sm mt-4">
                        <li>Help center</li>
                        <li>AirCover</li>
                        <li>Anti-discrimination</li>
                        <li>Disability support</li>
                        <li>Cancellation options</li>
                        <li>Report neighbourhood concern</li>
                    </ul>
                </div>

          <div>
            Hosting
            <ul className="flex-col space-y-3 text-sm mt-4">
              <li>Airbnb your home</li>
              <li>AirCover for Hosts</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibility</li>
              <li>Airbnb-friendly apartments</li>
              <li>Join a free Hosting class</li>
              <li>Find a co-host</li>
            </ul>
          </div>

          <div>
            Airbnb
            <ul className="flex-col space-y-3 text-sm mt-4">
              <li>Newsroom</li>
              <li>New features</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Gift cards</li>
              <li>Airbnb.org emergency stays</li>
            </ul>
          </div>
        </div>
        <hr class="h-px my-3 mx-16 bg-gray-300 border-0" />
        <div className="last flex justify-between mx-16 text-sm py-8">
          <div className="leftcontainer flex space-x-4">
            <div>© 2025 Airbnb, Inc.</div>
            <div>Terms</div>
            <div>Sitemap</div>
            <div>Privacy</div>
            <div>Your privacy Choices</div>
          </div>
          <div className="rightside flex space-x-4 justify-center self-center">
            <div>English (US)</div>
            <div>$ MXN</div>
            <div>
              <FaFacebookSquare className="w-6 h-6" />
            </div>
            <div>
              <FaTwitterSquare className="w-6 h-6" />
            </div>
            <div>
              <FaInstagram className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
