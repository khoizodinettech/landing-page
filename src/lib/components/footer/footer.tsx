"use client";
import { ArrowUpRight, Plus } from "lucide-react";
const Footer = () => {
  return (
    <div className="w-full bg-bg_col-0 flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-6xl flex-row justify-between items-center px-1.5 py-2 mx-auto my-6 md:my-40 ">
        <div className="w-full flex flex-col sm:flex-row justify-between px-1.5">
          <div className="flex-col ">
            <h1 className="font-inter font-bold text-h2__header_title_mobi sm:text-h2_header_title text-white">
              Subscribe to these exclusive deals
            </h1>
            <div className="flex justify-between pt-9">
              <span className="font-bold font-inter text-span_mobi sm:text-span tracking-ls text-white">
                Enter your Email Address
              </span>
              <button className="text-white font-bold bg-transparent items-center cursor-pointer">
                <ArrowUpRight />
              </button>
            </div>
            <input
              className="h-4 bg-transparent w-full border-b-2"
              type="email"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-ft_box px-1.5">
            <div className="flex flex-row justify-between sm:justify-start sm:flex-col pt-ft sm:pt-0 gap-4">
              <h3 className=" font-inter font-bold text-white text-span tracking-ls">
                Important links
              </h3>
              <span className="text-white flex sm:hidden ">
                <Plus />
              </span>
              <ul className="flex-col gap-ft_mobi sm:gap-ft hidden sm:flex">
                <li>
                  <a href="#" className="text-white font-normal font-roboto text-span opacity-75">
                    Cheap flights
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-normal font-roboto text-span opacity-75">
                    Flight status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-normal font-roboto text-span opacity-75">
                    Trip ideas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-normal font-roboto text-span opacity-75">
                    Romantic Destinations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-normal font-roboto text-span opacity-75">
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-row justify-between sm:justify-start sm:flex-col gap-4">
              <h3 className=" font-inter font-bold text-[#FFFFFF] text-span tracking-ls">
                We're Booking
              </h3>
              <span className="text-white flex sm:hidden">
                <Plus />
              </span>

              <ul className="flex-col gap-ft_mobi sm:gap-ft hidden sm:flex">
                <li>
                  <a href="#" className="text-white opacity-75 font-normal font-roboto text-spanfont-normal text-span ">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white opacity-75 font-normal font-roboto text-spanfont-normal text-span ">
                    Investor relations
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-row justify-between sm:justify-start sm:flex-col gap-[17px] ">
              <h3 className="w-full  font-bold text-[#FFFFFF] text-span tracking-ls">
                Power up your business
              </h3>
              <span className="text-white flex sm:hidden">
                <Plus />
              </span>
              <ul className=" flex-col gap-ft_mobi sm:gap-ft hidden sm:flex">
                <li>
                  <a href="#" className="text-white opacity-75 font-normal font-roboto text-span">
                    Join your fleet
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white opacity-75 font-normal font-roboto text-span">
                    Premium Connectivity Partner
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-8 justify-between mt-[100px] px-1.5">
          <span className="font-medium text-span_mobi_2025_client sm:text-span_mobi text-white order-2 sm:order-1">
            © 2025 Zodinet. All right reserved
          </span>
          <div className="sm:flex gap-6 hidden sm:order-2">
            <a
              href="#"
              className=" font-bold  text-span text-white tracking-ls"
            >
              Term and conditions
            </a>
            <a
              href="#"
              className=" font-bold  text-span text-white tracking-ls"
            >
              Privacy policy
            </a>
          </div>
          <div className="flex justify-between gap-6  font-bold font-span text-white tracking-ls order-1 sm:order-3">
            <a
              href="#"
              className=" font-bold  text-span text-white tracking-ls"
            >
              Facebook
            </a>
            <a
              href="#"
              className=" font-bold  text-span text-white tracking-ls"
            >
              Instagram
            </a>
            <a
              href="#"
              className=" font-bold  text-span text-white tracking-ls"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;