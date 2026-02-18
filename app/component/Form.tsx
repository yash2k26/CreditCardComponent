"use client"
import { useCard } from '@/Context/Context'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const Form = () => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const years = [2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035]

  const {
    CardNumber, CardHolder, setCardHolder, setCardNumber,
    setMonth, setYear, year, month, handleCardNumber
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
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleClear = () => {
    setCardNumber('')
    setCardHolder('')
    setMonth('')
    setYear('')
    setcvv('')
  }

  return (
    <div className="
      bg-white rounded-2xl border border-neutral-200
      shadow-[0_4px_32px_rgba(0,0,0,0.08)]
      w-full
      px-5 pb-6 pt-[98px]
      sm:px-8 sm:pb-8 sm:pt-[120px]
    ">
      <div className="flex flex-col gap-4 sm:gap-5">

        {/* Card Number */}
        <div className="flex flex-col gap-1.5">
          <label className="text-neutral-700 text-sm sm:text-base font-medium">Card Number</label>
          <input
            value={CardNumber}
            onChange={handleCardNumber}
            className="p-3 border text-black border-neutral-300 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm sm:text-base"
            type="text"
            placeholder="1234 - 5678 - 1234 - 5678"
            maxLength={25}
          />
        </div>

        {/* Card Holder */}
        <div className="flex flex-col gap-1.5">
          <label className="text-neutral-700 text-sm sm:text-base font-medium">Card Holder</label>
          <input
            value={CardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            className="p-3 border text-black border-neutral-300 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm sm:text-base"
            type="text"
            placeholder="Full Name"
          />
        </div>

        {/* Expiry + CVV */}
        <div className="flex gap-3 items-end">

          {/* Expiry */}
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-neutral-700 text-sm sm:text-base font-medium">Expiry Date</label>
            <div className="flex gap-2">

              {/* Month dropdown */}
              <div ref={monthRef} className="relative flex-1">
                <div
                  onClick={() => { setIsMonthOpen(!isMonthOpen); setIsYearOpen(false) }}
                  className="p-3 border border-neutral-300 rounded-lg cursor-pointer bg-white hover:border-neutral-400 transition-colors select-none text-sm sm:text-base"
                >
                  {month
                    ? <span className="text-black">{String(month).padStart(2, '0')}</span>
                    : <span className="text-neutral-400">MM</span>
                  }
                </div>
                <AnimatePresence>
                  {isMonthOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute z-50 w-full bottom-full mb-1 bg-white border border-neutral-200 rounded-xl shadow-xl max-h-48 overflow-y-auto"
                    >
                      {months.map((m) => (
                        <div
                          key={m}
                          onClick={() => { setMonth(m.toString()); setIsMonthOpen(false) }}
                          className="p-3 hover:bg-blue-50 cursor-pointer text-black transition-colors first:rounded-t-xl last:rounded-b-xl text-sm sm:text-base"
                        >
                          {String(m).padStart(2, '0')}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Year dropdown */}
              <div ref={yearRef} className="relative flex-1">
                <div
                  onClick={() => { setIsYearOpen(!isYearOpen); setIsMonthOpen(false) }}
                  className="p-3 border border-neutral-300 rounded-lg cursor-pointer bg-white hover:border-neutral-400 transition-colors select-none text-sm sm:text-base"
                >
                  {year
                    ? <span className="text-black">{year}</span>
                    : <span className="text-neutral-400">YYYY</span>
                  }
                </div>
                <AnimatePresence>
                  {isYearOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute z-50 w-full bottom-full mb-1 bg-white border border-neutral-200 rounded-xl shadow-xl max-h-48 overflow-y-auto"
                    >
                      {years.map((y) => (
                        <div
                          key={y}
                          onClick={() => { setYear(y.toString()); setIsYearOpen(false) }}
                          className="p-3 hover:bg-blue-50 cursor-pointer text-black transition-colors first:rounded-t-xl last:rounded-b-xl text-sm sm:text-base"
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

          {/* CVV */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="cvv" className="text-neutral-700 text-sm sm:text-base font-medium">CVV</label>
            <input
              id="cvv"
              value={cvv}
              onChange={(e) => setcvv(e.target.value)}
              className="p-3 border text-black border-neutral-300 rounded-lg w-16 sm:w-24 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm sm:text-base text-center"
              type="password"
              maxLength={3}
              placeholder="•••"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-1">
          <button
            onClick={handleClear}
            className="flex-1 py-3 sm:py-4 rounded-lg text-neutral-700 border border-neutral-300 hover:bg-neutral-50 active:bg-neutral-100 text-sm sm:text-base font-medium transition-colors"
          >
            Clear
          </button>
          <button
            className="flex-1 py-3 sm:py-4 rounded-lg text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-sm sm:text-base font-medium transition-colors"
          >
            Proceed
          </button>
        </div>

      </div>
    </div>
  )
}

export default Form