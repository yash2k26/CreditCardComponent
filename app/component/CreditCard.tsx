"use client"

import { useCard } from "@/Context/Context"
import React, { useState, ChangeEvent } from "react"
import { JSX } from "react/jsx-runtime"
import Form from "./Form"
import { motion } from "motion/react"

type Month = string
type Year = string

export default function CreditCard(): JSX.Element {

    const {
        CardHolder, CardNumber, maskedNumber, month, year
    } = useCard()

    const [focus, setfocus] = useState(null)
    const [front, setfront] = useState(false)

    return (
        <motion.div
            whileTap={{
                y: [0, -60, 0],
                transition: {
                    duration: 0.5,
                    ease: "easeInOut"
                }
            }}
            initial={{
                y: 0,

            }}
            onClick={() => setfront(!front)}
            className={` ${front ? 'z-50' : ''} rounded-xl sm:rounded-2xl relative -translate-y-8 sm:-translate-y-32 lg:-translate-y-52 h-44 sm:h-52 md:h-56 w-[95%] max-w-[340px] sm:max-w-[380px] md:max-w-[420px] shadow-[0_20px_50px_rgba(0,0,0,0.3),0_10px_20px_rgba(0,0,0,0.2)] flex flex-col `}>
            <img draggable="false" className='absolute  inset-0 h-full w-full object-cover rounded-xl sm:rounded-2xl' src="/3.jpeg" alt="" />
            <div className='bg-black/15 z-10 absolute rounded-xl sm:rounded-2xl h-full w-full inset-0 ' />
            <div className='absolute z-10 inset-0 flex flex-col justify-between p-4 sm:p-5 md:p-6'>
                <div className='flex justify-between items-center'>
                    <img draggable="false" src="chip.png" className='h-8 sm:h-10 md:h-12' alt="" />
                    <img draggable="false" src="visa.png" className='h-8 sm:h-10 md:h-12' alt="" />
                </div>
                <div className="flex justify-center items-center">
                    <div
                        className="
                            font-medium                    
                            font-mono
                            whitespace-nowrap
                            text-white
                            flex
                            text-lg sm:text-xl md:text-2xl
                        ">
                        {maskedNumber?.split("").map((digit, index) => (
                            <motion.span
                                key={index + digit}
                                initial={{ y: -15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                style={{ width: digit === " " ? "0.5em" : "auto", textShadow: '2px 1px gray' }}
                            >
                                {digit}
                            </motion.span>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <div
                        style={{ fontSize: "18px" }}
                        className="
                                font-medium                    
                                font-mono
                                tracking-widest
                                whitespace-nowrap
                                text-white
                                flex flex-col
                            ">
                        <span className="text-[12px] text-white tracking-normal mb-1">Card Holder</span>
                        {(() => {
                            const name = CardHolder.toUpperCase().trim() || "FULL NAME"
                            if (name.length <= 20) return name


                            const parts = name.split(' ').filter(part => part.length > 0)


                            if (parts.length === 1) return name.slice(0, 20)

                            let abbreviatedName = name


                            for (let i = 0; i < parts.length - 1; i++) {
                                if (abbreviatedName.length <= 20) break
                                parts[i] = parts[i][0] + "."
                                abbreviatedName = parts.join(' ')
                            }


                            return abbreviatedName.length > 20 ? abbreviatedName.slice(0, 20) : abbreviatedName
                        })()}
                    </div>
                    <div className="flex flex-col  items-end">
                        <span className="text-[12px] text-white tracking-normal mb-1">Expires</span>
                        <div className="flex">
                            <div
                                style={{ fontSize: "18px" }}
                                className="
                                        font-medium                    
                                        font-mono
                                        tracking-widest
                                        whitespace-nowrap
                                        text-white
                                    ">
                                {month || "MM"}/
                            </div>
                            <div style={{ fontSize: "18px" }}
                                className="
                                    font-medium                    
                                    font-mono
                                    tracking-widest
                                    whitespace-nowrap
                                    text-white"
                            >
                                {year ? year.toString().slice(-2) : "YY"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

    )

}
