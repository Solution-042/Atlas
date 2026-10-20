import { FaBuilding, FaShip } from "react-icons/fa";
import City from "./assets/cityp.jpg"
import harbor from "./assets/harbor.jpg"
const Exp = () => {
    return (
        <section id="com" className="pt-100 lg:pt-0 lg:px-28 px-10">
            <div className="justify-between pt-39 flex py-3">
                <h2 className="lg:text-2xl text-xl text-blue-950 font-medium ">Explore Our Communities</h2>
                <a href="" className="border-gray-200 border-2 text-xs lg:py-2 py-2 lg:px-4 px-3 rounded">View All Communities</a>
            </div>
            <div className="lg:flex lg:flex-row lg:gap-15 flex flex-col gap-5">
                <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
                    <img src={City} alt="image" />
                    <div className="flex justify-between p-3">
                        <div>
                            <h3 className="text-lg text-blue-950">City Point</h3>
                            <p className="text-gray-600 leading-4 text-xs">Urban Sophistication</p>
                        </div>
                        <div className="text-blue-950 text-3xl pt-3 pr-6">
                            <FaBuilding />
                        </div>
                    </div>
                </div>
                <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
                    <img src={harbor} alt="image" />
                    <div className="flex justify-between p-3">
                        <div>
                            <h3 className="text-lg text-blue-950">Harborview</h3>
                            <p className="text-gray-600 leading-4 text-xs">Waterside Elegance</p>
                        </div>
                        <div className="text-blue-950 text-3xl pt-3 pr-6">
                            <FaShip />
                        </div>
                    </div>

                </div>
            </div>
            <div className="text-center py-6">
                <a href="" className="p-1.5 px-6 bg-amber-600 inline-block text-white justify-center text-xs rounded">Learn All Developments</a>
            </div>
        </section>
    );
}
export default Exp;