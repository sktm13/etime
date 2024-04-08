package eruo1.etime1.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import eruo1.etime1.domain.post.Review;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class ReviewRepo {

    private final EntityManager em;

    public void save(Review review) {
        em.persist(review);
    }

    public Review findOne(Long id) {
        return em.find(Review.class, id);
    }

    public List<Review> findAll() {
        return em.createQuery("select i from Review i", Review.class)
                .getResultList();
    }
}
