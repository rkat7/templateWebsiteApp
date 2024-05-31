import React from 'react';
import { Layout } from '~/layouts';

const contact: React.FC = () => {
    return (
        <Layout.Default seo={{ title: 'Get in touch' }} >

            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6 sm:py-12">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                    <h1 className="text-2xl font-bold mb-4">Get in Touch</h1>

                    <div className="mb-6">
                        <p className="text-gray-700 mb-2">Mail me here:</p>
                        <a href="mailto:kskrohith@gmail.com" className="text-blue-500 hover:underline">
                            your-email@example.com
                        </a>
                    </div>

                    <div>
                        <p className="text-gray-700 mb-2">Two clicks away from a tête-à-tête</p>
                        <a
                            href="https://calendly.com/kskrohith"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Schedule a Call
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