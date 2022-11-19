import Image from "next/image";
import Footer from "../components/footer/footer";
import Navbar from "../components/header/navbar";

const Contact = () => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="h-full py-16 bg-[#ffff00]">
        <div id="newsletter" aria-label="Newsletter">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative -mx-4 overflow-hidden bg-[#ffff00] py-20 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-16 xl:px-24 xl:py-36">
              <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
                <div>
                  <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">Stay Connected</p>
                  <p className="mt-4 text-lg tracking-tight text-blue-900">Get updates of all the new textures and assets which is uploded and about to upload.</p>
                </div>
                <form>
                  {/* <h3 className="mb-3 text-lg font-semibold tracking-tight text-blue-900">Make Us Connected<span aria-hidden="true"></span>
                  </h3> */}
                  <div className="overflow-hidden">
                    <div className="bg-[#ffff00] sm:p-6">
                      <div className="grid grid-cols-1 gap-6">
                        <div className="col-span-12 sm:col-span-3">
                          {/* <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Full name
                          </label> */}
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="Full Name"
                            autoComplete="given-name"
                            className="mt-1 p-2 block w-full border-black drop-shadow-md focus:border-none sm:text-sm"
                          />
                        </div>

                        <div className="col-span-12 sm:col-span-3">
                          {/* <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                            Email address
                          </label> */}
                          <input
                            type="text"
                            name="email-address"
                            id="email-address"
                            placeholder="Email Address"
                            autoComplete="email"
                            className="mt-1 p-2 block w-full border-black drop-shadow-md focus:border-none  sm:text-sm"
                          />
                        </div>

                        <div className="col-span-12 sm:col-span-3">
                          {/* <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                            Country
                          </label> */}
                          <select
                            id="country"
                            name="country"
                            autoComplete=""
                            placeholder="Country"
                            className="mt-1 p-2 block w-full border border-gray-300 bg-white drop-shadow-md focus:border-none  sm:text-sm"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>
                        <button className="col-span-12 sm:col-span-3 w-full mt-3 inline-flex justify-center bg-black border-black p-4 text-base font-semibold text-white hover:border-indigo-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70" type="submit">
                          <span className="">Sign up today</span>
                          {/* <span className="sm:hidden">
                            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
                              <path d="m14 7 5 5-5 5M19 12H5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </span> */}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;