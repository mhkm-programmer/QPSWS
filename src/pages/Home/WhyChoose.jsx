import React from "react";

const WhyChoose = () => {
  return (
    <section className="px-6 py-6 lg:py-8 bg-[#F5F5DC] dark:bg-gray-800 dark:text-gray-100">
      {/* Favicon Logo */}
      <div className="flex items-center justify-center mb-8">
        <img 
          src="https://8upload.com/image/67a01c3b4ad22/Al-FWZ.jpg" 
          alt="LuxeFurnish Logo" 
          className="h-20 w-20 rounded-full shadow-lg" 
        />
      </div>

      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose <span className="text-[#6B4226]">AL-FWZ Furniture</span>
        </h2>
        <p className="mb-8 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Experience unmatched excellence in custom furniture, upholstery, and interior design services. Here's why we stand out:
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Premium Furniture */}
          <div className="group flex flex-col items-center p-6 space-y-4 rounded-lg bg-white dark:bg-gray-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <div className="flex items-center justify-center w-24 h-24 rounded bg-[#E8D9C5] dark:bg-[#d35400] transition-colors duration-300 group-hover:bg-[#d35400] group-hover:dark:bg-[#8B5A2B]">
              <img
                src="https://8upload.com/image/67a000235804f/Premium_Furniture.jpg"
                alt="Premium Furniture Icon"
                className="h-20 w-20 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Premium Furniture
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              High-quality, custom-made furniture designed to complement your style and space.
            </p>
          </div>

          {/* Card 2: Skilled Upholstery */}
          <div className="group flex flex-col items-center p-6 space-y-4 rounded-lg bg-white dark:bg-gray-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <div className="flex items-center justify-center w-24 h-24 rounded bg-[#E8D9C5] dark:bg-[#d35400] transition-colors duration-300 group-hover:bg-[#d35400] group-hover:dark:bg-[#8B5A2B]">
              <img
                src="https://8upload.com/image/67a000233869c/Skilled_Upholstery.jpg"
                alt="Skilled Upholstery Icon"
                className="h-20 w-20 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Skilled Upholstery
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Expert restoration and custom upholstery services to breathe new life into your furniture.
            </p>
          </div>

          {/* Card 3: Modern Interior Design */}
          <div className="group flex flex-col items-center p-6 space-y-4 rounded-lg bg-white dark:bg-gray-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <div className="flex items-center justify-center w-24 h-24 rounded bg-[#E8D9C5] dark:bg-[#d35400] transition-colors duration-300 group-hover:bg-[#d35400] group-hover:dark:bg-[#8B5A2B]">
              <img
                src="https://8upload.com/image/67a0002314733/Modern_Interior_Design.jpg"
                alt="Modern Interior Design Icon"
                className="h-20 w-20 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Modern Interior Design
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Transform your spaces with creative and elegant design solutions tailored to your vision.
            </p>
          </div>

          {/* Card 4: Affordable Pricing */}
          <div className="group flex flex-col items-center p-6 space-y-4 rounded-lg bg-white dark:bg-gray-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <div className="flex items-center justify-center w-24 h-24 rounded bg-[#E8D9C5] dark:bg-[#d35400] transition-colors duration-300 group-hover:bg-[#d35400] group-hover:dark:bg-[#8B5A2B]">
              <img
                src="https://8upload.com/image/67a00022e0e7f/Affordable_Pricing.jpg"
                alt="Affordable Pricing Icon"
                className="h-20 w-20 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Affordable Pricing
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              High-quality services at competitive prices, ensuring the best value for your investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;