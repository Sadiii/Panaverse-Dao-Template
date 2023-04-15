import Navbar from "./components/NavBar/navbar"
import Introduction from "./components/Introduction/introduction"
import SecondSection from "./components/middlesection/secondsection"
import Reviews from "./components/middlesection/thirdsection"
import Partner from "./partners/partners"
import Cities from "./cities/cities"

export default function Home() {
  return (
   <>
  <Introduction/>
  <div className="bg-[#09121D] relative">
   <SecondSection/>
   </div>
   <Reviews/>
   <div className="bg-[#09121D] relative">
   <Partner/>
   <Cities/>
   </div>
   </>
  )
}
