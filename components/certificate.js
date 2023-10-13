import React from "react";
import Container from "./container";
import Image from "next/image";
import CertificateImage from "../public/img/Hayk_Tunyan_Certificate_Master_JavaScript.jpg";

const Certificate = () => {
    
    /**
     * Functional Components.
     */

    return (
        <Container>
            <div className="grid gap-10 lg:grid-cols-3 xl:grid-cols-3">
                <div className="lg:col-span-2 xl:col-auto">
                    <div className="flex flex-col   md:flex-row  md:justify-between w-full h-full ">
                        <div className="w-auto  flex justify-center md:pr-2  hover:transform hover:scale-150 transition-transform">
                            <Image
                                src={CertificateImage}
                                width="400"
                                height="40"
                                className={"object-cover"}
                                alt="CertificateImage"
                                loading="eager"
                                placeholder="blur"
                            />
                        </div>
                        <div className="pt-5 md:pt-0  md:pl-2 flex flex-col items-center ">
                            <p className="text-2xl leading-normal">
                                Learning Path of Master JavaScript
                            </p>
                            <a
                                href="./pdf/Hayk_Tunyan_Certificate_Master_JavaScript.pdf"
                                rel="noopener"
                                download
                                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                                <span> Download Certificate  </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}




export default Certificate;