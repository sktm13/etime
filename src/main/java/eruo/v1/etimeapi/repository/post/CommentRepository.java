package eruo.v1.etimeapi.repository.post;

import eruo.v1.etimeapi.domain.post.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
