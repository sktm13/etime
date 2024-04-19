package eruo1.etime1.service;

import eruo1.etime1.domain.user.User;
import eruo1.etime1.repository.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

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
        //회원 가입 이벤트 -> 지갑 생성, 환영 이메일 발송 등...

        return user.getId();
    }

    private void validateDuplicateUser(User user) {

        List<User> findUserLogId = userRepo.findByLoginId(user.getLoginId());
        List<User> findUserName = userRepo.findByName(user.getName());
        
        if (!findUserLogId.isEmpty()) {
            throw new IllegalStateException("이미 존재하는 회원아이디 입니다.");
        }
        if (!findUserName.isEmpty()) {
            throw new IllegalStateException("이미 존재하는 회원이름입니다.");
        }
    }

    // 회원 전체 조회
    public List<User> findUsers() {
        return userRepo.findAll();
    }

    public User findOne(Long userId) {
        return userRepo.findOne(userId);
    }

    public User findOneByNickName(String nickName){
        return userRepo.findOneByNickName(nickName);
    }
}
