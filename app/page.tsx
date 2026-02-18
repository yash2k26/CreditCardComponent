'use client'
import Form from "./component/Form";
import CreditCard from "./component/CreditCard";
import { CardProvider } from "@/Context/Context";

export default function Home() {
  return (
    <CardProvider>
      <div className="bg-blue-50 min-h-screen w-full flex items-center justify-center p-6">
        <div className="flex flex-col items-center w-full max-w-lg">

          {/* Card always centered above form, overlaps down into form */}
          <div className="z-20 mb-[-80px] sm:mb-[-95px]">
            <CreditCard />
          </div>

          {/* Form has top padding to reveal card sitting over it */}
          <div className="z-10 w-full">
            <Form />
          </div>

        </div>
      </div>
    </CardProvider>
  );
}