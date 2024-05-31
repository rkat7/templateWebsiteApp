import React from 'react';
import { Layout } from '~/layouts';

const contact: React.FC = () => {
    return (
        <Layout.Default seo={{ title: 'Get in touch' }} >
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6 sm:py-12">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                    <h1 className="text-2xl font-bold mb-6">Get in Touch</h1>

                    <div className="mb-4">
                        <p className="text-gray-700 mb-2">I respond quick to emails</p>
                        <a href="mailto:kskrohith@gmail.com">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                                Email Me
                            </button>
                        </a>
                    </div>

                    <div>
                        <p className="text-gray-700 mb-2">2 clicks away from a tête-à-tête</p>
                        <a href="https://calendly.com/kskrohith" target="_blank" rel="noopener noreferrer">
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
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
