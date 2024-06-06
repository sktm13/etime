package eruo.v1.etimeapi.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import eruo.v1.etimeapi.domain.Post;

public interface PostRepository extends JpaRepository<Post, Long>{
    
    @EntityGraph(attributePaths = "imageList")
    @Query("select p from Post p where p.pid = :pid")
    Optional<Post> selectOne(@Param("pid") Long pid);
    
    @Modifying
    @Query("update Post p set p.delFlag = :delFlag where p.pid = :pid")
    void updateToDelete(@Param("pid") Long pid, @Param("delFlag") boolean flag);

    @Query("select p, pi from Post p left join p.imageList pi where pi.ord = 0 and p.delFlag = false")
    Page<Object[]> selectList(Pageable pageable);
}
