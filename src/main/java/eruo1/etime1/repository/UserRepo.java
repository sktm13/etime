package eruo1.etime1.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import eruo1.etime1.domain.user.User;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class UserRepo {

    private final EntityManager em;

    public void save(User user){
        em.persist(user);
    }

    public User findById(Long id){
        return em.find(User.class, id);
    }

    //로그인
    public Optional<User> findByLoginId(String loginId){
        return findAll().stream()
                .filter(m -> m.getLoginId().equals(loginId))
                .findFirst();
    }
    public List<User> findAll(){
        return em.createQuery("select m from User m", User.class)
                .getResultList();
    }
    //-------------------------------------------------------
    public List<User> findByName(String name){
        return em.createQuery("select m from User m where m.name = :name", User.class)
                .setParameter("name", name)
                .getResultList();
    }

    public List<User> findBynickName(String nickName){
        return em.createQuery("select m from User m where m.nickName = :nickName", User.class)
                .setParameter("nickName", nickName)
                .getResultList();
    }
}
