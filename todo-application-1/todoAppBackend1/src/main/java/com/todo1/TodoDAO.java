// TodoDAO.java
package com.todo1;

import org.hibernate.Session;
import org.hibernate.Transaction;

public class TodoDAO {
    public void saveOrUpdate(Todo todo) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            Transaction transaction = session.beginTransaction();
            session.saveOrUpdate(todo);
            transaction.commit();
        }
    }

    public Todo getById(Long id) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(Todo.class, id);
        }
    }

    // Add methods for other CRUD operations (getAll, delete, etc.)
}
