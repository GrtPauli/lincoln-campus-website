import React from "react";
import { Table } from "antd";
import Accordion from "../../common/ui/Accordion";
import StyledUnderline from "../../common/ui/StyledUnderline";

export default function FeesBreakdown() {
  const columns = [
    {
      title: "YEAR",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "TUITION FEE",
      dataIndex: "tuitionFee",
      key: "tuitionFee",
    },
    {
      title: "FEE PER SEMESTER",
      dataIndex: "feePerSemester",
      key: "feePerSemester",
    },
    {
      title: "NUMBER OF SEMESTERS",
      dataIndex: "numSemesters",
      key: "numSemesters",
    },
  ];

  const faculties = [
    {
      name: "FACULTY OF MEDICINE AND ALLIED HEALTH SCIENCES",
      programs: [
        {
          title: "1. Doctor of Medicine(MD) (MBBS)",
          data: [
            {
              year: 1,
              tuitionFee: 3000000,
              feePerSemester: 1500000,
              numSemesters: 2,
            },
            {
              year: 2,
              tuitionFee: 3000000,
              feePerSemester: 1500000,
              numSemesters: 2,
            },
            {
              year: 3,
              tuitionFee: 3000000,
              feePerSemester: 1500000,
              numSemesters: 2,
            },
            {
              year: 4,
              tuitionFee: 3500000,
              feePerSemester: 1750000,
              numSemesters: 2,
            },
            {
              year: 5,
              tuitionFee: 3500000,
              feePerSemester: 1750000,
              numSemesters: 2,
            },
            {
              year: 6,
              tuitionFee: 3500000,
              feePerSemester: 1750000,
              numSemesters: 2,
            },
          ],
        },
        {
          title: "2. B.N.Sc. NURSING",
          data: [
            {
              year: 1,
              tuitionFee: 800000,
              feePerSemester: 400000,
              numSemesters: 2,
            },
            {
              year: 2,
              tuitionFee: 800000,
              feePerSemester: 400000,
              numSemesters: 2,
            },
            {
              year: 3,
              tuitionFee: 800000,
              feePerSemester: 400000,
              numSemesters: 2,
            },
            {
              year: 4,
              tuitionFee: 800000,
              feePerSemester: 400000,
              numSemesters: 2,
            },
            {
              year: 5,
              tuitionFee: 800000,
              feePerSemester: 400000,
              numSemesters: 2,
            },
          ],
        },
        {
          title: "3. Community Health Science",
          data: [
            {
              year: 1,
              tuitionFee: 500000,
              feePerSemester: 250000,
              numSemesters: 2,
            },
            {
              year: 2,
              tuitionFee: 500000,
              feePerSemester: 250000,
              numSemesters: 2,
            },
            {
              year: 3,
              tuitionFee: 500000,
              feePerSemester: 250000,
              numSemesters: 2,
            },
            {
              year: 4,
              tuitionFee: 500000,
              feePerSemester: 250000,
              numSemesters: 2,
            },
            {
              year: 5,
              tuitionFee: 500000,
              feePerSemester: 250000,
              numSemesters: 2,
            },
          ],
        },
      ],
    },
    {
      name: "FACULTY OF SCIENCES AND COMPUTING",
      programs: [
        {
          title: "1. B.Sc. Microbiology",
          data: [
            {
              year: 1,
              tuitionFee: 400000,
              feePerSemester: 200000,
              numSemesters: 2,
            },
            {
              year: 2,
              tuitionFee: 400000,
              feePerSemester: 200000,
              numSemesters: 2,
            },
            {
              year: 3,
              tuitionFee: 400000,
              feePerSemester: 200000,
              numSemesters: 2,
            },
            {
              year: 4,
              tuitionFee: 400000,
              feePerSemester: 200000,
              numSemesters: 2,
            },
            {
              year: 5,
              tuitionFee: 400000,
              feePerSemester: 200000,
              numSemesters: 2,
            },
          ],
        },
        {
          title: "2. B.Sc Biochemistry",
          data: [
            {
              year: 1,
              tuitionFee: 400000,
              feePerSemester: 200000,
              numSemesters: 2,
            },
            {
              year: 2,
              tuitionFee: 400000,
              feePerSemester: 200000,
              numSemesters: 2,
            },
            {
              year: 3,
              tuitionFee: 400000,
              feePerSemester: 200000,
              numSemesters: 2,
            },
            {
              year: 4,
              tuitionFee: 400000,
              feePerSemester: 200000,
              numSemesters: 2,
            },
            {
              year: 5,
              tuitionFee: 400000,
              feePerSemester: 200000,
              numSemesters: 2,
            },
          ],
        },
        {
          title: "3. B.Sc. information technology",
          data: [
            {
              year: 1,
              tuitionFee: 600000,
              feePerSemester: 200000,
              numSemesters: 3,
            },
            {
              year: 2,
              tuitionFee: 600000,
              feePerSemester: 200000,
              numSemesters: 3,
            },
            {
              year: 3,
              tuitionFee: 600000,
              feePerSemester: 200000,
              numSemesters: 3,
            },
            {
              year: 4,
              tuitionFee: 600000,
              feePerSemester: 200000,
              numSemesters: 3,
            },
          ],
        },
        {
          title: "4. B.Sc. Cyber Security",
          data: [
            {
              year: 1,
              tuitionFee: 600000,
              feePerSemester: 200000,
              numSemesters: 3,
            },
            {
              year: 2,
              tuitionFee: 600000,
              feePerSemester: 200000,
              numSemesters: 3,
            },
            {
              year: 3,
              tuitionFee: 600000,
              feePerSemester: 200000,
              numSemesters: 3,
            },
            {
              year: 4,
              tuitionFee: 600000,
              feePerSemester: 200000,
              numSemesters: 3,
            },
          ],
        },
      ],
    },
    {
      name: "FACULTY OF MANAGEMENT AND SOCIAL SCIENCES",
      programs: [
        {
          title: "1. B.Sc. Accounting",
          data: [
            {
              year: 1,
              tuitionFee: 450000,
              feePerSemester: 150000,
              numSemesters: 3,
            },
            {
              year: 2,
              tuitionFee: 450000,
              feePerSemester: 150000,
              numSemesters: 3,
            },
            {
              year: 3,
              tuitionFee: 450000,
              feePerSemester: 150000,
              numSemesters: 3,
            },
            {
              year: 4,
              tuitionFee: 450000,
              feePerSemester: 150000,
              numSemesters: 3,
            },
          ],
        },
        {
          title: "2. B.Sc. Business Administration",
          data: [
            {
              year: 1,
              tuitionFee: 450000,
              feePerSemester: 150000,
              numSemesters: 3,
            },
            {
              year: 2,
              tuitionFee: 450000,
              feePerSemester: 150000,
              numSemesters: 3,
            },
            {
              year: 3,
              tuitionFee: 450000,
              feePerSemester: 150000,
              numSemesters: 3,
            },
            {
              year: 4,
              tuitionFee: 450000,
              feePerSemester: 150000,
              numSemesters: 3,
            },
          ],
        },
        {
          title: "3. B.Sc. Mass Communication",
          data: [
            {
              year: 1,
              tuitionFee: 450000,
              feePerSemester: 150000,
              numSemesters: 3,
            },
            {
              year: 2,
              tuitionFee: 450000,
              feePerSemester: 150000,
              numSemesters: 3,
            },
            {
              year: 3,
              tuitionFee: 450000,
              feePerSemester: 150000,
              numSemesters: 3,
            },
            {
              year: 4,
              tuitionFee: 450000,
              feePerSemester: 150000,
              numSemesters: 3,
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="mx-auto py-10 px-20">
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="inline">
          <h1 className="text-3xl font-bold">
            Lincoln University Malaysia (Gombe Campus)
          </h1>
          <StyledUnderline />
        </div>
      </div>

      {faculties.map((faculty, facultyIndex) => (
        <div key={facultyIndex} className="mb-8">
          <div className="inline-block mb-5">
            <h2 className="text-xl font-bold text-gray-800">{faculty.name}</h2>
          </div>

          <Accordion
            defaultActiveIndex={null}
            data={faculty.programs.map((program, programIndex) => ({
              title: program.title,
              content: (
                <Table
                  columns={columns}
                  dataSource={program.data.map((item, index) => ({
                    key: `${facultyIndex}-${programIndex}-${index}`,
                    year: item.year,
                    tuitionFee: item.tuitionFee,
                    feePerSemester: item.feePerSemester,
                    numSemesters: item.numSemesters,
                  }))}
                  pagination={false}
                />
              ),
            }))}
          />
        </div>
      ))}
    </div>
  );
}
