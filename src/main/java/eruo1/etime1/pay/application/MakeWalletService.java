package eruo1.etime1.pay.application;

import eruo1.etime1.pay.domain.entity.Owner;
import eruo1.etime1.pay.domain.entity.Wallet;
import eruo1.etime1.pay.domain.repo.WalletRepository;
import eruo1.etime1.pay.domain.service.OwnerService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MakeWalletService {
    private final WalletRepository walletRepository;
    private final OwnerService ownerService;

    public MakeWalletService(WalletRepository walletRepository, OwnerService ownerService) {
        this.walletRepository = walletRepository;
        this.ownerService = ownerService;
    }

    @Transactional
    public void makeWallet(long userId) {
        Owner owner = this.ownerService.getOwner(userId).orElseThrow(NotFoundUserException::new);

        this.walletRepository.save(new Wallet(owner));
    }
}
