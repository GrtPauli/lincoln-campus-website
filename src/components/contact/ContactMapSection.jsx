import React from "react";

export default function Campuses() {
  return (
    <div className="w-full p-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-secondary rounded-xl shadow-sm overflow-hidden">
          <div className="h-56 bg-primary/10 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25605.251622725515!2d101.598409!3d3.104921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c198eafa133%3A0x6fd7916de21e7871!2sLincoln%20University%20College!5e1!3m2!1sen!2sng!4v1755785990474!5m2!1sen!2sng"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 right-4 bg-primary text-secondary px-3 py-1 rounded-full text-sm font-semibold">
              Main Campus
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-text mb-4">
              Lincoln University College
            </h2>
            <p className="text-text/60 mb-4">
              No. 2, Jalan Stadium, Section 13, 40100 Shah Alam, Selangor,
              Malaysia.
            </p>
            <p className="text-text/60">Phone: +603 5519 6500</p>
            <p className="text-text/60">Fax: +603 5519 5188</p>
          </div>
        </div>

        <div className="bg-secondary rounded-xl shadow-sm overflow-hidden">
          <div className="h-56 bg-primary/10 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15931.00468284801!2d101.6229!3d3.07263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4d393be0977b%3A0x5a7f17eab0ff5d0a!2sLincoln%20University%20College%20(Petaling%20Jaya%20Campus)!5e0!3m2!1sen!2smy!4v1755786064716!5m2!1sen!2smy"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 right-4 bg-primary text-secondary px-3 py-1 rounded-full text-sm font-semibold">
              Stadium Campus
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-text mb-4">
              Lincoln University College
            </h2>
            <p className="text-text/60 mb-4">
              No. 2, Jalan SS 6/12, 47301 Petaling Jaya, Selangor, Malaysia.
            </p>
            <p className="text-text/60">Phone: +603 7806 3478</p>
            <p className="text-text/60">Fax: +603 7806 3479</p>
          </div>
        </div>
      </div>
    </div>
  );
}
