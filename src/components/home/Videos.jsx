import React from "react";
import StyledUnderline from "../common/ui/StyledUnderline";
import FacilitiesAndServicesVideos from "./../facilities-and-services/FacilitiesAndServicesVideos";

export default function Videos({ videos }) {
  return (
    <section className="w-full p-12 py-14">
      <div className="mb-8 inline-block">
        <h2 className="text-2xl md:text-3xl font-bold text-text">Videos</h2>
        <StyledUnderline />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {videos?.slice(0, 4)?.map((item, i) => (
          <iframe
            key={i}
            className="sm:mb-0 mb-5 h-[300px] w-full rounded-xl shadow-md overflow-hidden cus-md3:h-[300px]"
            src={`https://www.youtube.com/embed/${
              item?.youtube_link?.split("/")[3]?.split("?")[0]
            }`}
          />
        ))}
      </div>

      {/* <div className="flex justify-center items-center mt-10 gap-4">
        <button className="px-4 py-2 rounded-xl border border-border text-text hover:bg-border transition cursor-pointer">
          Previous
        </button>
        <button className="px-4 py-2 rounded-xl bg-primary/90 text-white font-medium hover:bg-primary transition cursor-pointer">
          Next
        </button>
      </div> */}
    </section>
  );
}
