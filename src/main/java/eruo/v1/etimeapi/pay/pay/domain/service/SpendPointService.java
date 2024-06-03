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
public class SpendPointService extends MakeTransactionService {
    private final WalletRepository walletRepository;

    public SpendPointService(
            FindUserService userService,
            WalletRepository walletRepository,
            TransactionRepository transactionRepository
    ) {
        super(userService, transactionRepository);

        this.walletRepository = walletRepository;
    }

    @Override
    protected Transaction createTransaction(Owner owner, double amount) {
        Wallet wallet = this.walletRepository.findByOwner(owner).orElseThrow(NoWalletException::new);
        wallet.subtractPoint(amount);

        wallet = this.walletRepository.save(wallet);

        return new Transaction(wallet, amount);
    }
}
