import org.springframework.web.bind.annotation.*;

@RestController
public class StudentController {

    @GetMapping("/")
    public String welcome() {
        return "Welcome to Student Management REST API";
    }

    @GetMapping("/student")
    public Student getStudent() {
        return new Student(
                1,
                "Anurag Singh",
                "B.Tech");
    }

    @PostMapping("/student")
    public String addStudent(
            @RequestBody Student student) {

        return "Student Added Successfully: "
                + student.getName();
    }
}