"use client"

import { useCard } from "@/Context/Context"
import React, { useState } from "react"
import { JSX } from "react/jsx-runtime"
import { motion } from "motion/react"

export default function CreditCard(): JSX.Element {

    const { CardHolder, maskedNumber, month, year, isFront, setIsFront } = useCard()

    return (
        <motion.div
            onClick={() => setIsFront(!isFront)}
            whileTap={{
                y: [0, -60, 0],
                transition: { duration: 0.5, ease: "easeInOut" }
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`
        cursor-pointer rounded-2xl relative
        shadow-[0_20px_50px_rgba(0,0,0,0.3),0_10px_20px_rgba(0,0,0,0.2)]
        flex flex-col
        w-[300px] h-[178px]
        sm:w-[420px] sm:h-[245px]
      `}
            style={{ zIndex: isFront ? 50 : 10 }}
        >
            <img
                draggable="false"
                className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                src="/3.jpeg"
                alt=""
            />
            <div className="bg-black/10 z-10 absolute rounded-2xl h-full w-full inset-0" />

            <div className="absolute z-10 inset-0 flex flex-col justify-between p-4 sm:p-6">

                <div className="flex justify-between items-center">
                    <img draggable="false" src="chip.png" className="h-8 sm:h-11" alt="" />
                    <img draggable="false" src="visa.png" className="h-8 sm:h-11" alt="" />
                </div>

                <div className="flex justify-center items-center">
                    <div className="font-mono font-medium text-white flex tracking-widest text-base sm:text-2xl">
                        {maskedNumber?.split("").map((digit, index) => (
                            <motion.span
                                key={index + digit}
                                initial={{ y: -15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                style={{
                                    width: digit === " " ? "0.5em" : "auto",
                                    textShadow: "2px 1px gray"
                                }}
                            >
                                {digit}
                            </motion.span>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                        <span className="text-white/70 text-[10px] sm:text-xs uppercase tracking-wider mb-0.5">
                            Card Holder
                        </span>
                        <span className="font-mono font-medium tracking-widest text-white text-xs sm:text-base leading-tight">
                            {(() => {
                                const name = CardHolder.toUpperCase().trim() || "FULL NAME"
                                if (name.length <= 20) return name
                                const parts = name.split(" ").filter(p => p.length > 0)
                                if (parts.length === 1) return name.slice(0, 20)
                                let abbreviated = name
                                for (let i = 0; i < parts.length - 1; i++) {
                                    if (abbreviated.length <= 20) break
                                    parts[i] = parts[i][0] + "."
                                    abbreviated = parts.join(" ")
                                }
                                return abbreviated.length > 20 ? abbreviated.slice(0, 20) : abbreviated
                            })()}
                        </span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-white/70 text-[10px] sm:text-xs uppercase tracking-wider mb-0.5">
                            Expires
                        </span>
                        <span className="font-mono font-medium tracking-widest text-white text-xs sm:text-base">
                            {month || "MM"}/{year ? year.toString().slice(-2) : "YY"}
                        </span>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}