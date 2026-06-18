import Student from "./Student";

function App() {
  return (
    <div>
      <h1>Student Information</h1>

      <Student
        name="Anurag Singh"
        course="B.Tech"
        marks="85"
      />

      <Student
        name="Rahul Kumar"
        course="BCA"
        marks="90"
      />

      <Student
        name="Priya Sharma"
        course="MCA"
        marks="88"
      />
    </div>
  );
}

export default App;