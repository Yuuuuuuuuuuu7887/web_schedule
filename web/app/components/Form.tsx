"use client";
import { useState } from "react";
import "../../globals.css";
import "../components/designForm.css";
const Form = () => {
  const [teachers, setTeachers] = useState([""]);

  const handleAddTeacher = () => {
    setTeachers([...teachers, ""]);
  };

  const handleTeacherChange = (index: number, value: string) => {
    const newTeachers = [...teachers];
    newTeachers[index] = value;
    setTeachers(newTeachers);
  };

  return (
    <div className="allform">
      <div className="subjectID">
        รหัสวิชา
        <input
          // placeholder="Camping Name"
          name="subjectID"
          type="number"
          className="box"
        />
      </div>
      <div className="sec">
        กลุ่ม
        <input
          // placeholder="Camping Name"
          name="sec"
          type="number"
          className="box"
        />
      </div>
      <div className="teacher">
        อาจารย์
        {teachers.map((teacher, index) => (
          <input
            key={index}
            type="text"
            name={`teacher-${index}`}
            value={teacher}
            onChange={(e) => handleTeacherChange(index, e.target.value)}
            className="box"
            placeholder={`อาจารย์คนที่ ${index + 1}`}
          />
        ))}
        <button
          type="button"
          onClick={handleAddTeacher}
          className="add-teacher-button"
        >
          + เพิ่มอาจารย์
        </button>
      </div>
      <div className="date">
        วัน/เดือน/ปี
        <input
          // placeholder="Camping Name"
          name="day"
          type="date"
          className="box"
        />
      </div>
      <div className="timeStart">
        เวลาเริ่ม
        <input
          // placeholder="Camping Name"
          name="timeStart"
          type="time"
          className="box"
        />
      </div>
      <div className="timeFinish">
        เวลาจบ
        <input
          // placeholder="Camping Name"
          name="timeFinish"
          type="time"
          className="box"
        />
      </div>
    </div>
  );
};
export default Form;
