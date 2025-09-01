import React from 'react'
import StyledUnderline from '../../common/ui/StyledUnderline';

export default function ExaminationRulesAndRegulationsContent() {

      const guidelines1 = [
    {
      id: 1,
      number: "1.1",
      content:
        "An invigilator will be appointed for each examination to ensure that proper provisions have been made for conduct of examinations and that the examinations are conducted in accordance with the rules & regulations.",
    },
  ];

  const guidelines2 = [
    {
      id: 1,
      number: "2.1",
      content:
        "Candidates will be admitted to the examination room not earlier than ten minutes before the examination is due to commence.",
    },
    {
      id: 2,
      number: "2.2",
      content:
        "Only stationery is permitted in examination centre. Candidates are allowed to use calculators and other electronic devices approved for use in an examination, subject to all programmable memory must be cleared before bringing into examination room. Non-programmable calculators, where allowed, must have volatile memory only and must not have alpha facilities. A candidate using an authorized electronic device in an examination room is responsible for its operation. Any failure or malfunction of the device will not constitute grounds for a deferred examination or other special arrangements.",
    },
    {
      id: 3,
      number: "2.3",
      content:
        "Candidate must produce their identity card (or) IC (or) Passport (if foreigner) at each examination centre. It must be placed prominently on their desk during examination. If the candidate has no photographic identification in their possession, they will adhere to the procedures prescribed by chief invigilators. Failure to provide identification during the examination may result in suspension of access to unit results and academic transcripts until identification requirements are met.",
    },
    {
      id: 4,
      number: "2.4",
      content:
        "Each desk in the examination room will normally be numbered. A candidate must occupy the desk which is allocated to him/her.",
    },
    {
      id: 5,
      number: "2.5",
      content:
        "Before commencement of the examination, candidate must sign the attendance. If a candidate name is not in the attendance list, he/she will not be permitted to enter the examination room. Candidates who have not signed the attendance, their answer scripts will not be evaluated.",
    },
  ];

    const guidelines3 = [
    {
      id: 1,
      number: "3.1",
      content:
        "Supplementary examination is for the candidates who have failed in semester final examination.",
    },
    {
      id: 2,
      number: "3.3",
      content:
        "Supplementary examination will be conducted after semester final examination results are published ON-LINE. Fees will be charged as per fees structure.",
    },
    {
      id: 3,
      number: "3.3",
      content:
        "Supplementary examination fees must be paid by the candidate before the scheduled date of the examination. Candidates who fail to pay the fees will not be allowed to sit for the supplementary examination. Examination slip will be issued to the candidate a week before the examination.",
    },
    {
      id: 4,
      number: "3.4",
      content:
        "Candidates who failed to sit for the final examination with reasons (medical leave) should notify their head of department and Examination Unit. Documentary evidence of their disability must be provided wherever practicable. These candidates will be given only one chance to sit for their missed examination. Still failure to do so, a candidate will not be allowed to sit for the examination. No marks will be given. Student has to repeat the subject.",
    },
    {
      id: 5,
      number: "3.5",
      content:
        "Candidates should submit their assignments on time. There will no further extension of time given to the candidate.",
    },
  ];
  return (
    <div><section className="w-full p-12 py-14">
        <div>
          <div className="inline-block mb-6">
            <h1>GUIDELINE 1: CONDUCT OF CANDIDATES IN EXAMINATION</h1>
            <StyledUnderline />
          </div>
          <p>
            Examination shall be conducted in accordance with rules and
            regulations of Lincoln University College. Students with
            disabilities and requiring any special or additional needs should
            notify their respective Heads of Department and examination unit.
            They should inform at least 3 working days before scheduled date of
            the examination. Documentary evidence of their disability and needs
            must be provided wherever practicable.
          </p>
          {guidelines1.map((item) => (
            <div key={item.id} className="mt-6">
              <p>
                <span className="font-bold">{item.number}:</span> {item.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="inline-block mb-6">
            <h1>
              GUIDELINE 2: REGULATIONS FOR SUPPLEMENTARY EXAMINATION AND MISSED EXAMINATION:
            </h1>
            <StyledUnderline />
          </div>

          {guidelines3.map((item) => (
            <div key={item.id} className="">
              <p className="mt-1">
                <span className="font-bold">{item.number}:</span> {item.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="inline-block mb-6">
            <h1>
              GUIDELINE 3: The following rules and regulations for candidates
              will apply for all examinations:
            </h1>
            <StyledUnderline />
          </div>

          {guidelines2.map((item) => (
            <div key={item.id} className="">
              <p className="mt-1">
                <span className="font-bold">{item.number}:</span> {item.content}
              </p>
            </div>
          ))}
        </div>


      </section></div>
  )
}
