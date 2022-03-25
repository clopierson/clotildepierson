import TeachCard from "../components/teachCard";

export default function Teaching() {
  return (
    <div>
      <h2>Teaching</h2>
      {/* <div class="flex gap-4 flex-wrap"> */}
      <h3>2022</h3>
      <TeachCard
        position="Co-Instructor"
        location="Oregon State University (USA)"
        courseId="CE419"
        courseName="Civil Engineering Professional Practice"
        degree="Undergraduate"
        nStudents="125"
      />
      <TeachCard
        position="Co-Instructor"
        location="Oregon State University (USA)"
        courseId="CE418"
        courseName="Civil Engineering Professional Practice"
        degree="Undergraduate"
        nStudents="125"
      />
      <h3>2021</h3>
      <TeachCard
        position="Guest Professor"
        location="Vrije Universiteit Brussel (Belgium)"
        courseId="000"
        courseName="Daylighting in Buildings"
        degree="Graduate"
        nStudents="20"
      />
      <TeachCard
        position="Teaching Assistant"
        location="École polytechnique fédérale de Lausanne (Switzerland)"
        courseId="000"
        courseName="Comfort and Architecture: Sustainable Strategies"
        degree="Graduate"
        nStudents="50"
      />
      <TeachCard
        position="Guest Lecturer"
        location="Technische Universiteit Eindhoven (Netherlands)"
        courseId="000"
        courseName="Capita Selecta Lighting Technology"
        degree="Graduate"
        nStudents="40"
      />
      <h3>2020</h3>
      <TeachCard
        position="Teaching Assistant"
        location="École polytechnique fédérale de Lausanne (Switzerland)"
        courseId="000"
        courseName="Comfort and Architecture: Sustainable Strategies"
        degree="Graduate"
        nStudents="50"
      />
      <TeachCard
        position="Guest Lecturer"
        location="Technische Universiteit Eindhoven (Netherlands)"
        courseId="000"
        courseName="Physics of light and lighting design"
        degree="Undergraduate"
        nStudents="30"
      />
      <TeachCard
        position="Guest Lecturer"
        location="CEPT University (India)"
        courseId="000"
        courseName="Lighting, Daylighting and Integrated Design Lab"
        degree="Graduate"
        nStudents="30"
      />
      <TeachCard
        position="Guest Lecturer"
        location="Technische Universiteit Eindhoven (Netherlands)"
        courseId="000"
        courseName="Capita Selecta Lighting Technology"
        degree="Graduate"
        nStudents="15"
      />
      <h3>2019, 2017</h3>
      <TeachCard
        position="Guest Lecturer"
        location="Université catholique de Louvain (Belgium)"
        courseId="000"
        courseName="Architectural Research Seminar: Applied Physics"
        degree="Graduate"
        nStudents="40"
      />
      {/* </div> */}
    </div>
  );
}
