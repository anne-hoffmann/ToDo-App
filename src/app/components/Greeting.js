"use client";
import React from 'react';
import Image from 'next/image';

import MorningIcon from "../icons/morning.png";
import AfternoonIcon from "../icons/sunny.png";
import EveningIcon from "../icons/evening.png";


const Greeting = () => {
    let timeOfDay;
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12) {
        timeOfDay = "Morning";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon";
    } else {
        timeOfDay = "Evening";
    }

    function Icon() {
        if (hours < 12) {
            return <Image src={MorningIcon} width={100} height={100} alt="icon"/>;
        } else if (hours >= 12 && hours < 17) {
            return <Image src={AfternoonIcon} width={100} height={100} alt="icon"/>;
        } else {
            return <Image src={EveningIcon} width={100} height={100} alt="icon"/>;
        }
    }

    return (
        <div className='bg-[#F2F2F2] flex flex-row justify-center gap-10 py-10'>
            <div>
                <Icon />
            </div>
            <h1 className='text-5xl font-serif text-left align-middle text-[#0e1111] italic text-border-[#EBA219'>Good <br /> {timeOfDay}.</h1>
        </div>
    );
};

export default Greeting;
