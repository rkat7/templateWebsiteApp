import React from 'react';

const contact: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6 sm:py-12">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-4">Get in Touch</h1>

                <div className="mb-6">
                    <p className="text-gray-700 mb-2">Mail me here:</p>
                    <a href="mailto:your-email@example.com" className="text-blue-500 hover:underline">
                        your-email@example.com
                    </a>
                </div>

                <div>
                    <p className="text-gray-700 mb-2">Setup a Calendly call here:</p>
                    <a
                        href="https://calendly.com/your-calendly-url"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Schedule a Call
                    </a>
                </div>
            </div>
        </div>
    );
}

export default contact;
