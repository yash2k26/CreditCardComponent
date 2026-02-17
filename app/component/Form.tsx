"use client"
import { useCard } from '@/Context/Context'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const Form = () => {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const years = [2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035]

    const {
        CardNumber, CardHolder, setCardHolder, setCardNumber, setMonth, setYear, year, month
    } = useCard()

    const [isMonthOpen, setIsMonthOpen] = useState(false)
    const [isYearOpen, setIsYearOpen] = useState(false)
    const [cvv, setcvv] = useState('')

    const monthRef = useRef<HTMLDivElement>(null)
    const yearRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (monthRef.current && !monthRef.current.contains(event.target as Node)) {
                setIsMonthOpen(false)
            }
            if (yearRef.current && !yearRef.current.contains(event.target as Node)) {
                setIsYearOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleClear = () => {
        setCardNumber('')
        setCardHolder('')
        setMonth('')
        setYear('')
        setcvv('')
    }

    return (
        <div className='bg-white rounded-xl w-2xl p-10 pt-28 mt-24 '>
            <div className='flex flex-col gap-5  '>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="" className='text-black font-mono text-sm'>Card Number</label>
                    <input
                        value={CardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className='p-3 border text-black border-neutral-400 rounded-md focus:border-neutral-600 outline-none transition-colors'
                        type="number" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="" className='text-black font-mono text-sm'>Card Holder</label>
                    <input
                        value={CardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                        className='p-3 border text-black border-neutral-400 rounded-md focus:border-neutral-600 outline-none transition-colors'
                        type="text" />
                </div>
                <div className='flex items-start gap-5'>
                    <div className='flex flex-col gap-2 flex-1'>
                        <label htmlFor="" className='text-black font-mono text-sm'>Expiry Date</label>
                        <div className='flex gap-3'>
                            <div ref={monthRef} className='relative flex-1'>
                                <div
                                    onClick={() => setIsMonthOpen(!isMonthOpen)}
                                    className='p-3 border border-neutral-400 rounded-md cursor-pointer bg-white hover:border-neutral-600 focus:border-neutral-600 outline-none transition-colors text-black'
                                >
                                    {month ? String(month).padStart(2, '0') : "MM"}
                                </div>
                                <AnimatePresence>
                                    {isMonthOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className='absolute z-50 w-full bottom-full mb-1 bg-white border border-neutral-400 rounded-xl shadow-xl max-h-60 overflow-y-auto'
                                        >
                                            {months.map((m) => (
                                                <div
                                                    key={m}
                                                    onClick={() => {
                                                        setMonth(m.toString())
                                                        setIsMonthOpen(false)
                                                    }}
                                                    className='p-3 hover:bg-neutral-100 cursor-pointer text-black transition-colors first:rounded-t-xl last:rounded-b-xl'
                                                >
                                                    {String(m).padStart(2, '0')}
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div ref={yearRef} className='relative flex-1'>
                                <div
                                    onClick={() => setIsYearOpen(!isYearOpen)}
                                    className='p-3 border border-neutral-400 rounded-md cursor-pointer bg-white hover:border-neutral-600 focus:border-neutral-600 outline-none transition-colors text-black'
                                >
                                    {year || "YYYY"}
                                </div>
                                <AnimatePresence>
                                    {isYearOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className='absolute z-50 w-full bottom-full mb-1 bg-white border border-neutral-400 rounded-xl shadow-xl max-h-60 overflow-y-auto'
                                        >
                                            {years.map((y) => (
                                                <div
                                                    key={y}
                                                    onClick={() => {
                                                        setYear(y.toString())
                                                        setIsYearOpen(false)
                                                    }}
                                                    className='p-3 hover:bg-neutral-100 cursor-pointer text-black transition-colors first:rounded-t-xl last:rounded-b-xl'
                                                >
                                                    {y}
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="cvv" className='text-black font-mono text-sm'>CVV</label>
                        <input
                            value={cvv}
                            onChange={(e) => setcvv(e.target.value)}
                            className='p-3 border text-black border-neutral-400 rounded-md w-24 focus:border-neutral-600 outline-none transition-colors'
                            type="text"
                            maxLength={3}
                            placeholder="***"
                        />
                    </div>
                </div>
                <div className=' flex justify-evenly mt-4 items-center gap-3 '>
                    <button
                        onClick={handleClear}
                        className='flex-1 px-4 py-2 rounded-md text-black hover:bg-neutral-50 border-neutral-500 border '>Clear</button>
                    <button className='flex-1 px-4 py-2 text-white rounded-md hover:bg-blue-600 bg-blue-500 border-neutral-500/55 border'>Proceed</button>
                </div>
            </div>
        </div>
    )
}

export default Form
