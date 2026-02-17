"use client"
import React, { ChangeEvent, ChangeEventHandler, Children, createContext, ReactNode, useContext, useState } from 'react'


type CardContextType = {
    CardNumber: string,
    CardHolder: string,
    month: string,
    year: string,

    handleCardHolder: (e: ChangeEvent<HTMLInputElement>) => void
    handleCardNumber: (e: ChangeEvent<HTMLInputElement>) => void
    handleMonth: (e: ChangeEvent<HTMLInputElement>) => void
    handleYear: (e: ChangeEvent<HTMLInputElement>) => void
    setMonth: (value: string) => void
    setYear: (value: string) => void
    setCardNumber: (value: string) => void
    setCardHolder: (value: string) => void

    maskedNumber: string | undefined
}

const CardContext = createContext<CardContextType | null>(null)

export const useCard = () => {
    const context = useContext(CardContext)

    if (!context) {
        throw new Error("useCard must be used in CardProvider")
    }

    return context

}

export const CardProvider = ({ children }: { children: ReactNode }) => {
    const [CardNumber, setCardNumber] = useState('')
    const [CardHolder, setCardHolder] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const handleCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/\D/g, '').slice(0, 16)
        setCardNumber(rawValue)
    }

    const handleCardHolder = (e: ChangeEvent<HTMLInputElement>) => {
        setCardHolder(e.target.value)
    }

    const handleMonth = (e: ChangeEvent<HTMLInputElement>) => {
        setMonth(e.target.value)
    }

    const handleYear = (e: ChangeEvent<HTMLInputElement>) => {
        setYear(e.target.value)
    }

    const masked = (value: string) => {
        const Total = 16

        let result = ""

        for (let i = 0; i < Total; i++) {
            if (i < value.length) {
                if (i < 4 || i >= 12) {
                    result += value[i]
                } else {
                    result += "*"
                }
            } else {
                result += "#"
            }
            if ((i + 1) % 4 === 0 && i !== Total - 1) {
                result += " "
            }
        }

        return result

    }

    const maskedNumber = masked(CardNumber)

    return (
        <CardContext.Provider
            value={{
                CardNumber,
                setCardNumber,
                setCardHolder,
                CardHolder,
                month,
                year,

                handleCardHolder,
                handleCardNumber,
                handleMonth,
                handleYear,
                setMonth,
                setYear,

                maskedNumber
            }}
        >
            {children}
        </CardContext.Provider>
    )



}

