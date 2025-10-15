import React from "react";
import Image from "next/image";

const Workwithus = () => {
  return (
    <section className="relative bg-[#031520] text-white overflow-hidden py-20 font-[Outfit]">
      <div className="absolute inset-0">
        <Image
          src="/hero-img-overlay.png"
          alt="Background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="Mycontainer relative container mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="mb-4">
            <span
              className="text-[17px] leading-[22px] font-medium text-white bg-gradient-to-r from-[#2b72ff] to-[#04bdd1] px-4 py-1 rounded-tl-[15px] rounded-br-[15px]"
              style={{ fontFamily: "Outfit, sans-serif", fontWeight: 500 }}
            >
              WHY WORK WITH US
            </span>
          </div>

          <h2
            className="
              text-white font-medium mb-6
              text-[31px] leading-[34px]          /* 📱 mobile */
              sm:text-[32px] sm:leading-[40px]    /* 📱 tablets */
              md:text-[40px] md:leading-[50px]    /* 💻 laptops */
              lg:text-[46px] lg:leading-[55px]    /* 🖥️ desktops */
              max-w-[90%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%]
              text-left
              text-balance
              "
            style={{ fontFamily: "Outfit, sans-serif", fontWeight: 500 }}
          >
            We Guarantee Complex Modern Approach & Long-Lasting Results
          </h2>

          <p
            className="text-[19px] leading-[30px] font-light text-[#babbbf] mb-8 max-w-xl"
            style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300 }}
          >
            If you’re augue placerat est, nec semper nisl erat ac ex el commodo
            ac. Aenean congue lorem ipsum dolor sit amet – consectetur
            adipiscing elit magna, molestie iaculis sit amet commodo tellus
            consectetur luctus nec ullamcorper mattis nibh augue placerat est,
            nec semper nisl eratac.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[21px] leading-[27px] font-normal text-white">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-[#00c1cf]">✔</span> Top industry
                specialists
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00c1cf]">✔</span> 100% Money back
                guarantee
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00c1cf]">✔</span> Constant innovations
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-[#00c1cf]">✔</span> Complex solutions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00c1cf]">✔</span> Flexible prices
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00c1cf]">✔</span> 24/7 Customer support
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="overflow-hidden rounded-bl-[80px]">
            <Image
              src="/workwithus.jpg"
              alt="Team Working"
              width={430}
              height={430}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workwithus;
