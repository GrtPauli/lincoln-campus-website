import React, { useState } from "react";
import StyledUnderline from "../StyledUnderline";

export default function Gallery({ title = "Campus Gallery", images = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div id="gallery" className="py-14 p-12">
      <div className="max-w-7xl mx-auto">
        <div className="inline-block mb-9">
          <h2 className="text-2xl">{title}</h2>
          <StyledUnderline />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg bg-border/50 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-bg bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl w-full">
              <div className="relative">
                <button
                  className="absolute -top-10 right-0 text-secondary text-3xl"
                  onClick={() => setSelectedImage(null)}
                >
                  &times;
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-screen object-contain"
                />
                <div className="text-secondary text-center mt-2">
                  <p className="text-lg">{selectedImage.alt}</p>
                  {selectedImage.category && (
                    <p className="text-sm text-text/40">
                      {selectedImage.category}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
