package eruo1.etime1.repository;

import eruo1.etime1.domain.post.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostReposit extends JpaRepository<Post, Long> {
}
