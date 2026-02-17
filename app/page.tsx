import Image from "next/image";
import Form from "./component/Form";
import CreditCard from "./component/CreditCard";
import { CardProvider } from "@/Context/Context";

export default function Home() {
  return (
    <CardProvider>
      <div className="bg-blue-50 flex flex-col lg:flex-row justify-center items-center min-h-screen p-4 lg:p-8">
        <CreditCard />
        <div className="w-full max-w-2xl lg:absolute">
          <Form />
        </div>
      </div>
    </CardProvider>
  );
}
