const Hero = () => {
    return (
        <section className="lg:px-27 px-10 py-16">
            <h3 className="font-serif items-start w-78 tracking-wider leading-11 text-white text-4xl font- 
            text-left justify-center">Find Your Dream Home With <br /> Atlas Properties.</h3>
            <p className="w-60 text-xs text-gray-200 py-4.5">Explore modern residential communities designed for contemporary living.</p>
            <div className="flex gap-2 my-1.5">
                <a href="" className="p-1.5 px-6 bg-amber-600 inline-block text-gray-300 justify-center text-xs rounded">View Communities</a>
                <a href="" className="p-1.5 px-6 hover:bg-amber-600 bg-transparent inline-block justify-center border-2 border-amber-350 text-gray-300 text-xs rounded">Schedule Tour</a>
            </div>
        </section>
    );
}
 
export default Hero;