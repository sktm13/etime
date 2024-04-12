package eruo1.etime1.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import eruo1.etime1.domain.user.Message;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class MessageRepo {

    private final EntityManager em;

    public void save(Message message) {
        em.persist(message);
    }

    public Message findOne(Long id) {
        return em.find(Message.class, id);
    }

    public List<Message> findAll() {
        return em.createQuery("select i from Donate i", Message.class)
                .getResultList();
    }
}
