import { FaMapMarkerAlt, FaAward, FaLightbulb } from "react-icons/fa";
const Footer = () => {
    return (
        

// Inside your component:
<div className="flex py-7 lg:px-28 px-10 items-center justify-between">
    {/* Feature 1 */}
    <div className="flex items-center gap-3">
        <div className="text-blue-900 text-2xl">
            <FaMapMarkerAlt />
        </div>
        <div>
            <h4 className="font-semibold text-gray-800 text-sm">Prime Locations</h4>
            <p className="text-gray-500 text-xs">Luxury Locations</p>
        </div>
    </div>

    {/* Feature 2 */}
    <div className="flex items-center gap-3">
        <div className="text-blue-900 text-2xl">
            <FaAward />
        </div>
        <div>
            <h4 className="font-semibold text-gray-800 text-sm">High-End Quality</h4>
            <p className="text-gray-500 text-xs">And Superior Living</p>
        </div>
    </div>

    {/* Feature 3 */}
    <div className="flex items-center gap-3">
        <div className="text-blue-900 text-2xl">
            <FaLightbulb />
        </div>
        <div>
            <h4 className="font-semibold text-gray-800 text-sm">Innovative Design</h4>
            <p className="text-gray-500 text-xs">Modern Architecture</p>
        </div>
    </div>
</div>
    );
}
 
export default Footer;