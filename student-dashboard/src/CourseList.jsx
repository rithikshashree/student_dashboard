import CourseCard from "./CourseCard";

function CourseList({ progress, increaseProgress }) {
  return (
    <div>
      <h2 className="course-title">Courses</h2>

      <div className="course-list">

        <CourseCard
          courseKey="java"
          name="Java Full Stack"
          trainer="Bharathi"
          duration="3 Months"
          progress={progress.java}
          increase={increaseProgress}
        />

        <CourseCard
          courseKey="react"
          name="React JS"
          trainer="Karthik"
          duration="2 Months"
          progress={progress.react}
          increase={increaseProgress}
        />

        <CourseCard
          courseKey="sql"
          name="SQL"
          trainer="Priya"
          duration="1 Month"
          progress={progress.sql}
          increase={increaseProgress}
        />

      </div>
    </div>
  );
}

export default CourseList;