import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

import img_mention from "../public/contact/mention.svg";
import img_location_pin from "../public/contact/location_pin.svg";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: ""
    });

    const [formState, setFormState] = useState({
        success: false,
        error: false,
        loading: false
    });

    const HandleSubmit = async (e) => {
        e.preventDefault();
        setFormState({ success: false, error: false, loading: true });
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.status === 200) {
                setFormState({ success: true, error: false, loading: false });
                setFormData({ fullName: "", email: "", subject: "", message: "" });
            }
        } catch (error) {
            console.log("a");
            setFormState({ success: false, error: true, loading: false });
        }

        setTimeout(() => {
            setFormState({ success: false, error: false, loading: false });
        }, 3000);
    };

    return (
        <>
            <Head>
                <title>Contact - John Olatubosun</title>
            </Head>
            <div>
                <section>
                    <div>
                        <h1 className="text-4xl text-center font-semibold text-primary tracking-wider self-center">
                            <span className="text-gray-700">Contact</span> me
                        </h1>
                        <p className="text-center text-xl">get in touch...</p>

                        
                        {/* Cards */}
                        <div className="mx-10 lg:mx-32 md:mb-8 md:flex md:justify-center shadow-md py-8 mt-8">
                            <div className="sm:inline-flex sm:items-center mx-4 space-x-4 mb-10 md:mb-0">
                                <div className="w-2/12 sm:w-1/12 ml-2">
                                    <Image alt="email" src={img_mention} priority />
                                </div>

                                <div>
                                    <h2 className="text-primary text-medium text-lg">Email</h2>
                                    <p className="text-gray-700 text-semibold text-lg">toluolatubosun@gmail.com</p>
                                </div>
                            </div>

                            <div className="sm:inline-flex sm:items-center mx-4 space-x-4 mb-2 md:mb-0">
                                <div className="w-2/12 sm:w-1/12 ml-2">
                                    <Image alt="location_pin" src={img_location_pin} priority />
                                </div>

                                <div>
                                    <h2 className="text-primary text-medium text-lg">Location</h2>
                                    <p className="text-gray-700 text-semibold text-lg">Lagos / Nigeria</p>
                                </div>
                            </div>
                        </div>
                        

                        {/* Contact Form */}
                        <div className="mx-10 lg:mx-32">
                            <form onSubmit={HandleSubmit}>
                                <div className="md:grid md:grid-cols-2 gap-x-8">
                                    <div className="mt-4">
                                        <label className="uppercase block text-sm font-semibold text-gray-700">Full Name</label>
                                        <div className="mt-1">
                                            <input
                                                required
                                                name="fullName"
                                                type="text"
                                                value={formData.fullName}
                                                onChange={(e) => {
                                                    setFormData({
                                                        ...formData,
                                                        fullName: e.target.value
                                                    });
                                                }}
                                                className="w-full focus:border-primary rounded focus:ring focus:ring-primary focus:ring-opacity-50"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <label className="uppercase block text-sm font-semibold text-gray-700">Email</label>
                                        <div className="mt-1">
                                            <input
                                                required
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => {
                                                    setFormData({
                                                        ...formData,
                                                        email: e.target.value
                                                    });
                                                }}
                                                className="w-full focus:border-primary rounded focus:ring focus:ring-primary focus:ring-opacity-50"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4 md:col-span-2">
                                        <label className="uppercase block text-sm font-semibold text-gray-700">Subject</label>
                                        <div className="mt-1">
                                            <input
                                                required
                                                name="subject"
                                                type="text"
                                                value={formData.subject}
                                                onChange={(e) => {
                                                    setFormData({
                                                        ...formData,
                                                        subject: e.target.value
                                                    });
                                                }}
                                                className="w-full focus:border-primary rounded focus:ring focus:ring-primary focus:ring-opacity-50"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4 md:col-span-2">
                                        <label className="uppercase block text-sm font-semibold text-gray-700">Message</label>
                                        <div className="mt-1">
                                            <textarea
                                                required
                                                name="message"
                                                type="text"
                                                value={formData.message}
                                                onChange={(e) => {
                                                    setFormData({
                                                        ...formData,
                                                        message: e.target.value
                                                    });
                                                }}
                                                className="w-full h-28 focus:border-primary rounded focus:ring focus:ring-primary focus:ring-opacity-50"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 md:mt-6 flex justify-center">
                                    <button type="submit" className="bg-gradient-to-br from-primary to-blue-400  text-xl text-white font-semibold py-4 px-6 rounded inline-flex space-x-4 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <span className="tracking-wide">Submit</span>
                                    </button>
                                </div>

                                {formState.loading && (
                                    <div className="mt-6 bg-primary rounded-lg text-center py-4 px-4 text-xl text-white mb-3" role="alert">
                                        Processing... Please Wait
                                    </div>
                                )}

                                {formState.error && (
                                    <div className="mt-6 bg-red-500 rounded-lg text-center py-4 px-4 text-xl text-white mb-3" role="alert">
                                        An Error Occured, Try Again.
                                    </div>
                                )}

                                {formState.success && (
                                    <div className="mt-6 bg-green-500 rounded-lg text-center py-4 px-4 text-xl text-white mb-3" role="alert">
                                        Message Sent
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
