package eruo1.etime1.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import eruo1.etime1.domain.user.Subscribe;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class SubscribeRepo {

    private final EntityManager em;

    public void save(Subscribe subscribe) {
        em.persist(subscribe);
    }

    public Subscribe findOne(Long id) {
        return em.find(Subscribe.class, id);
    }

    public List<Subscribe> findAll() {
        return em.createQuery("select i from Subscribe i", Subscribe.class)
                .getResultList();
    }
}
