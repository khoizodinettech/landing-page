import { ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <div className="w-screen h-screen relative flex items-center justify-center ">
      <div className="absolute inset-0 opacity-20 z-0 bg-avatar_bg bg-cover bg-no-repeat" />
      <div className="absolute inset-0 z-10 bg-gradient_top " />
      <div className="w-full md:w-[80%] flex flex-col justify-center items-center z-20">
        <div className="w-full md:w-[80%] flex flex-col justify-center items-center">
          <div className="flex flex-col mx-2">
            <h1 className="font-inter font-bold text-titleHeaderMob md:text-titleHeader text-center">
              Intelligent Conversations
            </h1>
            <div className="flex justify-center items-center gap-3">
              <h1 className="font-inter font-bold text-titleHeaderMob md:text-titleHeader">
                with
              </h1>
              <h1 className="font-inter font-bold text-titleHeaderMob md:text-titleHeader text-purple">
                AI Chatbot
              </h1>
            </div>
          </div>
          <div className="mb-8 flex flex-col justify-center items-center">
            <h2 className=" mx-1 text-center font-medium text-h2__header_title_mobi md:text-h2_header_title">
              Enhance customer engagement with our powerful AI chatbot. Automate
              support,
            </h2>
            <h2 className=" mx-3 text-center font-medium text-h2_title_mobi md:text-h2_header_title">
              boost conversions, and deliver personalized experiences 24/7.
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <button className="flex justify-center items-center bg-bg_col-0 text-white cursor-pointer font-inter font-bold text-btn tracking-ls w-btn_header h-12 rounded-xl">
            Get started
            <ArrowRight />
          </button>
          <button className="flex justify-center items-center bg-white cursor-pointer font-inter font-bold text-btn tracking-ls w-btn_header h-12 rounded-xl">
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
