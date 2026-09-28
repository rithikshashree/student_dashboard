function ProgressCard({ progress }) {
  return (
    <div className="progress-card">

      <h2>Overall Progress</h2>

      <p>Java Full Stack - {progress.java}%</p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress.java}%` }}
        ></div>
      </div>

      <p>React JS - {progress.react}%</p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress.react}%` }}
        ></div>
      </div>

      <p>SQL - {progress.sql}%</p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress.sql}%` }}
        ></div>
      </div>

    </div>
  );
}

export default ProgressCard;