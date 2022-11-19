import Image from 'next/image';
import Footer from '../components/footer/footer';
import Navbar from '../components/header/navbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="bg-[#ffff00]">
      <Navbar />
      <div className='h-fit'>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-wide text-slate-900 sm:text-7xl">Learning {''}

            <span className="relative whitespace-nowrap text-white">
              <span className="p-0 drop-shadow-2xl">3D Skills</span>
            </span>
            {' '}will make you satisfied.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">Creativity needs passion and here you will get some small helps from our side. </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a className="group inline-flex ring-1 bg-black items-center justify-center py-2 px-4 text-sm focus:outline-none ring-black hover:ring-black text-white hover:text-black hover:bg-transparent hover:ring-black active:bg-bg-transparent active:text-black focus-visible:outline-blue-600 focus-visible:ring-slate-300" href="https://www.instagram.com/designdibbaa" target="_blank" rel="noreferrer">
              <InstagramIcon />
              <span className="ml-3">Follow On Instagram</span>
            </a>
            <a className="group inline-flex ring-2 items-center justify-center py-2 px-4 text-sm focus:outline-none ring-black text-slate-700 hover:text-white hover:bg-black hover:ring-black active:bg-black active:text-white focus-visible:outline-blue-600 focus-visible:ring-slate-300" href="https://www.instagram.com/designdibbaa" target="_blank" rel="noreferrer">
              <YouTubeIcon />
              {/* <svg aria-hidden="true" className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current">
                <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"></path>
              </svg> */}
              <span className="ml-3">Subscribe On YouTube</span>
            </a>
          </div>

          <div className="mx-auto pt-16 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8 mt-16">
            <ol role="list" className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20">
              <li className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12">
                <Link href='/textures'>
                  <div className="relative h-48 overflow-hidden shadow-lg sm:h-60 lg:h-40">
                    <div className="absolute inset-0 flex items-center justify-center bg-[#ffff00]">
                      {/* <Image alt="" src="/_next/static/media/figma.0d78130b.svg" width="160" height="144" decoding="async" data-nimg="1" loading="lazy" style={{ color: "transparent" }} /> */}
                    </div>
                  </div>
                  <div className='mt-12'>
                    <h3 className="text-base font-medium tracking-tight text-slate-900">Textures</h3>
                    <p className="mt-2 text-sm text-slate-600">Pefectly structured templates for quickly designing new icons at dozens of common sizes.</p>
                  </div>
                </Link>
              </li>
              <li className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12">
                <Link href="/models">
                  <div className="relative h-48 overflow-hidden shadow-lg sm:h-60 lg:h-40">
                    <div className="absolute inset-0 flex items-center justify-center bg-[#ffff00]">
                      {/* <Image alt="" sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw" width="4096" height="4096" decoding="async" data-nimg="1" className="absolute inset-0 h-full w-full object-cover" loading="lazy" style={{ color: "transparent" }} /> */}
                      {/* <Image alt="" src="/_next/static/media/video-player.e8496657.svg" width="160" height="144" decoding="async" data-nimg="1" className="relative" loading="lazy" style={{ color: "transparent" }} /> */}
                    </div>
                  </div>
                  <div className='mt-12'>
                    <h3 className="text-base font-medium tracking-tight text-slate-900">Models</h3>
                    <p className="mt-2 text-sm text-slate-600">Weekly videos where we dissect and recreate beautiful icons we find on the web.</p>
                  </div>
                </Link>
              </li>
              <li className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12">
                <Link href="/animations">
                  <div className="relative h-48 overflow-hidden shadow-lg sm:h-60 lg:h-40">
                    <div className="absolute inset-0 flex items-center justify-center bg-[#ffff00]">
                      {/* <Image alt="" src="/_next/static/media/discord.ad5bcc98.svg" width="160" height="144" decoding="async" data-nimg="1" loading="lazy" style={{ color: "transparent" }} /> */}
                    </div>
                  </div>
                  <div className='mt-12'>
                    <h3 className="text-base font-medium tracking-tight text-slate-900">Animation</h3>
                    <p className="mt-2 text-sm text-slate-600">A private Discord server where you can get help and give feedback on each work.</p>
                  </div>
                </Link>
              </li>
            </ol>
          </div>
          {/* <div className="mt-36 lg:mt-44">
            <p className="font-display text-base text-slate-900">Trusted by these six companies so far</p>
            <ul role="list" className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
              <li>
                <ul role="list" className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
                  <li className="flex">
                    <Image alt="Transistor" src="/_next/static/media/transistor.7274e6c3.svg" width="158" height="48" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
                  </li>
                  <li className="flex">
                    <Image alt="Tuple" src="/_next/static/media/tuple.74eb0ae0.svg" width="105" height="48" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
                  </li>
                  <li className="flex">
                    <Image alt="StaticKit" src="/_next/static/media/statickit.d7937794.svg" width="127" height="48" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
                  <li className="flex">
                    <Image alt="Mirage" src="/_next/static/media/mirage.18d2ec4e.svg" width="138" height="48" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
                  </li>
                  <li className="flex">
                    <Image alt="Laravel" src="/_next/static/media/laravel.7deed17e.svg" width="136" height="48" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
                  </li>
                  <li className="flex">
                    <Image alt="Statamic" src="/_next/static/media/statamic.6da5ebfb.svg" width="147" height="48" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
                  </li>
                </ul>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}
