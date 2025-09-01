import React from 'react';

const ExaminationAndRegulations = () => {
  return (
    <div>
      <div>
        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Header */}
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Examination Rules & Regulations
          </h1>

          {/* Intro Image */}
          <div className="flex justify-center mb-8">
            {/* <img
              src="" // replace with your local image path or URL
              alt="Students taking exam"
              className="rounded-lg shadow-md w-full max-w-3xl"
            /> */}
          </div>

          {/* Guideline 1 */}
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Guideline 1: Conduct of Candidates in Examination
          </h2>
          <p className="text-gray-700 mb-4">
            Examination shall be conducted in accordance with rules and regulations
            of Lincoln University College. Students with disability requiring any
            special or additional needs should notify their respective Heads of
            Department and examination unit at least 3 working days before scheduled
            date of the examination. Documentary evidence of their disability and
            needs should be provided wherever practicable.
          </p>
          <p className="text-gray-700 mb-6">
            1.1 An invigilator will be appointed for each examination to ensure that
            proper provisions have been made for conduct of examination and that the
            examinations are conducted in accordance with the rules & regulations.
          </p>

          {/* Rules List */}
          <h3 className="text-lg font-semibold mb-3">
            2. The following rules and regulations for candidates will apply for all
            examinations:
          </h3>
          <ul className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>
              Candidates will be admitted to the examination room not earlier than
              ten minutes before the examination is due to commence.
            </li>
            <li>
              Only stationery is permitted in examination centre. Candidates are
              allowed to use calculators and other electronic devices approved for
              use in an examination, subject to all programmable memory must be
              cleared before bringing into examination room. Non-programmable
              calculators, where allowed, must have volatile memory only and must
              not have alpha facilities. A candidate with an authorized electronic
              device in an examination room is responsible for its operation. Any
              failure or malfunction of the device does not constitute grounds for a
              deferred examination or other special arrangements.
            </li>
            <li>
              Candidate must produce their identity card (or) IC (or) Passport (if
              foreigner) at each examination centre. It must be placed prominently
              on their desk during examination. If the component has no photographic
              identification in their possession, they will be subject to procedures
              prescribed by chief invigilators. Failure to provide identification
              during the examination may result in suspension of access to unit
              results and academic transcripts until identification requirements are
              met.
            </li>
            <li>
              Each desk in the examination room will normally be numbered. A
              candidate must occupy the desk which is allocated to him/her.
            </li>
            <li>
              Before commencement of the examination, candidate must sign the
              attendance. If a candidate name is not in the attendance, they will be
              required to leave the examination room. Invigilator should inform the
              examination unit.
            </li>
          </ul>

          {/* Supplementary Examination */}
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
            3. Regulations for Supplementary Examination and Missed Examination
          </h2>
          <ul className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>
              Supplementary examination is for the candidates who have failed in
              semester final examination.
            </li>
            <li>
              Supplementary examination will be conducted after semester final
              examination results are published online. Fees will be charged as per
              fees structure (memo no. G101, dated 25th October 2010).
            </li>
            <li>
              Supplementary examination fees must be paid by the candidate before
              the scheduled date of the examination. Candidates who fail to pay the
              fees will not be allowed to sit for the supplementary examination.
              Examination slip will be issued to the candidate a week before the
              examination.
            </li>
            <li>
              Candidates who failed to sit for the final examination with reasons
              (medical leave) should notify their head of department and Examination
              Unit. Documentary evidence of their disability must be provided
              wherever practicable. These candidates will be given only one chance
              to sit for their missed examination. Still failure to do so, a
              candidate will not be allowed to sit for the examination. No marks
              will be given. Student has to repeat the subject.
            </li>
            <li>
              Candidates should submit their assignments on time. There will be no
              further extension of time given to the candidate.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExaminationAndRegulations;