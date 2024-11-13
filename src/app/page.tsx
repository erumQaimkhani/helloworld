import Image from "next/image"
import Footer from "./components/Footer"
export default function Home(){
  return(
    <>
    <h1 className=" text-center text-purple-900 text-2xl">Hello World!</h1>
    <img src="sparrow.webp" alt="Sparrow" className="h-5/6 w-1/3 object-scale-down"/>
    <Footer />
    </>
  )
}