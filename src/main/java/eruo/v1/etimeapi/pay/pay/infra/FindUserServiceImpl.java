package eruo.v1.etimeapi.pay.pay.infra;

import eruo.v1.etimeapi.pay.pay.domain.entity.Owner;
import eruo.v1.etimeapi.pay.pay.domain.service.FindUserService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("Pay.FindUserService")
public class FindUserServiceImpl implements FindUserService {
    //private final UserRepo userRepository;

    public FindUserServiceImpl(/*UserRepo userRepository*/) {
        //this.userRepository = userRepository;
    }

    @Override
    public Optional<Owner> findOwnerById(long userId) {
        return Optional.of(new Owner(userId, "ljs"));
    }
}
