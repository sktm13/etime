package eruo1.etime1.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import eruo1.etime1.domain.user.Donate;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class DonateRepo {

    private final EntityManager em;

    public void save(Donate donate) {
        em.persist(donate);
    }

    public Donate findOne(Long id) {
        return em.find(Donate.class, id);
    }

    public List<Donate> findAll() {
        return em.createQuery("select i from Donate i", Donate.class)
                .getResultList();
    }
}
