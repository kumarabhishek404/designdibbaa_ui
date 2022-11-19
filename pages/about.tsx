import Image from "next/image";
import Footer from "../components/footer/footer";
import Navbar from "../components/header/navbar";
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-full overflow-hidden">
      <Navbar />
      <div className="py-16 bg-[#ffff00]">
        <section id="author" aria-labelledby="author-title" className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16">
          {/* <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
            <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
              <defs>
                <pattern id=":Rem:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" y="100%">
                  <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#:Rem:)"></rect>
            </svg>
          </div> */}
          <div className="relative mx-auto max-w-7xl pt-16 sm:px-6">
            <div className="bg-[#ffff00] pt-px">
              <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
                <Image
                  className="h-full w-full"
                  src="/img/logo.png"
                  alt="Your Company"
                  width="100"
                  height="100"
                />
                {/* <img alt="" sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.962d41ee.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.962d41ee.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.962d41ee.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.962d41ee.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.962d41ee.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.962d41ee.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.962d41ee.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.962d41ee.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.962d41ee.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.962d41ee.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.962d41ee.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.962d41ee.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.962d41ee.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.962d41ee.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.962d41ee.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.962d41ee.png&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.962d41ee.png&amp;w=3840&amp;q=75" width="576" height="576" decoding="async" data-nimg="1" className="absolute inset-0 h-full w-full object-cover" loading="lazy" style="color:transparent"> */}
              </div>
              <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
                <h2 className="inline-flex items-center py-1 px-4 text-[#ffff00] ring-1 ring-inset ring-black bg-black" id="author-title">
                  <span className="font-mono text-sm" aria-hidden="true">01</span>
                  <span className="ml-3 h-3.5 w-px bg-[#ffff00]"></span>
                  <span className="ml-3 text-base font-medium tracking-tight">Author</span>
                </h2>
                <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                  <span className="block text-black underline">DesignDibbaa –</span> Hey there, I’m the author behind ‘Everything Starts as a Square’.
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-700">I’ve been designing icons professionally for over a decade and have worked with dozens of the biggest brands to create custom sets for their products. I’m an accomplished conference speaker, and have been teaching icon design workshops every month for the last three years. I’ve worked with designers of all skill levels and honed my way of teaching to really click for anyone who has the itch to start designing their own icons.</p>
                <p className="mt-8">
                  <Link className="inline-flex items-center text-base font-medium tracking-tight text-black" target={'_blank'} href="https://www.instagram.com/designdibbaa">
                    <InstagramIcon />
                    {/* <svg aria-hidden="true" viewBox="0 0 40 40" className="h-10 w-10 fill-current">
                      <path d="M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066"></path>
                    </svg> */}
                    <span className="ml-4">Follow on Instagram</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default About;