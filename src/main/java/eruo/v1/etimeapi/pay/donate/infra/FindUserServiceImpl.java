package eruo.v1.etimeapi.pay.donate.infra;

import eruo.v1.etimeapi.pay.donate.domain.entity.Donor;
import eruo.v1.etimeapi.pay.donate.domain.entity.Receiver;
import eruo.v1.etimeapi.pay.donate.domain.service.FindUserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service("Donate.FindUserService")
public class FindUserServiceImpl implements FindUserService {
    //private final UserRepo userRepo;

    public FindUserServiceImpl(/*UserRepo userRepo*/) {
        //this.userRepo = userRepo;
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<Donor> findDonorById(long userId) {
        return Optional.of(new Donor(userId, "ljs"));
    }

    @Transactional(readOnly = true)
    @Override
    public Optional<Receiver> findReceiverById(long userId) {
        return Optional.of(new Receiver(userId, "ljs"));
    }
}
