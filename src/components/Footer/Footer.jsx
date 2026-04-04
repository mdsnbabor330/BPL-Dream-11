import React from 'react';
import footerLogo from '../../assets/logo-footer.png';
import bgShadow from '../../assets/bg-shadow.png';

const Footer = () => {
    return (
        <div className="relative mt-80">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-7xl z-10">
                <div className="p-4 bg-white/15 backdrop-blur-3xl rounded-4xl border border-white/20 shadow-2xl">
                    <div
                        className="bg-white rounded-3xl py-16 px-6 text-center flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center overflow-hidden relative"
                        style={{ backgroundImage: `url(${bgShadow})` }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#131313] mb-4">
                            Subscribe to our Newsletter
                        </h2>
                        <p className="text-[#131313]/70 text-lg mb-8 max-w-2xl font-medium">
                            Get the latest updates and news right in your inbox!
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 w-full max-w-xl">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full bg-white text-gray-800 h-14 rounded-xl border-gray-200 text-base px-6 shadow-sm"
                            />
                            <button className="btn h-14 px-10 rounded-xl bg-linear-to-r from-pink-400 via-orange-400 to-yellow-400 border-none text-[#131313] font-bold text-base  shadow-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <footer className="bg-[#06091a] pt-60 pb-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    {/* Logo */}
                    <div className="mb-16">
                        <img src={footerLogo} alt="CRICKET" className="h-32 w-auto opacity-90 transition-opacity hover:opacity-100" />
                    </div>

                    {/* Footer Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-16 lg:gap-x-24 w-full text-white/70">
                        {/* About Us */}
                        <div className="space-y-4">
                            <h3 className="text-white text-lg font-bold">About Us</h3>
                            <p className="leading-relaxed font-normal max-w-xs text-sm lg:text-base">
                                We are a passionate team dedicated to providing the best services to our customers.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h3 className="text-white text-lg font-bold">Quick Links</h3>
                            <ul className="space-y-3 text-sm lg:text-base font-normal">
                                <li><a href="#" className="hover:text-white transition-colors duration-200 block">• Home</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200 block">• Services</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200 block">• About</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200 block">• Contact</a></li>
                            </ul>
                        </div>

                        {/* Subscribe Footer Form */}
                        <div className="space-y-4">
                            <h3 className="text-white text-lg font-bold">Subscribe</h3>
                            <p className="leading-relaxed font-normal text-sm lg:text-base mb-2">
                                Subscribe to our newsletter for the latest updates.
                            </p>
                            <div className="flex flex-col sm:flex-row w-full overflow-hidden rounded-xl">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input rounded-none w-full bg-white text-gray-800 h-12 focus:outline-none text-base border-none"
                                />
                                <button className="btn rounded-none bg-gradient-to-r from-orange-400 to-pink-400 border-none text-[#131313] h-12 px-6 hover:opacity-90 font-bold transition-all duration-300">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="w-full mt-16 pt-8 border-t border-white/10 text-center">
                        <p className="text-white/40 text-sm font-normal">
                            @2024 Your Company All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

