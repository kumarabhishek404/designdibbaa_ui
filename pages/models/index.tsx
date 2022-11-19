import Footer from "../../components/footer/footer";
import Navbar from "../../components/header/navbar";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';


const Models = () => {
  return (
    <div className="min-h-full overflow-hidden h-screen">
      <Navbar />
      <div className="py-16 text-center flex flex-col items-center justify-center bg-[#ffff00] h-4/6">
        <DirectionsRunIcon sx={{ fontSize: 200 }} />
        <p className="text-4xl">Models is in progress</p>
      </div>
      <Footer />
    </div>
  )
}

export default Models;