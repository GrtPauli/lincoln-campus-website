import React from "react";
import StyledUnderline from "../common/ui/StyledUnderline";

export default function FacilitiesAndServicesVideos() {
  const videos = [
    { youtube_link: "https://youtu.be/23h2UKV77wE?si=4QlW1O28e1VBpcg7" },
    { youtube_link: "https://youtu.be/bC74j4sZMZI?si=E6LmspqqsHgSJycx" },
    { youtube_link: "https://youtu.be/UBye5lxxJTk?si=aknX0vRWxBGxgDqd" },
    { youtube_link: "https://youtu.be/0oi6-eAQsC0?si=E4wcIN1E6-SiXZOV" },
  ];

  // helper to extract videoId correctly from both formats
  const getYoutubeId = (url) => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname === "youtu.be") {
        return parsed.pathname.slice(1); // remove leading "/"
      }
      return parsed.searchParams.get("v");
    } catch {
      return "";
    }
  };

  return (
    <section className="w-full p-12 py-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {videos.map((item, i) => {
          const videoId = getYoutubeId(item.youtube_link);
          return (
            <iframe
              key={i}
              className="sm:mb-0 mb-5 aspect-video w-full rounded-xl shadow-md overflow-hidden"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`Facilities Video ${i + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          );
        })}
      </div>
    </section>
  );
}
