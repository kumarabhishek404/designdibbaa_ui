import Image from "next/image";
import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className="min-h-full overflow-hidden bg-[#ffff00]">
      <footer className="">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center sm:items-center justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-start lg:py-16">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex items-center text-gray-900">
                <Link href='/'>
                  <Image
                    className="h-8 w-8"
                    src="/img/logo.png"
                    alt="Your Company"
                    width="100"
                    height="100"
                  />
                </Link>
                <div className="ml-4">
                  <p className="text-base font-semibold">Pocket</p>
                  <p className="mt-1 text-sm">Invest at the perfect time.</p>
                </div>
              </div>
              <nav className="mt-11 flex gap-8">
                <Link className="relative -my-2 -mx-3 px-3 py-2 text-sm text-black" href="/textures">
                  <span className="relative pb-2 hover:border-b-2 border-black">Textures</span>
                </Link>
                <Link className="relative -my-2 -mx-3 px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]" href="/models">
                  <span className="relative pb-2 hover:border-b-2 border-black">Models</span>
                </Link>
                <Link className="relative -my-2 -mx-3 px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]" href="/about">
                  <span className="relative pb-2 hover:border-b-2 border-black">About</span>
                </Link>
                <Link className="relative -my-2 -mx-3 px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]" href="/contact">
                  <span className="relative pb-2 hover:border-b-2 border-black">Contact</span>
                </Link>
              </nav>
            </div>
            <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-black sm:self-auto lg:mx-0 lg:self-auto lg:p-6">
              <div className="">
                <form className="flex w-full justify-center md:w-auto">
                  <div className="w-60 min-w-0 shrink">
                    <input type="email" aria-label="Email address" placeholder="Email address" className="block w-full appearance-none border border-black bg-[#ffff00] py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-black placeholder:text-black focus:border-black focus:outline-none focus:ring-cyan-500 sm:text-sm" />
                  </div>
                  <button className="inline-flex justify-center py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-[#ffff00] text-black before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors ml-4 flex-none" type="submit">
                    <span className="hidden lg:inline">Join us</span>
                    <span className="lg:hidden">Join us</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
            <div className="flex gap-x-6">
              <Link className="group" aria-label="TaxPal on Twitter" target={'_blank'} href="https://www.instagram.com/designdibbaa">
                <InstagramIcon />
              </Link>
              <Link className="group" aria-label="TaxPal on GitHub" target={'_blank'} href="https://www.instagram.com/designdibbaa">
                <YouTubeIcon />
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500 md:mt-0">© Copyright 2022 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;