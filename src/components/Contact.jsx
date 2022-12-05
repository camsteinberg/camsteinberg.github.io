import React from "react";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <h2 className="flex justify-center mb-2 text-2xl ">Want to reach out? Here's how!</h2>
            <div className="flex justify-center
            items-center">
                <form
                    action="https://getform.io/f/75f73df5-79f2-4bbe-928c-dfd0b65b24fd"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                >
                    <input 
                        type="text"
                        name="name"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent
                        border-2 rounded-md focus:outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md
                        focus:outline-none"
                    ></textarea>
                    <button
                        type="button"
                        className="text-center inline-block
                        px-8 py-3 w-max text-base font-medium
                        rounded-md text-white bg-gradient-to-r
                        from-blue-500 to-pink-500 drop-shadow-md
                        hover:stroke-white">
                        Work With Me
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
