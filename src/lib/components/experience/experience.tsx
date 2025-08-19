const Experience = () => {
  return (
    <div className="w-full h-experience flex justify-center items-center bg-experience">
      <div className="text-center my-exper_box mx-6 sm:my-20 sm:mx-64 ">
        <div className="grid grid-rows-2 gap-4">
          <h1 className="text-center font-bold text-h1_title_mobi md:text-h1_title font-inter">
            Ready to Transform Your Customer Experience?
          </h1>
          <span className=" text-center  font-normal text-span_mobi md:text-span ">
            Join thousands of businesses using our AI chatbot to deliver
            exceptional customer service around the clock.
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5 mt-exp">
          <button className="font-inter px-2 py-3 font-bold text-btn cursor-pointer rounded-lg bg-bg_col-0 w-btn md:w-btn_exp text-white h-12">
            Start Free Trial
          </button>
          <button className="font-inter px-2 py-3 font-bold text-btn cursor-pointer rounded-lg w-btn md:w-btn_exp h-12 border-2 ">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};
export default Experience;
