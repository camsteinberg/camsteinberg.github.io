import React from "react";

function Intro() {
    return (
        <div className ="flex items-center
        justify-center flex-col text-center pt-20
        pb-12">
            <h1 className="text-4xl md:text-7xl 
            mb-1 md:mb-3 font-bold">Cam Steinberg</h1>
            <p className="text-base md:test-xl mb-3
            font-medium">Software Engineer & Web Developer</p>
            <p className="text-sm max-w-xl mb-6
            font-bold">I am an undergraduate student at Brandeis University, who is currently pursuing a double major in Computer Science and Business. I am incredibly passionate, driven and curious about Web/Software Development, as well as Data Analytics. I am a hardworking and social person, who loves working and collaborating with others to bring creative visions to life.
            <br></br>
            The primary focus in my current individual study has recently been learning to utilize the ReactJS framework to efficiently create web apps that boast positive user experiences. I also have been perusing new experiences in processing, grooming, and presenting Big Data.</p>
        </div>
    )
}

export default Intro;
