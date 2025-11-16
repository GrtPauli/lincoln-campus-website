import React from "react";
import StyledUnderline from "../common/ui/StyledUnderline";
import FacilitiesAndServicesVideos from "./../facilities-and-services/FacilitiesAndServicesVideos";

export default function Videos({ videos }) {
  return (
    <section className="w-full p-12">
      <div className="mb-1 inline-block">
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
    </section>
  );
}
