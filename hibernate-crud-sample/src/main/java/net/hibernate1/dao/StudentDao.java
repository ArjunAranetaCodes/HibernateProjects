package net.hibernate1.dao;


import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import net.hibernate1.model.Student;
import net.hibernate1.util.HibernateUtil;

public class StudentDao {
	//saveStudent
	//getAllStudents
	//getStudentById
	//updateStudent
	//deleteStudent
	
	public void saveStudent(Student student) {
		Transaction transaction = null;
		try(Session session = HibernateUtil.getSessionFactory().openSession()){
			//start the transaction
			transaction = session.beginTransaction();
			
			//save student object
			session.save(student);
			
			//commit the transaction
			transaction.commit();
		}catch(Exception e) {
			if(transaction != null) {
				transaction.rollback();
				
			}
		}
	}
	
	public void updateStudent(Student student) {
		Transaction transaction = null;
		try(Session session = HibernateUtil.getSessionFactory().openSession()){
			//start the transaction
			transaction = session.beginTransaction();
			
			//save student object
			session.saveOrUpdate(student);
			
			//commit the transaction
			transaction.commit();
		}catch(Exception e) {
			if(transaction != null) {
				transaction.rollback();
				
			}
		}
	}
	
	public Student getStudentById(long id) {
		Transaction transaction = null;
		Student student = null;
		try(Session session = HibernateUtil.getSessionFactory().openSession()){
			//start the transaction
			transaction = session.beginTransaction();
			
			//get student object
			//student = session.load(Student.class, id);
			student = session.get(Student.class, id);
			
			//commit the transaction
			transaction.commit();
		}catch(Exception e) {
			if(transaction != null) {
				transaction.rollback();
				
			}
		}
		return student;
	}
	
	public List<Student> getAllStudents() {
		Transaction transaction = null;
		List<Student> students = null;
		try(Session session = HibernateUtil.getSessionFactory().openSession()){
			//start the transaction
			transaction = session.beginTransaction();
			
			//get student object
			//student = session.load(Student.class, id);
			students = session.createQuery("from Student").list();
			
			//commit the transaction
			transaction.commit();
		}catch(Exception e) {
			if(transaction != null) {
				transaction.rollback();
				
			}
		}
		return students;
	}
	
	public Student deleteStudent(long id) {
		Transaction transaction = null;
		Student student = null;
		try(Session session = HibernateUtil.getSessionFactory().openSession()){
			//start the transaction
			transaction = session.beginTransaction();
			
			//get student object
			//student = session.load(Student.class, id);
			student = session.get(Student.class, id);
			session.delete(student);
			
			//commit the transaction
			transaction.commit();
		}catch(Exception e) {
			if(transaction != null) {
				transaction.rollback();
				
			}
		}
		return student;
	}
}
