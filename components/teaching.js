import TeachCard from "../components/teachCard";

export default function Teaching() {
  return (
    <section>
      <h2>Teaching</h2>
      <h3>2022</h3>
      <TeachCard
        position="Co-Instructor"
        institution="Oregon State University"
        institutionShort="OSU"
        courseId="CE419"
        courseName="Civil Engineering Professional Practice"
        degree="Undergraduate"
        nStudents="125"
      />
      <TeachCard
        position="Co-Instructor"
        institution="Oregon State University"
        institutionShort="OSU"
        courseId="CE418"
        courseName="Civil Engineering Professional Practice"
        degree="Undergraduate"
        nStudents="125"
      />
      <h3>2021</h3>
      <TeachCard
        position="Guest Professor"
        institution="Vrije Universiteit Brussel"
        institutionShort="VUB"
        courseId="ARCH-Y501"
        courseName="Daylighting in Buildings"
        degree="Graduate"
        nStudents="20"
      />
      <TeachCard
        position="Teaching Assistant"
        institution="École polytechnique fédérale de Lausanne"
        institutionShort="EPFL"
        courseId="AR-442"
        courseName="Comfort and Architecture: Sustainable Strategies"
        degree="Graduate"
        nStudents="50"
      />
      <TeachCard
        position="Guest Lecturer"
        institution="Technische Universiteit Eindhoven"
        institutionShort="TU/e"
        courseId="7S885"
        courseName="Capita Selecta Lighting Technology"
        degree="Graduate"
        nStudents="40"
      />
      <h3>2020</h3>
      <TeachCard
        position="Teaching Assistant"
        institution="École polytechnique fédérale de Lausanne"
        institutionShort="EPFL"
        courseId="AR-442"
        courseName="Comfort and Architecture: Sustainable Strategies"
        degree="Graduate"
        nStudents="40"
      />
      <TeachCard
        position="Guest Lecturer"
        institution="Technische Universiteit Eindhoven"
        institutionShort="TU/e"
        courseId="7HK30"
        courseName="Physics of light and lighting design"
        degree="Undergraduate"
        nStudents="30"
      />
      <TeachCard
        position="Guest Lecturer"
        institution="Centre for Environmental Planning and Technology"
        institutionShort="CEPT University"
        // courseId="FT-5699"
        courseName="Lighting, Daylighting and Integrated Design Lab"
        degree="Graduate"
        nStudents="30"
      />
      <TeachCard
        position="Guest Lecturer"
        institution="Technische Universiteit Eindhoven"
        institutionShort="TU/e"
        courseId="7S885"
        courseName="Capita Selecta Lighting Technology"
        degree="Graduate"
        nStudents="15"
      />
      <h3>2019, 2017</h3>
      <TeachCard
        position="Guest Lecturer"
        institution="Université catholique de Louvain"
        institutionShort="UCLouvain"
        courseName="Architectural Research Seminar: Applied Physics"
        degree="Graduate"
        nStudents="40"
      />
    </section>
  );
}
