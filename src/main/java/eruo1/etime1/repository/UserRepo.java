package eruo1.etime1.repository;

import java.util.List;

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

    public User findOne(Long id){
        return em.find(User.class, id);
    }

    public User findOneByNickName(String nickName){
        return em.find(User.class, nickName);
    }
    public List<User> findAll(){
        return em.createQuery("select m from User m", User.class)
                .getResultList();
    }

    public List<User> findByLoginId(String loginId){
        return em.createQuery("select m from User m where m.loginId = :loginId", User.class)
                .setParameter("loginId", loginId)
                .getResultList();
    }

    public List<User> findByName(String name){
        return em.createQuery("select m from User m where m.name = :name", User.class)
                .setParameter("name", name)
                .getResultList();
    }

    public List<User> findByNickName(String nickName){
        return em.createQuery("select m from User m where m.nickName = :nickName", User.class)
                .setParameter("nickName", nickName)
                .getResultList();
    }
}
