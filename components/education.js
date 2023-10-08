import React from "react";
import Container from "./container";



const Education = () => {

    /**
     * Functional Components.
     */


    return (
        <Container>
            <div className="flex flex-1">
                <div className="max-w-2xl mb-8">
                    <h1 className="text-xl font-bold leading-snug tracking-tight text-gray-800 lg:text-1xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                        National Polytechnic University of Armenia
                    </h1>
                    <div className="mt-5" />
                    <p className="text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                        <span>Degree </span> : <span> Master of Library & Information Science - MLIS </span>
                    </p>
                    <p className="text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                        <span>Start date </span> : <span> 2011 </span>
                    </p>
                    <p className="text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                        <span>End date  </span> : <span> 2017 </span>
                    </p>
                </div>

            </div>
        </Container>
    )
};


export default Education;