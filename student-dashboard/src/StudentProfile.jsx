function StudentProfile(props) {
  return (
    <div className="student-profile">
      <h2>Student Profile</h2>

      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>ID:</strong> {props.id}</p>
      <p><strong>Department:</strong> {props.department}</p>
      <p><strong>College:</strong> {props.college}</p>
      <p><strong>Email:</strong> {props.email}</p>
    </div>
  );
}

export default StudentProfile;