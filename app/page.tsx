import Image from "next/image";
import Form from "./component/Form";
import CreditCard from "./component/CreditCard";
import { CardProvider } from "@/Context/Context";

export default function Home() {
return (
  <CardProvider>
    <div className="bg-blue-50   flex justify-center items-center h-screen "> 
      <CreditCard/>
      <div className=" absolute">
        <Form/>
      </div>
    </div>
  </CardProvider>
  );
}
