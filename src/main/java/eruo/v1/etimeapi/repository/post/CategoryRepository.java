package eruo.v1.etimeapi.repository.post;

import eruo.v1.etimeapi.domain.post.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
