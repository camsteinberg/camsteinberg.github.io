import React from "react";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center
            items-center">
                <form
                    action="https://getform.io/slug"
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
                </form>
            </div>
        </div>
    )
}

export default Contact;