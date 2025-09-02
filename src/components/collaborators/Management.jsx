import React from "react";
import Accordion from "../common/ui/Accordion";
import MessageFromViceChancellorLUNigeriaImg from "../../assets/Message From Vice-Chancellor LU Nigeria.jpg";

export default function ManagementContent() {
  const researchProjects = [
    {
      title: "Message From Chairman and President LUC Malaysia",
      content: <div className="space-y-3 text-sm text-text"></div>,
    },
    {
      title: "Message From Vice Chairman and CEO LU Nigeria",
      content: <div className="space-y-3 text-sm text-text"></div>,
    },
    {
      title: "Message From Chancellor LUC Malaysia",
      content: <div className="space-y-3 text-sm text-text"></div>,
    },
    {
      title: "Message From Pro-Chancellor LUC Malaysia",
      content: <div className="space-y-3 text-sm text-text"></div>,
    },
    {
      title: "Message From Vice-Chancellor LU Nigeria",
      content: (
        <div className="space-y-3 text-sm text-text">
          <div className="space-y-3 text-sm text-text">
            <div className="flex gap-5">
              <img
                src={MessageFromViceChancellorLUNigeriaImg}
                className="h-[200px] w-auto object-cover rounded-xl"
              />

              <div>
                <p className="font-semibold text-2xl mb-2">
                  Professor Adamu Sadiq Abubakar
                </p>
                <p className="">Vice Chancellor of Lincoln University Kumo</p>
              </div>
            </div>
            <p className="leading-loose">
              As the Vice Chancellor of Lincoln University Kumo, I am honored to
              lead this esteemed institution, which is a product of the
              collaborative efforts between the Gombe State Government and
              Lincoln University College of Malaysia. Our university is
              committed to providing high-quality education, fostering
              innovation, and promoting community engagement.
              <br />
              <br /> As a Professor of Anaesthesia and Intensive Care Medicine,
              and Faculty Chairman of the National Postgraduate Medical College
              of Nigeria, I bring a wealth of academic and professional
              experience to this role. My expertise has equipped me with the
              knowledge and skills necessary to drive excellence in education,
              research, and healthcare.
              <br />
              <br /> At Lincoln University Kumo, we are dedicated to creating an
              environment that supports the holistic development of our
              students, faculty, and staff. We strive to provide
              state-of-the-art facilities, cutting-edge research opportunities,
              and a culture of innovation and entrepreneurship.
              <br />
              <br /> Our university is poised to play a significant role in
              shaping the future of education and healthcare in Nigeria and
              beyond. I invite you to join us on this journey, as we work
              towards achieving our vision of becoming a leading institution of
              higher learning.
              <br />
              <br /> Together, let us build a brighter future for ourselves, our
              community, and the world at large.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-[80%] mx-auto py-10">
      <Accordion defaultActiveIndex={4} data={researchProjects} />
    </div>
  );
}
