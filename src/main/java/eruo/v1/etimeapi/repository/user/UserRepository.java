package eruo.v1.etimeapi.repository.user;

import eruo.v1.etimeapi.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
