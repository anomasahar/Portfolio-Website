"use client";

import React, { useRef, useState } from 'react';
import github from '@/assets/github-icon.svg';
import linkedIn from '@/assets/linkedin-icon.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function EmailSection() {
    // Define the formRef type as a reference to an HTMLFormElement
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false); // State for loading

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true); // Set loading to true

        // Simulate a network request with a timeout
        setTimeout(() => {
            // Reset the form fields
            if (formRef.current) {
                formRef.current.reset();
            }
            setLoading(false); // Reset loading state
        }, 2000); // Adjust the timeout duration as needed
    };

    return (
        <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/anomasahar">
                        <Image src={github} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/anoma-sahar/">
                        <Image src={linkedIn} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
            <div>
                <form ref={formRef} className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="jacob@google.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">Subject</label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Just saying hi"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <button 
                        type="submit" 
                        className={`bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full flex items-center justify-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading} // Disable button while loading
                    >
                        {loading ? (
                            <>
                                <span className="loader mr-2"></span> {/* Optional: Add a loading spinner */}
                                Loading...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}
