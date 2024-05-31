import React from 'react';
import { Layout } from '~/layouts';

const contact: React.FC = () => {
    return (
        <Layout.Default seo={{ title: 'Get in touch' }} >
            <div className="relative flex flex-col items-center justify-center min-h-screen py-12">
                <div className="relative p-8 rounded-lg max-w-md w-full text-center z-10">
                    <h1 className="text-3xl font-bold mb-6 text-white-800">Get in Touch</h1>

                    <div className="mb-8">
                        <p className="text-lg text-white-700 mb-4">I respond quickly to emails</p>
                        <a href="mailto:kskrohith@gmail.com">
                            <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg px-6 py-3 rounded-full hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                                Email Me
                            </button>
                        </a>
                    </div>

                    <div>
                        <p className="text-lg text-white-700 mb-4">Two clicks away from a tête-à-tête</p>
                        <a href="https://calendly.com/kskrohith" target="_blank" rel="noopener noreferrer">
                            <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg px-6 py-3 rounded-full hover:from-green-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-green-300">
                                Schedule a Call
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </Layout.Default >
    );
}

export default contact;


//className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-300"

//className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded hover:from-green-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-green-300"