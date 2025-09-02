import React, { useState } from "react";
import { Image } from "antd";
import { BASE_API_URL } from "../../../constants";
import { AppModal } from "../../common/Modal";

export const NewsItemCard = ({ img, title, onReadMore, post_date, tag }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={img}
          width="100%"
          height="100%"
          className="object-center object-cover hover:scale-105 transition-transform duration-500"
          preview={false}
        />
        <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {tag || "News"}
        </span>
        <span className="absolute bottom-3 right-3 bg-text/70 text-white text-xs px-2 py-1 rounded-md">
          {post_date}
        </span>
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-base font-semibold text-text mb-3">
          {title ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis at itaque distinctio!"}
        </h3>
        <div className="flex justify-end mt-2">
          <button
            onClick={onReadMore}
            className="text-primary font-medium hover:underline"
          >
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default function NewsCards({ news }) {
  const [modal, setModal] = useState({ data: null, open: false });

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {news?.map((item, index) => (
          <NewsItemCard
            key={item.id || index}
            img={`${BASE_API_URL}/images/news/${item.post_image_url}`}
            title={item.post_title}
            onReadMore={() => setModal({ data: item, open: true })}
            post_date={item.post_date}
            tag={item.tag}
          />
        ))}
      </div>

      <AppModal
        open={modal.open}
        onDismiss={() => setModal({ open: false })}
        width={600}
        destroyOnClose
      >
        <div className="w-[100%] h-[400px]">
          <Image
            preview={false}
            src={`${BASE_API_URL}/images/news/${modal?.data?.post_image_url}`}
            width="100%"
            height="100%"
            className="object-center object-cover"
          />
        </div>

        <div className="mt-5">
          <p className="leading-loose">{modal?.data?.post_content}</p>
        </div>
      </AppModal>
    </section>
  );
}
