import Image from "next/image";

export const ContactSection = () => {
    return (
        <div className="flex flex-col md:flex-row bg-gray-900 text-white items-center rounded-lg relative">
            <div id="cuadradoGris" className="w-full md:w-[60%] md:px-10">
                <div className="p-6">
                    <h2 className="text-4xl font-bold mb-4">Your Source for Green Energy Updates</h2>
                    <p className="text-lg mb-6">
                        Stay in the loop with our Green Horizon newsletter, where we deliver bite-sized insights into the latest green energy solutions.
                    </p>
                    <div className="flex">
                        <input 
                            type="email" 
                            placeholder="Your e-mail..." 
                            className="p-3 rounded-l-lg text-gray-900 w-full max-w-xs"
                        />
                        <button className="bg-teal-500 text-white p-3 rounded-r-lg hover:bg-teal-600 transition duration-300">
                            Get in touch
                        </button>
                    </div>
                </div>
            </div>
            <div id="izq" className="relative w-full md:w-[40%] flex items-center justify-center">
                <div className="absolute right-0 top-0 bg-orange-400 h-full w-[50%]"></div>
                <div className="relative z-10">
                    <div className="w-80 h-80 rounded-full overflow-hidden">
                        <Image
                            className="object-cover w-full h-full"
                            src="https://firebasestorage.googleapis.com/v0/b/almas-verticales.appspot.com/o/HPparaguay.webp?alt=media&token=690ca5ca-1869-44ee-afc2-2ae8b3cd6380"
                            alt="imagen"
                            width={350}
                            height={270}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
