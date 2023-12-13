import React from "react";

const Today = () => {
    const getToday = new Date().toLocaleDateString("en-gb", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    const weekday = new Date().getDay();
    const dayNames = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const getWeekday = (dayNames[weekday])




    return <div className="flex flex-row justify-start items-end rounded-xl">
        <h2 className="text-[#0e1111] text-2xl font-mono font-semibold ">{getWeekday},</h2>
        <h3 className="text-[#0e1111] text-1xl">{getToday}</h3>
        </div>
};

export default Today;