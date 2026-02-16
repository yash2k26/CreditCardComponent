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
                y: [0, -100,0],
                transition: {
                    duration: 0.5,
                    ease:"easeInOut"
                }
            }}
            initial={{
                y: 0,
                
            }}
            // animate={{

            // }}
            // onClick={()=>setfocus()}
            onClick={() => setfront(!front)}
            className={` ${front ? 'z-50' : ''} rounded-2xl relative -translate-y-52 h-56 w-[420px] shadow-2xl shadow-black flex flex-col `}>
            <img draggable="false" className='absolute opacity-60 inset-0 h-full w-full object-cover rounded-2xl ' src="/3.jpeg" alt="" />
            <div className='bg-black/25 z-10 absolute rounded-md h-full w-full inset-0 ' />
            <div className='absolute z-10 inset-0 flex flex-col justify-between p-6'>
                <div className='flex justify-between items-center'>
                    <img draggable="false" src="chip.png" className='h-12' alt="" />
                    <img draggable="false" src="visa.png" className='h-12' alt="" />
                </div>
                <div className="flex justify-center items-center">
                    <span
                        style={{ fontSize: "25px" }}
                        className="
                            font-medium                    
                            font-mono
                            tracking-[0.5em]
                            whitespace-nowrap
                            text-white
                        ">
                        {maskedNumber}
                    </span>
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
                        <span className="text-[10px] opacity-70 text-amber-700 tracking-normal mb-1">Card Holder</span>
                        {CardHolder || "FULL NAME"}
                    </div>
                    <div className="flex flex-col  items-end">
                        <span className="text-[10px] opacity-70 mb-1">Expires</span>
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
