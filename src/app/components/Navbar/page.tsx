"use client";

import Image from "next/image";
import React, { useState } from "react";
import image from "@/app/assets/nexo.png";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { CiSaveDown2 } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { LuArrowUpDown } from "react-icons/lu";
import { LuPentagon } from "react-icons/lu";
import { IoCard } from "react-icons/io5";
import { RiExchange2Line } from "react-icons/ri";
import { LuBriefcase } from "react-icons/lu";
import { RiChatQuoteLine } from "react-icons/ri";
import { LuWarehouse } from "react-icons/lu";
import { GrGateway } from "react-icons/gr";
import { FaHandshake } from "react-icons/fa";
import { TbBrandNexo } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { CgInsights } from "react-icons/cg";
import { IoIosHelpBuoy } from "react-icons/io";
import { FaChartBar, FaHandHoldingUsd } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi"; // Import hamburger and close icons
import Link from "next/link";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-4 sm:px-7 py-5 relative z-50">
        <div>
          <Image
            src={image}
            alt="Nexo logo"
            width={120}
            height={50}
            className="w-24 sm:w-32"
          />
        </div>

        <ul className="hidden lg:flex text-white space-x-6 xl:space-x-10 relative">
          <li
            className="cursor-pointer relative"
            onMouseEnter={() => setOpenDropdown("personal")}
          >
            <span>Personal</span>
          </li>

          <li
            className="cursor-pointer relative"
            onMouseEnter={() => setOpenDropdown("business")}
          >
            <span>Business</span>
          </li>

          <li className="cursor-pointer">Markets</li>
          <li
            onMouseEnter={() => setOpenDropdown("company")}
            className="cursor-pointer"
          >
            Company
          </li>
        </ul>

        <div className="hidden lg:block">
          <Link href="../../screens/shop">
            <button
              title="Start Using Nexo"
              className="bg-teal-400 hover:bg-teal-200 p-5 font-bold rounded-full"
            >
              Start Using Nexos
            </button>
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-90 z-40 pt-20 px-6 pb-10 overflow-y-auto">
          <div className="flex flex-col space-y-6">
            <div
              className="cursor-pointer py-3 border-b border-gray-700"
              onClick={() =>
                setOpenDropdown(openDropdown === "personal" ? null : "personal")
              }
            >
              <div className="flex justify-between items-center">
                <span className="text-white text-lg font-medium">Personal</span>
                <span className="text-white">
                  {openDropdown === "personal" ? "−" : "+"}
                </span>
              </div>

              {openDropdown === "personal" && (
                <div className="mt-3 pl-4 space-y-5">
                  <h2 className="text-yellow-600 font-bold text-md">
                    Grow your Savings
                  </h2>

                  <div className="flex space-x-4 items-start">
                    <CiSaveDown2 size={22} className="mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">
                        Flexible Savings
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Earn interest with daily payouts and no lock-ups
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-start">
                    <CiCalendar size={22} className="mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">
                        Fixed-term Savings
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Earn more interest for longer periods of up to 12 months
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-start">
                    <LuArrowUpDown size={22} className="mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">
                        Dual Investment
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Earn high yield while buying low and selling high
                      </p>
                    </div>
                  </div>

                  <h2 className="text-yellow-600 font-bold text-md pt-2">
                    Manage your assets
                  </h2>

                  <div className="flex space-x-4 items-start">
                    <RiExchange2Line size={22} className="mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Exchange</h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Swap over 100 digital assets with just a tap
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-start">
                    <FaHandHoldingUsd
                      size={22}
                      className="mt-1 flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-semibold text-white">Credit Line</h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Borrow funds without selling your digital assets
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-start">
                    <FaChartBar size={22} className="mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Futures</h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Capitalize on uptrends & downtrends with perpetuals
                      </p>
                    </div>
                  </div>

                  <h2 className="text-yellow-600 font-bold text-md pt-2">
                    Spend anywhere
                  </h2>

                  <div className="flex space-x-4 items-start">
                    <IoCard size={22} className="mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Nexo Card</h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Spend while earning interest and receiving cashback.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="cursor-pointer py-3 border-b border-gray-700"
              onClick={() =>
                setOpenDropdown(openDropdown === "business" ? null : "business")
              }
            >
              <div className="flex justify-between items-center">
                <span className="text-white text-lg font-medium">Business</span>
                <span className="text-white">
                  {openDropdown === "business" ? "−" : "+"}
                </span>
              </div>

              {openDropdown === "business" && (
                <div className="mt-3 pl-4 space-y-5">
                  <div className="pb-2">
                    <h2 className="font-bold text-white text-md">
                      Grow your business
                    </h2>
                    <p className="text-gray-300 text-sm mt-1">
                      Discover the many ways Nexo's solutions empower businesses
                      looking to expand their digital assets portfolio
                    </p>
                  </div>

                  <div className="flex space-x-4 items-start">
                    <LuBriefcase size={20} className="mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">
                        Corporate Accounts
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Create a corporate account for your business or family
                        office
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-start">
                    <LuPentagon size={20} className="mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">White Label</h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Customize Nexo's solutions to fit your business needs
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-start">
                    <GrGateway size={20} className="mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">
                        Payment Gateway
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Allow your clients to pay with crypto
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-start">
                    <LuWarehouse size={20} className="mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">
                        Prime Brokerage
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Leverage an all-in-one solution for institutional
                        investors
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-start">
                    <TbBrandNexo size={20} className="mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">
                        Nexo Ventures
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Get the funding your business needs to thrive
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="cursor-pointer py-3 border-b border-gray-700">
              <span className="text-white text-lg font-medium">Markets</span>
            </div>

            <div
              className="cursor-pointer py-3 border-b border-gray-700"
              onClick={() =>
                setOpenDropdown(openDropdown === "company" ? null : "company")
              }
            >
              <div className="flex justify-between items-center">
                <span className="text-white text-lg font-medium">Company</span>
                <span className="text-white">
                  {openDropdown === "company" ? "−" : "+"}
                </span>
              </div>

              {openDropdown === "company" && (
                <div className="mt-3 pl-4 space-y-5">
                  <div className="pb-2">
                    <h2 className="font-bold text-white text-md">
                      Driving the next generation of wealth
                    </h2>
                    <p className="text-gray-300 text-sm mt-1">
                      Nexo has been helping clients grow their digital assets
                      since 2018
                    </p>
                  </div>

                  <div className="flex space-x-4 items-start">
                    <RiChatQuoteLine size={20} className="mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">About</h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Learn more about our values, mission, and what defines
                        us
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-start">
                    <FaHandshake size={20} className="mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Partnerships</h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Get to know our strategic partnerships in sports
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-start">
                    <MdOutlineSecurity
                      size={20}
                      className="mt-1 flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-semibold text-white">Security</h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Discover Nexo's fundamentals-first approach to custody
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-start">
                    <CgInsights size={20} className="mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">
                        Inside Insights
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Stay up to date with the latest from Nexo and crypto
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-start">
                    <LuChartNoAxesCombined
                      size={20}
                      className="mt-1 flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-semibold text-white">Growth plan</h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Explore our strategic initiatives in 2026
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4 items-start">
                    <IoIosHelpBuoy size={20} className="mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Help center</h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Browse helpful articles about Nexo's products
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4">
              <Link
                href="../../screens/shop"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <button
                  title="nexos "
                  className="bg-teal-400 hover:bg-teal-200 p-5 font-bold rounded-full"
                >
                  Start Using Nexos
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Dropdown */}
      {openDropdown && (
        <div
          className="hidden lg:block absolute  left-0 w-full h-[60vh] bg-black/70 text-white p-10 flex flex-col space-y-8 animate-fadeIn z-40"
          onMouseEnter={() => setOpenDropdown(openDropdown)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {openDropdown === "personal" && (
            <div className="grid grid-cols-3 max-w-7xl mx-auto w-full">
              <div className="space-y-5 m-auto">
                <h1 className="text-yellow-700  font-bold text-xl">
                  Grow your Savings
                </h1>

                <div className="flex space-x-4 ">
                  <CiSaveDown2 size={25} />

                  <div>
                    <h1 className="font-semibold">Flexible Savings</h1>

                    <p>
                      Earn interest with daily <br /> payouts and no lock-ups
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4 ">
                  <CiCalendar size={25} />
                  <div>
                    <h1 className="font-semibold">Fixed-term Savings</h1>
                    <p>
                      Earn more interest for longer
                      <br /> periods of up to 12 months
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4 ">
                  <LuArrowUpDown size={25} />
                  <div>
                    <h1 className="font-semibold">Dual Investment</h1>
                    <p>
                      Earn high yield while <br /> buying low and selling high
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                <h1 className="text-yellow-700  font-bold text-xl">
                  Manage your assets
                </h1>
                <div className="flex space-x-4 ">
                  <RiExchange2Line size={25} />
                  <div>
                    <h1 className="font-semibold">Exchange</h1>
                    <p>Swap over 100 digital assets with just a tap</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <FaHandHoldingUsd size={25} />
                  <div>
                    <h1>Credit Line</h1>
                    <p>Borrow funds without selling your digital assets</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <FaChartBar size={25} />
                  <div>
                    <h1 className="font-semibold">Futures</h1>
                    <p>Capitalize on uptrends % downtrends with perpetuals</p>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                <h1 className="text-yellow-700  font-bold text-xl">
                  Spend anywhere
                </h1>
                <div className="flex space-x-4 ">
                  <IoCard size={25} />
                  <div>
                    <h1 className="font-semibold">Nexo Card</h1>
                    <p>
                      Spend while earning interest <br /> and receiving
                      cashback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {openDropdown === "business" && (
            <div className="grid grid-cols-3 max-w-7xl mx-auto w-full">
              <div className="col-start-1 space-y-4 ms-auto">
                <h1 className="text-xl font-bold">Grow your business</h1>
                <p>
                  Discover the many ways Nexo's
                  <br /> solutions empower businesses looking
                  <br /> to expand their digital assets portfolio
                </p>
              </div>
              <div className="flex justify-evenly  col-start-2 col-end-4">
                <div className="space-y-5">
                  <div className="flex space-x-4 ">
                    <LuBriefcase size={20} className="" />
                    <div className="">
                      <h1 className="font-semibold text-lg">
                        Corporate Accounts
                      </h1>
                      <p>
                        Create a corporate account for <br /> your business or
                        family office
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <LuPentagon size={20} />
                    <div>
                      <h1 className="text-lg font-semibold">White Label</h1>
                      <p>
                        Customize Nexo's solutions to fit
                        <br /> your business needs
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <GrGateway size={20} />
                    <div>
                      <h1 className="text-lg font-semibold">Payment Gateway</h1>
                      <p>Allow your clients to pay with crypto</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex space-x-4 ">
                    <LuWarehouse size={20} />
                    <div>
                      <h1 className="text-lg font-semibold">Prime Brokerage</h1>
                      <p>
                        Leverage an all-in-one solution
                        <br /> for institutional investors
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <TbBrandNexo size={20} />
                    <div>
                      <h1 className="text-lg font-semibold">Nexo Ventures</h1>
                      <p>
                        Get the funding your business
                        <br /> needs to thrive
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {openDropdown === "company" && (
            <div className="grid grid-cols-4 max-w-7xl mx-auto w-full">
              <div className="space-y-4">
                <h1 className="text-xl font-bold">
                  Driving the next
                  <br /> generation of wealth
                </h1>
                <p>
                  Nexo has been helping clients grow their <br /> digital assets
                  since 2018
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <RiChatQuoteLine size={20} />
                  <div className="space-y-2">
                    <h1 className="font-semibold text-lg">About</h1>
                    <p>
                      Learn more about our values,
                      <br /> mission, and what defines us as a company
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <FaHandshake size={20} />
                  <div className="space-y-2">
                    <h1 className="text-lg font-semibold">Partnerships</h1>
                    <p>
                      Get to know our stratgic
                      <br /> partnerships in the world of sports
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex  space-x-4">
                  <MdOutlineSecurity size={20} />
                  <div className="space-y-2">
                    <h1 className="text-lg font-semibold">Security</h1>
                    <p>
                      Discover Nexo's fundamentals-first
                      <br /> approach to custody, compliance and more
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <CgInsights size={20} />
                  <div className="space-y-2">
                    <h1 className="text-lg font-semibold">Inside Insights</h1>
                    <p>
                      Stay up to date with the latest from
                      <br /> Nexo and the crypto world
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <LuChartNoAxesCombined size={20} />
                  <div>
                    <h1 className="text-lg font-semibold">Growth plan</h1>
                    <p>Explore our strategic intiatives in 2026</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <IoIosHelpBuoy size={20} />
                  <div>
                    <h1 className="text-lg font-semibold">Help center</h1>
                    <p>
                      Browse hundred of helpful articles about Nexo's products
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;
