import clsx from "clsx";
import React from "react";

export const Meteors = ({ number }) => {
    const meteors = new Array(number || 20).fill(true);

    const getRandomPositionInSteps = (min, max) => {
        const randomValue = Math.floor(Math.random() * (max - min + 1) + min);
        return Math.round(randomValue / 10) * 10;
    };

    return (
        <>
        {meteors.map((el, idx) => (
            <span
            key={"meteor" + idx}
            className={clsx(
                "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
                "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
            )}
            style={{
                top: getRandomPositionInSteps(0, 100) + "vh",
                left: Math.floor(Math.random() * (400 - -400) + -900) + "px",
                animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
                animationDuration: Math.floor(Math.random() * (20 - 10) + 10) + "s",
            }}
            ></span>
        ))}
        </>
    );
};
