function CourseCard(props) {
  return (
    <div className="course-card">
      <h2>{props.name}</h2>

      <p><strong>Trainer:</strong> {props.trainer}</p>

      <p><strong>Duration:</strong> {props.duration}</p>

      <p><strong>Progress:</strong> {props.progress}%</p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${props.progress}%` }}
        ></div>
      </div>

      <button onClick={() => props.increase(props.courseKey)}>
        Increase Progress
      </button>
    </div>
  );
}

export default CourseCard;