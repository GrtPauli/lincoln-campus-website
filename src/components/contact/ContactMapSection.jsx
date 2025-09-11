import React from "react";

export default function Campuses() {
  return (
    <div className="w-full p-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-secondary rounded-xl shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div className="h-56 bg-primary/10 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2014900.8735095311!2d8.065144615083694!3d9.477969748488947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10ffb65412ce6e99%3A0xb391f6076bb01bbe!2sGombe%20State%20University%20of%20Science%20and%20Technology%2C%20Kumo!5e0!3m2!1sen!2sng!4v1757313264369!5m2!1sen!2sng"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="absolute top-4 right-4 bg-primary text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                Gombe Campus
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-text mb-4">
                Lincoln University Gombe
              </h2>
              <p className="text-text/60 mb-4">
                Lincoln University Malaysia, Kumo Gombe State.
              </p>
            </div>
          </div>

          <p className="text-text/60 m-6 mt-0">Phone: +2348038341496</p>
        </div>

        <div className="bg-secondary rounded-xl shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div className="h-56 bg-primary/10 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.3963690013693!2d7.904029074314221!3d8.842638691879728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1051e55b602c2e83%3A0xac4fafd2fa0882ca!2sLincon%20University%20Administrative%20Block!5e0!3m2!1sen!2sng!4v1757313127849!5m2!1sen!2sng"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="absolute top-4 right-4 bg-primary text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                NSUK Campus
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-text mb-4">
                Lincoln University Malaysia (NSUK Campus)
              </h2>
              <p className="text-text/60 mb-4">
                Lincoln University Malaysia admin block, Nassarawa State
                University, Keffi.
              </p>
            </div>
          </div>

          <p className="text-text/60 m-6 mt-0">Phone: +2348038341496</p>
        </div>
      </div>
    </div>
  );
}
