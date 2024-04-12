package eruo1.etime1.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import eruo1.etime1.domain.post.Post;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class PostRepo {

    private final EntityManager em;

    public void save(Post post) {
        em.persist(post);
    }

    public Post findOne(Long id){
        return em.find(Post.class, id);
    }

    public List<Post> findAll(){
        return em.createQuery("select i from Post i", Post.class)
                .getResultList();
    }

    public List<Post> findByTitle(String title) {
        return em.createQuery("select m from Post m where m.title = :title", Post.class)
                .setParameter("title", title)
                .getResultList();
    }
}
