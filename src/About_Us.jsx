import City from "./assets/cityp.jpg"
import harbor from "./assets/harbor.jpg"
import hero from "./assets/bg-hero.jpg"
const About = () => {
    return (
        <section id="about" className="lg:px-28 px-10 py-7">
            <div>
                <h2 className="text-2xl text-blue-950 font-semibold py-4 " >
                    About Atlas Properties
                </h2>
            </div>
            <div className="lg:flex overflow-hidden gap-5">
                <div className="w-90 ">
                    <p className="text-sm leading-5 text-gray-700">Atlas Properties is committed to creating exceptional residential communities that offer prime living in modern locations. We blend prime locations, high-quality materials, and innovative designs to elevate the standard of contemporary living.</p>
                    <a href="" className="p-1.5 px-6 bg-amber-600 inline-block text-white justify-center text-xs rounded mt-4">Learn More About Us</a>
                </div>
                <div className="lg:flex lg:flex-row mt-6 lg:mt-0 flex flex-col gap-5 overflow-hidden lg:gap-1 ">
                    <img src={City} alt="City" className="rounded-lg lg:w-36 lg:h-auto h-60 object-cover" />
                    <img src={hero} alt="Hero" className="lg:w-36 h-60 lg:h-auto rounded-lg object-cover" />
                    <img src={harbor} alt="Harbor" className="lg:w-36 h-60 lg:h-auto rounded-lg object-cover" />
                </div>
            </div>
        </section>
    );
}
 
export default About;