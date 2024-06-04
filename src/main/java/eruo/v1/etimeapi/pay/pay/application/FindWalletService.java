package eruo.v1.etimeapi.pay.pay.application;

import eruo.v1.etimeapi.pay.pay.domain.entity.Owner;
import eruo.v1.etimeapi.pay.pay.domain.repo.WalletRepository;
import eruo.v1.etimeapi.pay.pay.domain.service.FindUserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class FindWalletService {
    private final WalletRepository walletRepository;
    private final FindUserService findUserService;

    public FindWalletService(WalletRepository walletRepository, FindUserService findUserService) {
        this.walletRepository = walletRepository;
        this.findUserService = findUserService;
    }

    @Transactional(readOnly = true)
    public Optional<WalletDTO> findWalletByUserId(long userId) {
        Owner owner = this.findUserService.findOwnerById(userId).orElseThrow(NoUserException::new);

        return this.walletRepository.findByOwner(owner)
                .map(WalletDTO::new);
    }
}
