"use client"
import { useCard } from '@/Context/Context'
import React from 'react'

const Form = () => {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const years = [2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035]

    const {
        CardNumber, CardHolder, setCardHolder, setCardNumber, setMonth, setYear, year, month
    } = useCard()

    return (
        <div className='bg-white rounded-xl w-2xl p-10 pt-40 '>
            <div className='flex flex-col gap-5  '>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-black font-mono ' >Card Number</label>
                    <input
                        value={CardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className='p-3 border text-black border-neutral-400 rounded-md '
                        type="number" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-black font-mono '>Card Holders</label>
                    <input
                        value={CardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                        className='p-3 border  text-black border-neutral-400  rounded-md ' type="text" />
                </div>
                <div className='flex items-center justify-between '>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-black font-mono '>Expiry Date</label>
                        <div className='flex gap-10 '>
                            <select
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                name=""
                                id="month" >
                                <option value="month">Month</option>
                                {
                                    months.map((month) => (
                                        <option
                                            value={month}
                                            onChange={(e) => setMonth(e.target.value)}
                                            key={month}
                                        >
                                            {month}
                                        </option>
                                    ))
                                }
                            </select>
                            <select
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                name=""
                                id="year" >
                                <option className='  ' value="year" >Year</option>
                                {
                                    years.map((year) => (
                                        <option
                                            value={year}
                                            onChange={(e) => setMonth(e.target.value)}
                                            key={year}
                                        >
                                            {year}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label>CVV</label>
                        <input type="text" />
                    </div>
                </div>
            </div>

            {/* <input type="text" /> */}
        </div>
    )
}

export default Form
