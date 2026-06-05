import TeachCard from "../components/teach-card";

export default function Teaching() {
  return (
    <section>
      <h2>Teaching</h2>
      <h3>2024</h3>
      <TeachCard
        courseId="ARE499/599"
        courseName="Daylighting Design"
        degree="Undergraduate/Graduate"
        institution="Oregon State University"
        institutionShort="OSU"
        nStudents="17"
        position="Instructor"
      />
      <TeachCard
        courseId="ARE499/599"
        courseName="Parametric Design in Arch. Eng."
        degree="Undergraduate/Graduate"
        institution="Oregon State University"
        institutionShort="OSU"
        nStudents="14"
        position="Instructor"
      />
      <details>
        <summary>Show More</summary>

        <h3>2023</h3>
        <TeachCard
          courseId="ARE499/599"
          courseName="Daylighting Design"
          degree="Undergraduate/Graduate"
          institution="Oregon State University"
          institutionShort="OSU"
          nStudents="6"
          position="Instructor"
        />
        <TeachCard
          courseId="ARE499/599"
          courseName="Parametric Design in Arch. Eng."
          degree="Undergraduate/Graduate"
          institution="Oregon State University"
          institutionShort="OSU"
          nStudents="5"
          position="Instructor"
        />

        <h3>2022</h3>
        <TeachCard
          courseId="CE/ARE419"
          courseName="Civil Infrastructure/Architectural Engineering Design"
          degree="Undergraduate"
          institution="Oregon State University"
          institutionShort="OSU"
          nStudents="~125"
          position="Co-Instructor"
        />
        <TeachCard
          courseId="CE418"
          courseName="Civil Engineering Professional Practice"
          degree="Undergraduate"
          institution="Oregon State University"
          institutionShort="OSU"
          nStudents="~125"
          position="Co-Instructor"
        />

        <h3>2021</h3>
        <TeachCard
          courseId="ARCH-Y501"
          courseName="Daylighting in Buildings"
          degree="Graduate"
          institution="Vrije Universiteit Brussel"
          institutionShort="VUB"
          nStudents="~20"
          position="Guest Professor"
        />
        <TeachCard
          courseId="AR-442"
          courseName="Comfort and Architecture: Sustainable Strategies"
          degree="Graduate"
          institution="École polytechnique fédérale de Lausanne"
          institutionShort="EPFL"
          nStudents="~50"
          position="Teaching Assistant"
        />
        <TeachCard
          courseId="7S885"
          courseName="Capita Selecta Lighting Technology"
          degree="Graduate"
          institution="Technische Universiteit Eindhoven"
          institutionShort="TU/e"
          nStudents="~40"
          position="Guest Lecturer"
        />
        <h3>2020</h3>
        <TeachCard
          courseId="AR-442"
          courseName="Comfort and Architecture: Sustainable Strategies"
          degree="Graduate"
          institution="École polytechnique fédérale de Lausanne"
          institutionShort="EPFL"
          nStudents="~40"
          position="Teaching Assistant"
        />
        <TeachCard
          courseId="7HK30"
          courseName="Physics of light and lighting design"
          degree="Undergraduate"
          institution="Technische Universiteit Eindhoven"
          institutionShort="TU/e"
          nStudents="~30"
          position="Guest Lecturer"
        />
        <TeachCard
          courseId="BE4001"
          courseName="Lighting, Daylighting and Integrated Design Lab"
          degree="Graduate"
          institution="Centre for Environmental Planning and Technology"
          institutionShort="CEPT University"
          nStudents="~30"
          position="Guest Lecturer"
        />
        <TeachCard
          courseId="7S885"
          courseName="Capita Selecta Lighting Technology"
          degree="Graduate"
          institution="Technische Universiteit Eindhoven"
          institutionShort="TU/e"
          nStudents="~15"
          position="Guest Lecturer"
        />
        <h3>2019, 2017</h3>
        <TeachCard
          courseId="LICAR2404"
          courseName="Architectural Research Seminar: Applied Physics"
          degree="Graduate"
          institution="Université catholique de Louvain"
          institutionShort="UCLouvain"
          nStudents="~40"
          position="Guest Lecturer"
        />
      </details>
    </section>
  );
}
