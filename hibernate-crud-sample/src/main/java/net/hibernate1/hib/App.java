package net.hibernate1.hib;

import java.util.List;

import net.hibernate1.dao.StudentDao;
import net.hibernate1.model.Student;

public class App {
	public static void main(String [] args) {
		
		StudentDao studentDao = new StudentDao();
		
		Student student = new Student("Arjun", "Araneta", "arjunaraneta@gmail.com");
		studentDao.saveStudent(student);
		
		Student student2 = studentDao.getStudentById(student.getId());
		
		List<Student> students = studentDao.getAllStudents();
		students.forEach(student1 -> System.out.println(student1.getId()));
		
		//test delete
		//studentDao.deleteStudent(student.getId());
	}
}
