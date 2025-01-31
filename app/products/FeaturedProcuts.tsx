import React from "react";
import { Bottles } from "./_constant/Product";
import Image from "next/image";
import HomeWrapper from "../common/components/HomeWrapper";
import Link from "next/link";

const FeaturedProcuts = () => {
  return (
    <HomeWrapper>
      <div>
        <h1 className="text-center font-bold text-[#7B0323] text-5xl font-serif">
          Discover Our Featured Products
        </h1>
        <div className="flex flex-wrap justify-center gap-20 pb-6 pt-10">
          {Bottles.slice(0, 3).map((bottle, i) => (
            <div key={i} className="relative group w-[280px]">
              <Link href={`/products/${bottle.slug}`}>
                <Image
                  src={bottle.img}
                  width={200}
                  height={300}
                  alt=""
                  className="w-[280px] h-[400px] object-cover rounded-xl hover:scale-110 transition-all"
                />
                <div></div>
                {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center rounded-xl">
                  <span className="text-[#7B0323] text-5xl font-serif z-50">
                    {bottle.name}
                  </span>
                </div> */}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="border-[#7B0323] border-2 py-2 px-4 rounded-lg text-[#7B0323] hover:bg-[#7B0323] hover:text-white transition-all delay-100 duration-300">
            Discover More
          </button>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default FeaturedProcuts;
