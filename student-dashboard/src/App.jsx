import { useState } from "react";
import Header from "./Header";
import StudentProfile from "./StudentProfile";
import CourseList from "./CourseList";
import ProgressCard from "./ProgressCard";
import Footer from "./Footer";
import "./App.css";

function App() {
  const initialProgress = {
    java: 75,
    react: 60,
    sql: 90,
  };

  const [progress, setProgress] = useState(initialProgress);

  function increaseProgress(course) {
    setProgress((prev) => ({
      ...prev,
      [course]: Math.min(prev[course] + 5, 100),
    }));
  }

  function resetProgress() {
    setProgress(initialProgress);
  }

  return (
    <div className="app">
      <Header />

      <StudentProfile
        name="Rithiksha"
        id="ST101"
        department="Artificial Intelligence And Data Science"
        college="Kamaraj Engineering College and Technology"
        email="rihtikshashreems@gmail.com"
      />

      <CourseList
        progress={progress}
        increaseProgress={increaseProgress}
      />

      <ProgressCard progress={progress} />

      <div className="reset">
        <button onClick={resetProgress}>Reset Progress</button>
      </div>

      <Footer />
    </div>
  );
}

export default App;