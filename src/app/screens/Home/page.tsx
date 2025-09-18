import Navbar from "@/app/components/Navbar/page";
import Image from "next/image";
import React from "react";
import background from "@/app/assets/background.webp";
import Button from "@/app/components/Button/page";
import {
  FaBitcoin,
  FaInstagram,
  FaPersonBooth,
  FaYoutube,
} from "react-icons/fa";
import { FaArrowRightArrowLeft, FaXTwitter } from "react-icons/fa6";
import { AiOutlineThunderbolt } from "react-icons/ai";
import bg from "@/app/assets/bg.webp";
import nexo from "@/app/assets/nexo-token.webp";
import { GiSandsOfTime } from "react-icons/gi";
import { CgCircleci } from "react-icons/cg";
import { FaCoins } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import white from "@/app/assets/white.webp";
import image1 from "@/app/assets/awards/payments.png";
import image2 from "@/app/assets/awards/forbes.png";
import image3 from "@/app/assets/awards/fintech.webp";
import image4 from "@/app/assets/awards/business.webp";
import image5 from "@/app/assets/awards/bronze.png";
import image6 from "@/app/assets/awards/digital.webp";
import image7 from "@/app/assets/awards/cta-banner@2x.webp";
import Link from "next/link";
function Home() {
  return (
    <div className="p-2 overflow-x-hidden">
      <section className="relative w-full min-h-screen h-auto md:h-screen">
        <Image
          src={background}
          alt=""
          className="object-cover absolute inset-0 object-center h-full md:h-screen items-center justify-center z-10"
          fill
          priority
        />
        <div className="z-50 relative">
          <div>
            <Navbar />
          </div>
          <div className="pt-10 md:pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 py-10 sm:py-20 gap-8 md:gap-0">
              <div className="text-white space-y-5 mx-auto md:m-auto px-4 md:px-0 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
                  Earn, borrow, spend.
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
                  All in one place.
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl">
                  Access the premier wealth platform built to grow
                  <br className="hidden sm:block" /> your crypto
                </p>
                <div>
                  <Link href="../../screens/shop">
                    <Button className="" type="button" onClick={()=>{}} title="Start Using Nexo" />
                  </Link>
                </div>
                <div className="border w-full max-w-md md:max-w-full p-3 rounded-3xl bg-gradient-to-t from-black/40 to-transparent mx-auto md:mx-0">
                  <p className="text-sm sm:text-base">
                    Unlock white-glove wealth solutions when you add{" "}
                    <br className="hidden sm:block" /> $100,000 or more.{" "}
                    <span className="underline cursor-pointer">
                      Discover Nexo Private
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full md:w-auto flex justify-center md:justify-end">
                <div className="bg-gradient-to-t p-2 from-white/40 w-full max-w-xs sm:w-72 mx-auto md:mx-0">
                  <div className="flex items-center space-x-2">
                    <FaBitcoin
                      size={40}
                      color="orange"
                      className="flex-shrink-0"
                    />
                    <p className="text-black text-sm sm:text-base">
                      You earn $60 in BTC <br /> cashback on your purchase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-10 justify-center items-center mt-10 md:mt-0 px-4">
              <div className="text-center">
                <p className="text-sm sm:text-base">Operating</p>
                <p className="font-semibold text-sm sm:text-base">since 2018</p>
              </div>
              <div className="text-center">
                <p className="text-sm sm:text-base">Personalized</p>
                <p className="font-semibold text-sm sm:text-base">
                  client care 24/7
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm sm:text-base">Assets under management</p>
                <p className="font-semibold text-sm sm:text-base">
                  $11+ billion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-20 lg:py-30">
        <div className="px-4 sm:px-10 lg:px-20 space-y-10 lg:space-y-20">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Fund your account <br /> effortlessly
            </h1>
            <p className="text-base sm:text-lg max-w-lg">
              Add funds via bank transfers under your name, or choose from
              simple <br className="hidden sm:block" /> alternatives that match
              your needs
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-5 gap-4 md:gap-0">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <FaPersonBooth
                size={40}
                className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
              />
              <h1 className="text-lg sm:text-xl">
                Crypto-friendly bank transfers
              </h1>
            </div>
            <p className="text-base sm:text-lg max-w-lg">
              Your personal USD, EUR, and GBP accounts on Nexo help you prevent
              <br className="hidden sm:block" /> blocked or delayed transactions
              that banks can impose on third-party{" "}
              <br className="hidden sm:block" /> transfers
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-5 gap-4 md:gap-0">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <FaArrowRightArrowLeft
                size={40}
                className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
              />
              <h1 className="text-lg sm:text-xl">Seamless crypto transfers</h1>
            </div>
            <p className="text-base sm:text-lg max-w-lg">
              Receive crypto from eternal platforms or wallets across 20+
              blockchain
              <br className="hidden sm:block" />
              networks like Ethereum, Solana, and Tron.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-5 gap-4 md:gap-0">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <AiOutlineThunderbolt
                size={40}
                className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
              />
              <p className="text-lg sm:text-xl">
                Instant and local payment solutions
              </p>
            </div>
            <p className="text-base sm:text-lg max-w-lg">
              Choose between instant card payments with Visa, Mastercard, Apple{" "}
              <br className="hidden sm:block" /> Pay Google Pay or popular
              regional payment methods that work best
              <br className="hidden sm:block" /> for you.
            </p>
          </div>
        </div>
      </section>
      <section className="py-9 px-4 sm:px-9">
        <div className="relative rounded-xl overflow-hidden h-100 md:h-96">
          <Image
            src={bg}
            alt=""
            className="object-cover absolute inset-0 object-center items-center justify-center z-10"
            fill
          />
          <div className="z-50 py-10 sm:py-18 relative flex flex-col md:flex-row items-center justify-evenly gap-5 md:gap-10 h-full px-4">
            <div>
              <Image src={nexo} className="w-24 sm:w-32" alt="" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl">
                Enjoy exclusive benefits with <br /> the Nexo Loyalty Program.
              </h1>
            </div>
            <div className="space-y-3 text-center md:text-left max-w-md">
              <p className="text-white text-base sm:text-lg lg:text-xl">
                Join Nexo's Loyalty Program with an account balance above
                <br className="hidden sm:block" /> $5,000. Enjoy daily interest
                earnings, lower borrow rates,
                <br className="hidden sm:block" /> crypto cashback on purchases,
                and many more premium
                <br className="hidden sm:block" /> benefits
              </p>
              <div>
                <p className="text-teal-400 text-sm sm:text-base cursor-pointer hover:underline">
                  Read more
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 lg:py-30">
        <div className="flex flex-col md:flex-row justify-evenly gap-6 md:gap-0 pb-10 lg:pb-15 px-4">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl">
              Why choose Nexo?
            </h1>
          </div>
          <div className="space-y-5 sm:space-y-10 max-w-lg">
            <p className="text-base sm:text-lg lg:text-xl text-black/75">
              Nexo empowers forward-thinking investors to build long-term wealth
              by <br className="hidden sm:block" /> offering the most
              comprehensive suite of digital asset solutions. Our
              <br className="hidden sm:block" />
              approach unites cutting-edge products, robust infrastructure
              security,
              <br className="hidden sm:block" /> and white-glove client care. We
              aim to unlock new growth opportunities
              <br className="hidden sm:block" /> and drive the next generation
              of wealth
            </p>
            <div>
              <button
                title="read"
                className="rounded-2xl bg-white w-full sm:w-52 px-3 text-base sm:text-xl border py-4 sm:py-6 cursor-pointer text-start text-black hover:text-white hover:bg-black transition-colors"
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-10 space-y-10 lg:space-y-15 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="m-auto space-y-5 sm:space-y-10 border-l px-4 sm:px-6 lg:px-10">
              <div>
                <GiSandsOfTime
                  size={40}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                <p className="text-xl sm:text-2xl mt-2">Proven track record</p>
              </div>

              <p className="text-base sm:text-lg text-black/65">
                Trusted since 2018
              </p>
            </div>
            <div className="m-auto space-y-5 sm:space-y-10 border-l px-4 sm:px-6 lg:px-10">
              <div>
                <CgCircleci size={40} className="w-10 h-10 sm:w-12 sm:h-12" />
                <p className="text-xl sm:text-2xl mt-2">
                  White-glove client care
                </p>
              </div>

              <p className="text-base sm:text-lg text-black/65">
                Personalized client care available 24/7
              </p>
            </div>
            <div className="m-auto space-y-5 sm:space-y-10 border-l px-4 sm:px-6 lg:px-10">
              <div>
                <CgCircleci size={40} className="w-10 h-10 sm:w-12 sm:h-12" />
                <p className="text-xl sm:text-2xl mt-2">Global footprint</p>
              </div>
              <p className="text-base sm:text-lg text-black/65">
                Present in 150+ jurisdictions
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="m-auto px-4 sm:px-6 lg:px-10 space-y-5 sm:space-y-10 border-l">
              <div>
                <FaCoins size={40} className="w-10 h-10 sm:w-12 sm:h-12" />
                <p className="text-xl sm:text-2xl mt-2">
                  Outstanding confidence
                </p>
              </div>
              <p className="text-base sm:text-lg text-black/65">
                $11+ billion assets under management
              </p>
            </div>
            <div className="m-auto space-y-5 sm:space-y-10 border-l px-4 sm:px-6 lg:px-10">
              <div>
                <MdOutlineSecurity
                  size={40}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                <p className="text-xl sm:text-2xl mt-2">
                  Strong financial health
                </p>
              </div>
              <p className="text-base sm:text-lg text-black/65">
                Proven regulatory compliance
              </p>
            </div>
            <div className="m-auto space-y-5 sm:space-y-10 border-l px-4 sm:px-6 lg:px-10">
              <div>
                <CiTempHigh size={40} className="w-10 h-10 sm:w-12 sm:h-12" />
                <p className="text-xl sm:text-2xl mt-2">High Liquidity</p>
              </div>
              <p className="text-base sm:text-lg text-black/65">
                Processed $371+ billion
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10 pt-10 md:pt-20 lg:pt-30">
        <div className="relative rounded-2xl overflow-hidden h-80 md:h-96">
          <Image
            src={white}
            alt=""
            className="object-cover absolute inset-0 object-center items-center justify-center z-10"
            fill
          />
          <div className="z-50 space-y-4 sm:space-y-6 relative px-4 sm:px-10 lg:px-20 py-8 sm:py-10 md:py-12 h-full flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl">
              Serving clients since 2018.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl">
              Individuals businesses, and institutions rely on us to help grow
              <br className="hidden sm:block" /> their digital asset portfolios.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-10 lg:px-20 mt-10 md:mt-20">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl ">
            Awards and recognitions.
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center py-5 sm:py-10 gap-4 sm:gap-6">
          {[image1, image2, image3, image4, image5, image6].map((items, id) => (
            <div key={id} className="flex justify-center">
              <Image
                className="w-20 sm:w-24 md:w-32 lg:w-40"
                src={items}
                alt=""
              />
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-10 py-10 md:py-20 lg:py-30">
        <div className="relative rounded-2xl overflow-hidden h-80 md:h-96">
          <Image
            src={image7}
            className="object-cover absolute inset-0 object-center items-center justify-center z-10"
            alt=""
            fill
          />
          <div className="z-50 relative text-white p-5 sm:p-10 lg:p-20 space-y-5 sm:space-y-10 h-full flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Driving the next generation of
              <br /> wealth
            </h1>
            <p className="text-base sm:text-lg lg:text-xl">
              Nexo is built for pioneers ready to leverage blockchain technology
              for <br className="hidden sm:block" /> wealth generation. Create
              your account today and get started
            </p>
            <div>
              <Button title="start usinge nexos" />
            </div>
          </div>
        </div>
      </section>
      <section className="border-b mt-10" />

      <section className="mt-10 md:mt-20 px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8 lg:gap-10">
          <div className="space-y-4 sm:space-y-7">
            <div>
              <h1 className="font-bold text-base sm:text-lg">Personal</h1>
            </div>
            <div className="space-y-2 sm:space-y-4 text-xs sm:text-sm">
              <p className="cursor-pointer hover:underline">Buy Crypto</p>
              <p className="cursor-pointer hover:underline">Flexible Savings</p>
              <p className="cursor-pointer hover:underline">
                Fixed-term Savings
              </p>
              <p className="cursor-pointer hover:underline">Exchange</p>
              <p className="cursor-pointer hover:underline">Credit Line</p>
              <p className="cursor-pointer hover:underline">Nexo Crypto Card</p>
              <p className="cursor-pointer hover:underline">Dual Investment</p>
              <p className="cursor-pointer hover:underline">Futures</p>
              <p className="cursor-pointer hover:underline">Loyalty Program</p>
              <p className="cursor-pointer hover:underline">Private Clients</p>
              <p className="cursor-pointer hover:underline">Tax Reporting</p>
              <p className="cursor-pointer hover:underline">Referral Program</p>
              <p className="cursor-pointer hover:underline">
                Affiliate Program
              </p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-7">
            <div className="font-bold text-base sm:text-lg">
              <h1>Business</h1>
            </div>
            <div className="space-y-2 sm:space-y-4 text-xs sm:text-sm">
              <p className="cursor-pointer hover:underline">Corporates</p>
              <p className="cursor-pointer hover:underline">Institutions</p>
              <p className="cursor-pointer hover:underline">White Label</p>
              <p className="cursor-pointer hover:underline">Nexo Ventures</p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-7">
            <div>
              <h1 className="font-bold text-base sm:text-lg">Company</h1>
            </div>
            <div className="space-y-2 sm:space-y-4 text-xs sm:text-sm">
              <p className="cursor-pointer hover:underline">About</p>
              <p className="cursor-pointer hover:underline">Growth Plan</p>
              <p className="cursor-pointer hover:underline">Ambassadors</p>
              <p className="cursor-pointer hover:underline">Security</p>
              <p className="cursor-pointer hover:underline">Partnerships</p>
              <p className="cursor-pointer hover:underline">
                Vulnerability Disclosure
              </p>
              <p className="cursor-pointer hover:underline">News & Insights</p>
              <p className="cursor-pointer hover:underline">Help Center</p>
              <p className="cursor-pointer hover:underline">Status Center</p>
              <p className="cursor-pointer hover:underline">Contacts</p>
              <p className="cursor-pointer hover:underline">Sitemap</p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-7">
            <div>
              <h1 className="font-bold text-base sm:text-lg">Legal</h1>
            </div>
            <div className="space-y-2 sm:space-y-4 text-xs sm:text-sm">
              <p className="cursor-pointer hover:underline">Privacy Policy</p>
              <p className="cursor-pointer hover:underline">Chat Terms</p>
              <p className="cursor-pointer hover:underline">Affiliate Terms</p>
              <p className="cursor-pointer hover:underline">Terms of Service</p>
              <p className="cursor-pointer hover:underline">DeFi Terms</p>
              <p className="cursor-pointer hover:underline">Cookies Policy</p>
              <p className="cursor-pointer hover:underline">Nexo Card Terms</p>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-2 xl:col-auto mt-8 md:mt-0">
            <div className="font-bold text-base sm:text-lg">
              <h1>Follow Nexo</h1>
            </div>
            <div className="flex space-x-2 sm:space-x-4 py-4 sm:py-7">
              <div className="bg-black border p-2 cursor-pointer hover:opacity-80 transition-opacity">
                <FaXTwitter
                  color="white"
                  size={32}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
              <div className="border bg-black p-2 cursor-pointer hover:opacity-80 transition-opacity">
                <FaYoutube
                  color="white"
                  size={32}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
              <div className="border bg-black p-2 cursor-pointer hover:opacity-80 transition-opacity">
                <FaInstagram
                  color="white"
                  size={32}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
