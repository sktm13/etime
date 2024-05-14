package eruo.v1.etimeapi.controller.user;

import eruo.v1.etimeapi.domain.user.User;
import eruo.v1.etimeapi.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserRepository userRepository;

    @GetMapping("/api/user/")
    private Optional<User> getOneUser() {
        return userRepository.findById(1L);
    };
}
