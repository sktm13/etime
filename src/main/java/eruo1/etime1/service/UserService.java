package eruo1.etime1.service;

import java.util.List;
import java.util.Optional;

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
    //회원 가입
    @Transactional
    public void join(User user) {
        validateDuplicateUser(user);
        userRepo.save(user);
    }
    //중복회원 검증(회원가입에 사용)
    private void validateDuplicateUser(User user) {
        Optional<User> findUserLoginIdOptional = userRepo.findByLoginId(user.getLoginId());
        // Optional 이 null일때는 .get() 하면 오류남
        // .get()은 존재하는게 확실할때만
        // User findUserLoginId = findUserLoginIdOptional.get();
        // System.out.println("생성하는 객체의 아이디는" + findUserLoginId.getLoginId());
        if (findUserLoginIdOptional.isPresent()) {
            throw new IllegalStateException("이미 존재하는 회원아이디 입니다.");
        }
    }
    // 회원 id로 조회
    public User findById(Long userId) {
        return userRepo.findById(userId);
    }
    // 회원 전체 조회
    public List<User> findUsers() {
        return userRepo.findAll();
    }
    /**
     * 로그인 실패시 return null 
     */
    public User login(String loginId, String password) {
        return userRepo.findByLoginId(loginId)
                .filter(m -> m.getPassword().equals(password))
                .orElse(null);
    }
}
