package eruo1.etime1.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import eruo1.etime1.domain.user.Donate;
import eruo1.etime1.repository.DonateRepo;
import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class DonateService {

    private final DonateRepo donateRepo;

    @Transactional
    public void saveDonate(Donate donate) {
        donateRepo.save(donate);
    }

    public List<Donate> findDonates() {
        return donateRepo.findAll();
    }

    public Donate findOne(Long donateId) {
        return donateRepo.findOne(donateId);
    }
}
