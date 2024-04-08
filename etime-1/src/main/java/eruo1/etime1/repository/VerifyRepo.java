package eruo1.etime1.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import eruo1.etime1.domain.user.Verify;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class VerifyRepo {

    private final EntityManager em;

    public void save(Verify verify) {
        em.persist(verify);
    }

    public Verify findOne(Long id) {
        return em.find(Verify.class, id);
    }

    public List<Verify> findAll() {
        return em.createQuery("select i from Verify i", Verify.class)
                .getResultList();
    }
}
