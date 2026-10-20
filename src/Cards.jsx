import { TbStar, TbFileText, TbMountain } from "react-icons/tb";

const Cards = () => {
    return (
        <div className="flex lg:px-28 px-20 lg:gap-10 bg-transparent absolute top-100 flex-col lg:flex-row gap-5">
            <div className="flex flex-col bg-white items-center justify-center lg:gap-2 gap-4 lg:py-6 py-8 border-2 rounded-lg border-gray-100 p-5">
                <TbStar className="text-yellow-700 text-2xl" />
                <h3 className="font-semibold font-sans">Luxury Living</h3>
                <p className="text-center text-xs text-gray-700 leading-3 font-serif">Experience refined living with elegant spaces, premium finishes, and exceptional comfort.</p>              
            </div>
            <div className="flex flex-col bg-white items-center justify-center lg:gap-2 gap-4 lg:py-6 py-8 border-2 rounded-lg border-gray-100 p-3">
                <TbFileText className="text-blue-900 text-2xl" />
                <h3 className="font-semibold font-sans">City Life</h3>
                <p className="text-center text-xs text-gray-700 leading-3 font-serif">Discover modern homes in vibrant neighborhoods, close to business, dining, and entertainment.</p>              
            </div>
            <div className="flex flex-col bg-white items-center justify-center lg:gap-2 gap-4 lg:py-6 py-8 border-2 rounded-lg border-gray-100 p-3">
                <TbMountain className="text-blue-900 text-2xl" />
                <h3 className="font-semibold font-sans">Waterfront Homes</h3>
                <p className="text-center text-xs text-gray-700 leading-3 font-serif">Enjoy stunning waterfront views, peaceful surroundings, and a lifestyle inspired by nature.</p>              
            </div>
        </div>
    );
}

export default Cards;