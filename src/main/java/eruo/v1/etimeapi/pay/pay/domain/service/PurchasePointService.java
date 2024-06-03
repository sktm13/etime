package eruo.v1.etimeapi.pay.pay.domain.service;

import eruo.v1.etimeapi.pay.pay.application.MakeTransactionService;
import eruo.v1.etimeapi.pay.pay.application.NoWalletException;
import eruo.v1.etimeapi.pay.pay.domain.entity.Owner;
import eruo.v1.etimeapi.pay.pay.domain.entity.Transaction;
import eruo.v1.etimeapi.pay.pay.domain.entity.Wallet;
import eruo.v1.etimeapi.pay.pay.domain.repo.TransactionRepository;
import eruo.v1.etimeapi.pay.pay.domain.repo.WalletRepository;
import org.springframework.stereotype.Service;

@Service
public class PurchasePointService extends MakeTransactionService {
    private final WalletRepository walletRepository;

    public PurchasePointService(
            FindUserService findUserService,
            TransactionRepository transactionRepository,
            WalletRepository walletRepository
    ) {
        super(findUserService, transactionRepository);

        this.walletRepository = walletRepository;
    }

    @Override
    protected Transaction createTransaction(Owner owner, double amount) {
        Wallet wallet = this.walletRepository.findByOwner(owner).orElseThrow(NoWalletException::new);
        wallet.addPoint(amount);

        wallet = this.walletRepository.save(wallet);

        return new Transaction(wallet, amount);
    }
}
