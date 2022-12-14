import Footer from "../../components/footer/footer";
import Navbar from "../../components/header/navbar";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

interface textureProps {

}

const Texture = ({ }: textureProps) => {
  const router = useRouter();
  const [textures, setTextures] = useState([
    {
      id: 1,
      name: 'Cardboard',
      href: 'cardboard',
      img: {
        placholderImg: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        textureImg: '/img/img.png',
      },
      imageAlt: "Front of men's Basic Tee in black.",
      imageDesc: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
      price: 'FREE',
      category: 'Objects',
    }
  ])

console.log("router", router);
  const [img, setImg] = useState('')

  const [product, setProduct] = useState({
    name: router.query.name,
    price: '$192',
    href: '#',
    breadcrumbs: [{ id: 1, name: "Textures", href: "/" }],
    images: [
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  });
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  const reviews = { href: "#", average: 4, totalCount: 117 };

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    console.log(router.query.name);
    let tempQuery = `${router.query.name || ''}`
    tempQuery.split('-')[1]
    console.log(tempQuery.split('-')[1])
    setImg(tempQuery.split('-')[1])
  })

  return (
    <>
      <Navbar />
      <div className="bg-[#ffff00] py-16">
        <div className="pt-6">
          {textures &&
            textures
              .filter((texture: any) => {
                console.log(texture);
                return texture.href === "cardboard";
              })
              .map((texture: any, index: number) => (
                <div key={index}>
                  <nav aria-label="Breadcrumb">
                    <ol
                      role="list"
                      className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                    >
                      <li key={texture.id}>
                        <div className="flex items-center">
                          <Link
                            href="/"
                            className="mr-2 text-sm font-medium text-gray-900"
                          >
                            Textures
                          </Link>
                          <svg
                            width={16}
                            height={20}
                            viewBox="0 0 16 20"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="h-5 w-4 text-gray-300"
                          >
                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                          </svg>
                        </div>
                      </li>

                      <li className="text-sm">
                        <Link
                          href={texture.href}
                          aria-current="page"
                          className="font-medium text-gray-500 hover:text-gray-600"
                        >
                          {texture.name}
                        </Link>
                      </li>
                    </ol>
                  </nav>

                  <div className="mx-auto mt-6 flex justify-center">
                    <div className="aspect-w-3 aspect-h-4 overflow-auto lg:block">
                      <img
                        src={`http://localhost:5000/${img}`}
                        alt={texture.imageAlt}
                        className="max-w-none object-cover object-center h-screen md:h-auto"
                      />
                    </div>
                  </div>

                  <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                    <div className="lg:col-span-2 lg:border-r lg:border-black lg:pr-8">
                      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        {texture.name}
                      </h1>
                    </div>

                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                      <h2 className="sr-only">Texture information</h2>
                      <p className="text-3xl tracking-tight text-gray-900">
                        {texture.price}
                      </p>

                      {/* <div className="mt-6">
                        <h3 className="sr-only">Reviews</h3>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  reviews.average > rating
                                    ? "text-gray-900"
                                    : "text-gray-200",
                                  "h-5 w-5 flex-shrink-0"
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">
                            {reviews.average} out of 5 stars
                          </p>
                          <a
                            href={reviews.href}
                            className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            {reviews.totalCount} reviews
                          </a>
                        </div>
                      </div> */}

                      <form className="mt-10">
                        {/* <div>
                          <h3 className="text-sm font-medium text-gray-900">
                            Color
                          </h3>

                          <RadioGroup
                            value={selectedColor}
                            onChange={setSelectedColor}
                            className="mt-4"
                          >
                            <RadioGroup.Label className="sr-only">
                              {" "}
                              Choose a color{" "}
                            </RadioGroup.Label>
                            <div className="flex items-center space-x-3">
                              {product.colors.map((color) => (
                                <RadioGroup.Option
                                  key={color.name}
                                  value={color}
                                  className={({ active, checked }) =>
                                    classNames(
                                      color.selectedClass,
                                      active && checked
                                        ? "ring ring-offset-1"
                                        : "",
                                      !active && checked ? "ring-2" : "",
                                      "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                                    )
                                  }
                                >
                                  <RadioGroup.Label as="span" className="sr-only">
                                    {" "}
                                    {color.name}{" "}
                                  </RadioGroup.Label>
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      color.class,
                                      "h-8 w-8 border border-black border-opacity-10 rounded-full"
                                    )}
                                  />
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div> */}

                        {/* <div className="mt-10">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-900">
                              Size
                            </h3>
                            <a
                              href="#"
                              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Size guide
                            </a>
                          </div>

                          <RadioGroup
                            value={selectedSize}
                            onChange={setSelectedSize}
                            className="mt-4"
                          >
                            <RadioGroup.Label className="sr-only">
                              {" "}
                              Choose a size{" "}
                            </RadioGroup.Label>
                            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                              {product.sizes.map((size) => (
                                <RadioGroup.Option
                                  key={size.name}
                                  value={size}
                                  disabled={!size.inStock}
                                  className={({ active }) =>
                                    classNames(
                                      size.inStock
                                        ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                                        : "bg-gray-50 text-gray-200 cursor-not-allowed",
                                      active ? "ring-2 ring-indigo-500" : "",
                                      "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                                    )
                                  }
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <RadioGroup.Label as="span">
                                        {size.name}
                                      </RadioGroup.Label>
                                      {size.inStock ? (
                                        <span
                                          className={classNames(
                                            active ? "border" : "border-2",
                                            checked
                                              ? "border-indigo-500"
                                              : "border-transparent",
                                            "pointer-events-none absolute -inset-px rounded-md"
                                          )}
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <span
                                          aria-hidden="true"
                                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                        >
                                          <svg
                                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="none"
                                            stroke="currentColor"
                                          >
                                            <line
                                              x1={0}
                                              y1={100}
                                              x2={100}
                                              y2={0}
                                              vectorEffect="non-scaling-stroke"
                                            />
                                          </svg>
                                        </span>
                                      )}
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div> */}

                        {/* <button
                          type="submit"
                          className="col-span-12 sm:col-span-3 w-full mt-5 inline-flex justify-center bg-black border-black p-4 text-base font-semibold text-white hover:border-indigo-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
                        >
                          Free Download
                        </button> */}
                      </form>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-black lg:pt-6 lg:pb-16 lg:pr-8">
                      <div>
                        <h3 className="sr-only">Description</h3>

                        <div className="space-y-6">
                          <p className="text-base text-gray-900">
                            {texture?.imageDesc}
                          </p>
                        </div>
                      </div>

                      <div className="mt-10">
                        <h3 className="text-sm font-medium text-gray-900">
                          Highlights
                        </h3>

                        <div className="mt-4">
                          <ul
                            role="list"
                            className="list-disc space-y-2 pl-4 text-sm"
                          >
                            {product.highlights.map((highlight) => (
                              <li key={highlight} className="text-gray-400">
                                <span className="text-gray-600">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-10">
                        <h2 className="text-sm font-medium text-gray-900">
                          Details
                        </h2>

                        <div className="mt-4 space-y-6">
                          <p className="text-sm text-gray-600">
                            {product.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Texture;