package eruo1.etime1.pay.infra;

import eruo1.etime1.pay.domain.entity.Owner;
import eruo1.etime1.pay.domain.service.OwnerService;
import eruo1.etime1.repository.UserRepo;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OwnerServiceImpl implements OwnerService {
    private final UserRepo userRepository;

    public OwnerServiceImpl(UserRepo userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Optional<Owner> getOwner(long userId) {
        return Optional.ofNullable(this.userRepository.findOne(userId))
                .map(user -> new Owner(user.getId(), user.getName()));
    }
}
