package eruo.v1.etimeapi.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import eruo.v1.etimeapi.domain.Verify;

public interface VerifyRepository extends JpaRepository<Verify, Long>{
    
    @EntityGraph(attributePaths = "imageList")
    @Query("select v from Verify v where v.vid = :vid")
    Optional<Verify> selectOne(@Param("vid") Long vid);
    
    @Modifying
    @Query("update Verify v set v.approval = :approval where v.vid = :vid")
    void updateToDelete(@Param("vid") Long vid, @Param("approval") boolean approval);

    @Query("select v, vi from Verify v left join v.imageList vi where vi.ord = 0 and v.approval = false")
    Page<Object[]> selectList(Pageable pageable);
}
