'use client'


import React, {useState} from 'react'
import { motion } from "framer-motion";

const HeroSectionWithVideo = () => {
    const features = [
        {
            name: "Trusted",
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
        },
        {
            name: "Over 50+ videos",
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5c-.078 0-.155-.005-.23-.015H4.48c-.075.01-.152.015-.23.015h-1.5A1.75 1.75 0 011 15.265V4.75zm16.5 7.385V11.01a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zm0 2.005a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .108.069.2.165.235h1.585a.25.25 0 00.25-.25v-1.11zm-15 1.11v-1.11a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.164.235H2.75a.25.25 0 01-.25-.25zm2-4.24v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V11.01a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm13-2.005V7.88a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zM4.25 7.63a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V7.88a.25.25 0 01.25-.25h1.5zm0-3.13a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5zm11.5 1.625a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5zm-9 3.125a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
                </svg>
        },
        {
            name: "400 ratings",
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
        }
    ]

    const [isVideoPoppedUp, setVideoPopUp] = useState(false)

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >
            <motion.div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 xl:flex"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
                    <motion.div className="flex flex-wrap items-center justify-center gap-6 xl:justify-start">
                        {
                            features.map((item, idx) => (
                                <motion.div 
                                    key={idx} 
                                    className="flex items-center gap-x-2 text-gray-500 text-sm"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.icon}
                                    {item.name}
                                </motion.div>
                            ))
                        }
                    </motion.div>
                    <motion.h1 
                        className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl"
                        whileHover={{ color: "#4A90E2" }}
                    >
                        Explore in-demand careers and develop cutting edge skills
                    </motion.h1>
                    <motion.p 
                        className="max-w-xl mx-auto xl:mx-0"
                        whileHover={{ color: "#4A90E2" }}
                    >
                        Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                    </motion.p>
                    <motion.div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
                        <motion.a 
                            href="/" 
                            className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Browse courses
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-7.707a1 1 0 011.414 0L10 10.586V6a1 1 0 112 0v4.586l.293-.293a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </motion.a>
                        <motion.button
                            className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 duration-150 hover:text-gray-900 font-medium rounded-lg md:inline-flex"
                            onClick={() => setVideoPopUp(true)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M9.5 4.75A1.75 1.75 0 0111.25 6.5v11a1.75 1.75 0 01-2.75 1.5l-5.25-3.5a1.75 1.75 0 010-3l5.25-3.5A1.75 1.75 0 019.5 4.75zm5 11.75v-11a1.75 1.75 0 00-2.75-1.5l-5.25 3.5a1.75 1.75 0 000 3l5.25 3.5a1.75 1.75 0 002.75-1.5zM20.5 12a1.75 1.75 0 01-1.75 1.75h-4.75A1.75 1.75 0 0112 12a1.75 1.75 0 011.75-1.75h4.75A1.75 1.75 0 0120.5 12zm-2-7.75a1.75 1.75 0 010 3.5h-3.5a1.75 1.75 0 010-3.5h3.5zM6.25 8a1.75 1.75 0 011.75 1.75v5.5a1.75 1.75 0 01-3.5 0v-5.5A1.75 1.75 0 016.25 8zM14.75 8a1.75 1.75 0 011.75 1.75v5.5a1.75 1.75 0 01-3.5 0v-5.5A1.75 1.75 0 0114.75 8z" clipRule="evenodd" />
                            </svg>
                            Watch video
                        </motion.button>
                    </motion.div>
                </div>
                <motion.div className="flex-1 mt-10 xl:mt-0" whileHover={{ scale: 1.05 }}>
                    <div className="relative">
                        <motion.img 
                            src="https://res.cloudinary.com/dj7nomqfd/image/upload/v1689756090/GG/production_ID_476_low_nfhbmh.jpg" 
                            className="w-full rounded-lg shadow-lg"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        />
                        <button 
                            className="absolute inset-0 w-full h-full flex items-center justify-center text-white text-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                            onClick={() => setVideoPopUp(true)}
                        >
                            <motion.svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                className="w-12 h-12"
                                whileHover={{ scale: 1.2 }}
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M14.752 11.168l-3.197 1.684a1 1 0 01-1.555-.832V9.98a1 1 0 011.555-.832l3.197 1.684a1 1 0 010 1.68z"
                                />
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M12 14.724V17m-7-7a9 9 0 1118 0 9 9 0 01-18 0z"
                                />
                            </motion.svg>
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            {isVideoPoppedUp && (
                <motion.div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div 
                        className="bg-white p-4 rounded-lg shadow-lg relative"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                    >
                        <button 
                            className="absolute top-2 right-2 text-gray-700"
                            onClick={() => setVideoPopUp(false)}
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                className="w-6 h-6"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe 
                                src="https://www.youtube.com/embed/ScMzIvxBSi4" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen 
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </motion.section>
    )
}

export default HeroSectionWithVideo
