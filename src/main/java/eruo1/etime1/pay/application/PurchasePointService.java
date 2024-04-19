package eruo1.etime1.pay.application;

import eruo1.etime1.pay.domain.entity.Owner;
import eruo1.etime1.pay.domain.entity.Transaction;
import eruo1.etime1.pay.domain.entity.Wallet;
import eruo1.etime1.pay.domain.repo.TransactionRepository;
import eruo1.etime1.pay.domain.repo.WalletRepository;
import eruo1.etime1.pay.domain.service.OwnerService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PurchasePointService {
    private final OwnerService ownerService;
    private final WalletRepository walletRepository;
    private final TransactionRepository transactionRepository;

    public PurchasePointService(
            OwnerService ownerService,
            WalletRepository walletRepository,
            TransactionRepository transactionRepository
    ) {
        this.ownerService = ownerService;
        this.walletRepository = walletRepository;
        this.transactionRepository = transactionRepository;
    }

    @Transactional
    public void purchasePoint(long userId, double amount) {
        Owner owner = this.ownerService.getOwner(userId).orElseThrow(NotFoundUserException::new);
        Wallet wallet = this.walletRepository.findByOwner(owner).orElseThrow(NotFoundWalletException::new);

        Transaction transaction = wallet.addPoint(amount);

        this.walletRepository.save(wallet);
        this.transactionRepository.save(transaction);
    }
}
