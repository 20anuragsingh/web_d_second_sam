function Student(props) {
  return (
    <div>
      <h3>Student Information</h3>

      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
      <p>Marks: {props.marks}</p>

      <hr />
    </div>
  );
}

export default Student;