import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";
// portfelio
import locatravelImg from "../public/img/porftelio/locatravel.png";
import mylotImg from "../public/img/porftelio/mylot.png";
import saynine from "../public/img/porftelio/SayNine.webp"
import optifyImg from "../public/img/porftelio/optify.png";
import fleetforest from "../public/img/porftelio/fleetforest.png";
import starfish from "../public/img/porftelio/starfish.png";
import teraplake from "../public/img/porftelio/theraplake.png";
import teraplakeApp from "../public/img/porftelio/TherapyLake-app.webp";
import deepwhite from "../public/img/porftelio/deepwhite.png";
import hantec from "../public/img/porftelio/hantec.png";
import Link from "next/link";


const Testimonials = () => {

  /**
   * Function Component.
   */

  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal">
              Loca Travel Company is a full service travel provider to all tourism destinations worldwide
            </p>
            <Avatar
              image={locatravelImg}
              name="LocaTravel"
              path={"View Website"}
              url={"https://locatravel.am/"}
            />
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal">
              Therapylake is a doctor service platform with a planned service system
            </p>
            <Avatar
              image={teraplake}
              name="Therapylake"
              path={"View Website"}
              url={"https://dev.therapylake.com/login"}
            />
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal">
              Saynine is an Off-Page SEO agency that helps websites reach great traffic through SAAS backlinks.
            </p>
            <Avatar
              image={saynine}
              name="Saynine"
              path={"View Website"}
              url={"https://saynine-landing.vercel.app/"}
            />
          </div>
        </div>
      </div>
      <div className="mt-5" />
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal">
              Optify offers Off-Page automation tools for SEO agencies and experts
            </p>
            <Avatar
              image={optifyImg}
              name="Optify"
              path={"View Website"}
              url={"https://optify.netlify.app/"}
            />
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Fleetforest is a great system for running a logistics company
            </p>
            <Avatar
              image={fleetforest}
              name="FleetForest"
              path={"View Website"}
              url={"https://dev.optify.ai/"}
            />
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Starfish is a great admin system tool for truck centers.
            </p>
            <Avatar
              image={starfish}
              name="Starfish"
              path={"View Website"}
              url={"https://starfish.eachbase.com/"}
            />
          </div>
        </div>
      </div>
      <div className="mt-5" />
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal">
              An app for doctors from the Therapylake system
            </p>
            <Avatar
              image={teraplakeApp}
              name="Therapylake "
              path={"Download from the App Store"}
              url={"https://apps.apple.com/us/app/therapylake/id6450555754"}
            />
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              DeepWhite is an asset management and consulting company
            </p>
            <Avatar
              image={deepwhite}
              name="Deepwhite"
              path={"View Website"}
              url={"https://deepwhite.am/"}
            />
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Hantec Group's world-class trading platform for forex, indices, and commodities.
            </p>
            <Avatar
              image={hantec}
              name="Hantec"
              path={"View Website"}
              url={"https://hantec-financial.vercel.app/"}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-lg w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">
          <Link href={`${props.url}`} target="_blank">
            {props.path}
          </Link>
        </div>
      </div>
    </div>
  );
}


export default Testimonials;