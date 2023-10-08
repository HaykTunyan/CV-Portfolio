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
            <div className="grid gap-10 lg:grid-cols-3 xl:grid-cols-4">
                <div className="lg:col-span-2 xl:col-auto">
                    <div className="flex justify-between w-full h-full ">
                        <div className="w-56 pr-2">
                            <Image
                                src={CertificateImage}
                                width="200"
                                height="20"
                                className={"object-cover"}
                                alt="CertificateImage"
                                loading="eager"
                                placeholder="blur"
                            />
                        </div>
                        <div className="pl-2">
                            <p className="text-2xl leading-normal">
                                Learning Path of Master JavaScript
                            </p>
                            <a
                                href="../public/pdf/Hayk_Tunyan_Certificate_Master_JavaScript.pdf"
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