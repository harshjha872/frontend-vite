import Sidebar from "./Sidebar"
import HeroSection from "./HeroSection"
import ProfileBar from "./ProfileBar"

function App() {
  return (
    <>
      <div className="bg-neutral-50 flex h-full">
        <Sidebar/>
        <HeroSection/>
        <ProfileBar/>
      </div>
    </>
  )
}

export default App
