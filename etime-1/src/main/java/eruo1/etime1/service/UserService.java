package eruo1.etime1.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import eruo1.etime1.domain.user.User;
import eruo1.etime1.repository.UserRepo;
import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {

    private final UserRepo userRepo;

    /**
     * 회원 가입
     */
    @Transactional
    public Long join(User user) {

        validateDuplicateUser(user); // 중복 회원 검증
        userRepo.save(user);
        return user.getId();
    }

    private void validateDuplicateUser(User user) {
        List<User> findUsers = userRepo.findByName(user.getName());
        if (!findUsers.isEmpty()) {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
    }

    // 회원 전체 조회
    public List<User> findUsers() {
        return userRepo.findAll();
    }

    public User findOne(Long userId) {
        return userRepo.findOne(userId);
    }
}
