import React from "react";
import { Table } from "antd";
import Accordion from "../../common/ui/Accordion";
import StyledUnderline from "../../common/ui/StyledUnderline";
import { FACULTIES } from "../../../constants/faculties";

export default function FeesBreakdown() {
  const formatCurrency = (value) =>
    value != null ? value.toLocaleString(undefined, { maximumFractionDigits: 0 }) : "-";

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
      render: (val) => formatCurrency(val),
    },
    {
      title: "FEE PER SEMESTER",
      dataIndex: "feePerSemester",
      key: "feePerSemester",
      render: (val) => formatCurrency(val),
    },
    {
      title: "NUMBER OF SEMESTERS",
      dataIndex: "numSemesters",
      key: "numSemesters",
    },
  ];

  // Transform FACULTIES structure to the shape expected by this component
  const faculties = FACULTIES.map((f) => ({
    name: f.title,
    programs: (f.programmes || []).map((p) => ({
      title: p.title,
      data: (p.fees || []).map((fee) => ({
        year: fee.year,
        tuitionFee: fee.totalTuitionPerYear,
        feePerSemester: fee.feePerSemester,
        numSemesters: fee.numberOfSemesters,
      })),
    })),
  }));

  return (
    <div className="mx-auto py-10 px-2 md:px-20">
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="inline">
          <h1 className="text-3xl font-bold">
            Lincoln University Malaysia (Gombe Campus)
          </h1>
          <StyledUnderline />
        </div>
      </div>

      {faculties.map((faculty, facultyIndex) => (
        <div key={facultyIndex} className="mb-20">
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
