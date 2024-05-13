package eruo.v1.etimeapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import eruo.v1.etimeapi.domain.post.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
}
