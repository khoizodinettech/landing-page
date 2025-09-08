"use client";
import DOMPurify from 'dompurify';
import useFetchSimple from '../../hooks/usehookSimple';
import { useEffect, useMemo } from 'react';
const Simple = () => {
     const { simple,  fetchSimple } = useFetchSimple();

  useEffect(() => {
    fetchSimple();
  }, []);

   const sortedSimple = useMemo(() => {
    const arr = Array.isArray(simple) ? [...simple] : [];
    return arr.sort((a, b) => {
      const ad = new Date(a?.createdAt ?? 0).getTime();
      const bd = new Date(b?.createdAt ?? 0).getTime();
      return bd - ad;
    });
  }, [simple]);
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white">
      <div className="py-14 px-5 md:py-20 md:px-40">
        <div className="flex flex-col justify-between items-center text-center">
          <h1 className="font-bold text-h1_title_mobi sm:text-h1_title">
            Simple, Transparent Pricing
          </h1>
          <h2 className="font-inter font-normal text-h2_container_mobi sm:text-h2_container pt-4">
            Choose the perfect plan for your needs. No hidden fees.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-7 sm:gap-8 sm:pt-16 w-full max-w-7xl mx-auto justify-items-center">
          {(sortedSimple ?? []).map((plan) => {
            return (
              <div key={plan.id} className={`w-full max-w-sm rounded-box ${
                plan.popular ? 'border-2 border-border_simple flex flex-col items-center pt-3 relative' : 'shadow-sl'
              }`}>
                <h2 className={`font-bold text-h2_container text-center pt-5 ${plan.popular ? "pt-5" : "pt-8"}`}>
                  {plan.name}
                </h2>
                {plan.popular && (
                  <span className="absolute -top-3 -right-3 px-3 py-1 bg-purple border border-border_simple text-white text-span_mobi font-medium rounded-md">
                    Most Popular
                  </span>
                )}
                <div className="text-center">
                  <span className="font-bold text-h2_simple_box">{plan.price}</span>
                  <span className="font-normal text-span text-span_simple">{plan.cusmonth}</span>
                </div>
                <div className="flex flex-col justify-center items-center px-8 pb-8 pt-10 w-full">
                  <ul className="grid  gap-3 w-full max-w-box_simple pb-7  font-normal  text-span">
                    <li className=" text-left ">
                     <div
                        className="[&_p]:flex [&_p]:items-center [&_p]:gap-2 [&_p]:m-0 [&_svg]:shrink-0"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(plan.content) }}
                      />
                    </li>
                  </ul>
                  <button className={`cursor-pointer font-bold text-span w-full max-w-btn_simple h-12 rounded-box flex justify-center items-center ${
                    plan.popular
                      ? 'text-white bg-purple' 
                      : 'border-solid border-2 border-border_simple text-purple bg-btn' 
                  }`}>
                    Get started
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Simple;
