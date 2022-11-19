import { RadioGroup } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/24/outline";
import Axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/header/navbar";

const Textures = () => {
  const [search, setSearch] = useState('')
  const [textures, setTextures] = useState([
    {
      id: 1,
      name: "Steel Texture 3",
      category: "Metal",
      href: 'steel',
      cost: "free",
      description: "this is desc",
      details: "this is details",
      highlights: "this is highlights",
      thumbnail: "1668625269849.png",
      nodeImage: "1668625269849.png"
    },
  ])

  const [img64, setIma64] = useState('')

  useEffect(() => {
    Axios.get('http://localhost:5000/textures').then((res) => {
      console.log(res);
      setTextures(res.data.data)
      console.log(res.data.data[10].image);
      setIma64(res.data.data[10].image)
    })
      .catch((err) => {
        console.log(err);
      })
    console.log("location", location.pathname.replace("/", ""));
  }, []);

  const reviews = { href: "#", average: 4, totalCount: 117 };

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  const handleSearch = (e: any) => {
    console.log("Searching ", e.target.value);
    setSearch(e.target.value)
  }


  return (
    <>
      <Navbar />
      <div className="bg-[#ffff00] pt-2">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Textures</h2>

          {/* <input type="search" onChange={handleSearch} className="rounded w-full text-black-500" /> */}
          <div className="col-span-6 sm:col-span-4">
            <div className="mt-5 flex bg-black py-2.5 bg-black shadow-lg focus-within:ring-2 focus-within:ring-blue-900">
              <input type="email" placeholder="Search Textures..." aria-label="Search Textures..." onChange={handleSearch} className="text-rose-900 flex-auto bg-black shadow-lg pl-6 text-base text-white placeholder:text-white focus:outline-0 focus:border-0" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {textures.filter((texture) => { return texture.href.includes(search) }).map((texture) => (
              <div key={texture.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-[#ffff00] group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <Image
                    src={`http://localhost:5000/${texture.thumbnail}`}
                    alt={texture.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    width="50"
                    height="50"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`textures/${texture.href}-${texture.nodeImage}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {texture.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{texture.category}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{texture.cost}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Textures;