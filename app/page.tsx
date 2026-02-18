'use client'
import Form from "./component/Form";
import { motion } from 'motion/react'
import CreditCard from "./component/CreditCard";
import { CardProvider, useCard } from "@/Context/Context"; // Added useCard import

const HomeLayout = () => {
  const { isFront } = useCard();
  return (
    <div className="bg-blue-50 min-h-screen w-full flex flex-col items-center justify-start lg:justify-center p-4 py-12 lg:p-8 overflow-x-hidden overflow-y-auto">
      <div className="relative w-full max-w-xl flex flex-col items-center justify-center">
        <motion.div
          transition={{ duration: 0.2 }}
          className={`transition-all duration-300 ${isFront ? 'z-30' : 'z-5'} mb-[-60px] sm:mb-[-100px]`}>
          <CreditCard />
        </motion.div>
        <div className="w-full z-10">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <CardProvider>
      <HomeLayout />
    </CardProvider >
  );
}