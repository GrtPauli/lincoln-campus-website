import React from "react";
import Accordion from "../common/ui/Accordion";
import MessageFromViceChancellorLUNigeriaImg from "../../assets/Message From Vice-Chancellor LU Nigeria.jpg";
import MessageFromChairmanAndPresidentLUCMalaysiaImg from "../../assets/PROF.DR_.AMIYA_.jpg";
import MessageFromChancellorLUCMalaysiaImg from "../../assets/Deputy-Vice-Chancellor-1-212x300-1.jpg";
import MessageFromProChancellorLUCMalaysiaImg from "../../assets/Pro-Chancellor.png";
import ProfessorOfInternationalEducationImg from "../../assets/Prof.-Keith-Straughan.png";

export default function ManagementContent() {
  const researchProjects = [
    {
      title: "Message From President and Chairman",
      content: (
        <div className="space-y-3 text-sm text-text">
          <div className="space-y-3 text-sm text-text">
            <div className="flex gap-5">
              <img
                src={MessageFromChairmanAndPresidentLUCMalaysiaImg}
                className="h-[150px] w-auto object-cover rounded-xl"
              />

              <div>
                <p className="font-semibold text-2xl mb-2">
                  Prof. Dr. Amiya Bhaumik
                </p>
                <p className="">President and Chairman</p>
              </div>
            </div>
            <p className="leading-loose">
              The Founder and President of Lincoln University College (Malaysia)
              is Dr. Amiya Bhaumik, who is purely from the field of education.
              During his career, he has held many international educational
              positions (both academic and administrative). Most notable
              position was Director of International for Ottawa University (USA)
              for setting up various international educational collaborative
              programs, faculty exchange, research, new educational venture and
              start up. During this tenure, Dr. Bhaumik has traveled extensively
              to Europe, Africa, Asia, North America, Latin America and
              Australasia.
              <br />
              <br /> It is with great joy and optimism that we welcome you to
              Lincoln University Nigeria, a proud extension of Lincoln
              University College Malaysia. This is driven by a vision to bring
              world-class education, professional excellence, and a culture of
              mindfulness to the people of Nigeria.
              <br />
              <br /> At Lincoln University Nigeria, our mission is to provide
              quality, affordable, and globally recognized education that
              empowers you to compete and thrive anywhere in the world. We are
              here to bridge the gap that has led many Nigerian students to
              travel abroad in pursuit of learning. With your commitment,
              dedication, and the support of the community, we believe you will
              achieve excellence and contribute meaningfully to national
              development.
              <br />
              <br /> As you embark on this journey, know that you are part of a
              family that values knowledge, discipline, and innovation. We
              encourage you to embrace every opportunity, remain focused on your
              goals, and uphold the ideals that make Lincoln University a symbol
              of quality education.
              <br />
              <br />
              Together, let us actualize this dream and make history.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Message From CEO and Vice Chairman",
      content: (
        <div className="space-y-3 text-sm text-text">
          <div className="space-y-3 text-sm text-text">
            <div className="flex gap-5">
              {/* <img
                src={MessageFromChairmanAndPresidentLUCMalaysiaImg}
                className="h-[150px] w-auto object-cover rounded-xl"
              /> */}

              <div>
                <p className="font-semibold text-2xl mb-2">Dr. Murtadho Alao</p>
                <p className="">CEO and Vice Chairman</p>
              </div>
            </div>
            <p className="leading-loose">
              I warmly welcome you to Lincoln University Nigeria, an institution
              established with a clear mission: to democratize access to quality
              education, empower individuals with knowledge and practical
              skills, and prepare a new generation of leaders, innovators, and
              problem solvers who will contribute meaningfully to the
              development of our society and the world.
              <br />
              <br /> At Lincoln, we see education not just as the acquisition of
              knowledge, but as a powerful tool for transformation. Guided by
              our vision, we are committed to producing graduates who are
              globally competitive, locally relevant, and socially responsible.
              We emphasize not only academic excellence, but also values of
              patriotism, leadership, empathy, and entrepreneurship—qualities
              that will equip you to navigate an ever-changing world.
              <br />
              <br /> Our objectives are clear: to ensure education is accessible
              and inclusive, to equip our students with practical skills that
              match industry demands, to broaden global perspectives through
              international exposure, and to foster innovation and creativity
              that lead to job creation rather than job seeking. We are equally
              committed to supporting our students financially, engaging
              actively with our communities, and continuously improving our
              systems to remain a beacon of excellence.
              <br />
              <br /> As CEO, my promise to you is that Lincoln University
              Nigeria will remain steadfast in its commitment to quality,
              relevance, and impact. We will provide an environment where you
              can dream big, learn fearlessly, and act boldly. The education you
              receive here is not only an investment in your future but also a
              pathway to serving humanity and leaving a lasting legacy.
              <br />
              <br /> I invite you to embrace this journey with determination,
              knowing that at Lincoln University Nigeria, you are not just a
              student—you are a future leader, an innovator, and a change maker.
              Together, we will shape a brighter future for Nigeria and beyond.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Message From Chancellor",
      content: (
        <div className="space-y-3 text-sm text-text">
          <div className="space-y-3 text-sm text-text">
            <div className="flex gap-5">
              <img
                src={MessageFromChancellorLUCMalaysiaImg}
                className="h-[150px] w-auto object-cover rounded-xl"
              />

              <div>
                <p className="font-semibold text-2xl mb-2">
                  Prof. Dr. Norman Madsen
                </p>
                <p className="">Chancellor</p>
              </div>
            </div>
            <p className="leading-loose">
              At Lincoln University Nigeria, we believe that education is more
              than lectures and examinations—it is a journey that shapes
              leaders, innovators, and influencers of tomorrow. Every class you
              attend, every assignment you complete, and every challenge you
              overcome is preparing you for a greater purpose.
              <br />
              <br /> With education comes a new responsibility: leadership.
              Leadership is not only about holding titles or positions, but
              about influence—being able to inspire, guide, and make positive
              change in your community and beyond. Just as cranes flying in
              formation rotate leadership and affirm one another, true leaders
              know how to handle turbulence, work with others, and celebrate the
              success of their team.
              <br />
              <br /> As students of Lincoln University, you are preparing to be
              those leaders. You may be called upon to provide solutions in
              times of difficulty, to work with others in humility and respect,
              and to affirm and support the leadership of your peers. These are
              the qualities that will define your success not just in academics,
              but in life.
              <br />
              <br /> Remember the example of Abraham Lincoln, whose resilience,
              humility, and dedication to service turned him from humble
              beginnings into a respected leader. You, too, carry that potential
              within you.
              <br />
              <br /> As you continue your studies, keep striving, keep believing
              in yourself, and keep preparing to lead with wisdom and integrity.
              Lincoln University Nigeria is proud to walk with you on this
              journey
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Message From Pro-Chancellor",
      content: (
        <div className="space-y-3 text-sm text-text">
          <div className="space-y-3 text-sm text-text">
            <div className="flex gap-5">
              <img
                src={MessageFromProChancellorLUCMalaysiaImg}
                className="h-[150px] w-auto object-cover rounded-xl"
              />

              <div>
                <p className="font-semibold text-2xl mb-2">
                  Prof. Datuk Dr. Hjh. Bibi Florina Binti Abdullah
                </p>
                <p className="">Pro-Chancellor</p>
              </div>
            </div>
            <p className="leading-loose">
              Lincoln University College (LUC) is a vibrant and diverse academic
              center focused on teaching and learning and helps to realize
              innovative knowledge. LUC brings together world-renowned faculty
              and students from all over the nation and the world. The dynamic
              culture and pioneering academic programs of Lincoln University
              College prepare the industrious students for the 21st century
              careers. The assurance of this university college to teach
              excellence improves the academic know-how of the students. Our
              alumni, faculty, students, and staff share a passion for this
              institution that is unparalleled. Intense participation in
              extra-curriculum promotes collaboration and solidarity. There is a
              unique level of personal interaction between the student and the
              Lecturer which facilitate the generation of novel awareness to
              seek new academic prospects, and to learn skills that can turn
              dreams into realities. At LUC, we set very high goals, and our
              activities have a worldwide impact.
              <br />
              <br /> Our programs, services, and quality-of-life facilities are
              intended to make best use of your potential and help to accomplish
              the aspirations of life. It is our hope that we can help to
              address the challenges faced by the students and provide them with
              possible strategies. In addition to the accessible coursework the
              faculty members aimed at preparing the students with scholarly
              foundation demanded by today's - and tomorrows - professional
              careers, including opportunities for cultural amelioration.
              <br />
              <br /> In Lincoln we counts more who graduated than who comes in.
              Our aim is to spread the system of education among each and every
              individual of the younger generation without any discrimination so
              as to make this world a better place to live in.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Message From Vice-Chancellor",
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
                <p className="">Vice-Chancellor</p>
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
    {
      title: "Message From Professor International Education",
      content: (
        <div className="space-y-3 text-sm text-text">
          <div className="space-y-3 text-sm text-text">
            <div className="flex gap-5">
              <img
                src={ProfessorOfInternationalEducationImg}
                className="h-[200px] w-auto object-cover rounded-xl"
              />

              <div>
                <p className="font-semibold text-2xl mb-2">
                  Prof. Keith Straughan
                </p>
                <p className="">Professor of International Education</p>
              </div>
            </div>
            <p className="leading-loose">
              Keith has enjoyed a long career in both academia and business. He
              holds degrees in radiological physics, pure physics and theology.
              He was on the team of scientists and medics who deployed the
              world's first clinical MRI scanner and pursued his doctoral
              studies on the optimisation of the clinical performance of such
              instruments. He was subsequently on the faculty at Imperial
              College, the Royal London Hospital Medical School and Cambridge
              University and led the project to develop a new university in
              Milton Keynes, UK, the fastest- growing city in Europe. While on
              the faculty at Imperial, Keith span out four companies working in
              diagnostic imaging. He has served as CEO of a global EdTech
              company and serves on the Board of a number of high-tech and
              education companies. He has academic interests in education 4.0
              and smart cities, and is an active non-executive director,
              consultant and executive coach.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-[80%] mx-auto py-10">
      <Accordion defaultActiveIndex={0} data={researchProjects} />
    </div>
  );
}
