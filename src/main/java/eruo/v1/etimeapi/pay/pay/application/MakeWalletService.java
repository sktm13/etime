package eruo.v1.etimeapi.pay.pay.application;

import eruo.v1.etimeapi.pay.pay.domain.entity.Owner;
import eruo.v1.etimeapi.pay.pay.domain.entity.Wallet;
import eruo.v1.etimeapi.pay.pay.domain.repo.WalletRepository;
import eruo.v1.etimeapi.pay.pay.domain.service.FindUserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MakeWalletService {
    private final WalletRepository walletRepository;
    private final FindUserService findUserService;

    public MakeWalletService(WalletRepository walletRepository, FindUserService findUserService) {
        this.walletRepository = walletRepository;
        this.findUserService = findUserService;
    }

    @Transactional
    public void makeWallet(long userId) {
        Owner owner = this.findUserService.findOwnerById(userId).orElseThrow(NoUserException::new);

        this.walletRepository.save(new Wallet(owner));
    }
}
