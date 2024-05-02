package eruo1.etime1.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import eruo1.etime1.domain.user.Verify;
import eruo1.etime1.repository.VerifyRepo;
import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class VerifyService {

    private final VerifyRepo verifyRepo;

    @Transactional
    public void saveVerify(Verify verify) {
        verifyRepo.save(verify);
    }

    public List<Verify> findVerifies() {
        return verifyRepo.findAll();
    }

    public Verify findOne(Long verifyId) {
        return verifyRepo.findOne(verifyId);
    }
}
