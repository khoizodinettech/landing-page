import {
  ChartLine,
  Grid2X2Icon,
  HeartPulse,
  MessagesSquare,
} from "lucide-react";

const Choose = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="mx-5 flex flex-col justify-center items-center gap-6 md:gap-choose my-15 md:my-20 ">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-h1_title_mobi font-bold md:text-h1_title font-inter">
            Why Choose Us
          </h1>
          <h2 className=" text-center font-inter font-normal text-h2_container_mobi md:text-h2_container">
            Discover the features that make our platform stand out from the
            competition
          </h2>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 mb-exper_box gap-6 md:gap-8 ">
          <div className="cursor-pointer flex flex-col justify-center rounded-box shadow-sl items-center w-full max-w-box_max_mobi md:max-w-box_max h-40 md:h-56">
            <MessagesSquare className="w-10 h-10 text-purple mb-3 mt-6" />
            <h2 className="font-inter font-bold text-h2_container_mobi tracking-ls md:text-h2_container sm:px-4 text-center">
              Natural Language Processing
            </h2>
            <span className="font-inter font-normal mb-5 sm:mb-0 px-6 sm:px-8 text-span_mobi md:text-span text-center">
              Understands context and responds like a human
            </span>
          </div>
          <div className=" cursor-pointer flex flex-col justify-center rounded-box shadow-sl items-center w-full max-w-box_max_mobi md:max-w-box_max h-40 md:h-56">
            <Grid2X2Icon className="w-10 h-10 text-purple mb-3 mt-6" />
            <h2 className="text-center font-inter font-bold text-h2_container_mobi tracking-ls md:text-h2_container">
              Multi-channel Support
            </h2>
            <span className="font-inter font-normal mb-5 sm:mb-0 px-6 sm:px-9 text-span_mobi md:text-span text-center">
              Deploy on wedsite, mobile apps, and messaging plaforms
            </span>
          </div>
          <div className="cursor-pointer flex flex-col justify-center rounded-box shadow-sl items-center w-full max-w-box_max_mobi md:max-w-box_max h-40 md:h-56">
            <HeartPulse className="w-10 h-10 text-purple mb-3" />
            <h2 className="text-center font-inter font-bold text-h2_container_mobi tracking-ls md:text-h2_container">
              Custom Training
            </h2>
            <span className="font-inter font-normal px-6 sm:px-8 text-span_mobi md:text-span text-center">
              Train with your data for industry-specific responses
            </span>
          </div>
          <div className="cursor-pointer flex flex-col justify-center rounded-box shadow-sl items-center w-full max-w-box_max_mobi md:max-w-box_max h-40 md:h-56">
            <ChartLine className="w-10 h-10 text-purple mb-3" />
            <h2 className="text-center font-inter font-bold text-h2_container_mobi tracking-ls md:text-h2_container">
              Analytics Dashboard
            </h2>
            <span className="font-inter font-normal px-6 sm:px-8 text-span_mobi md:text-span text-center">
              Track performance and optimize conversations
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Choose;
