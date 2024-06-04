package eruo.v1.etimeapi.pay.pay.application;

import eruo.v1.etimeapi.pay.pay.domain.entity.Owner;
import eruo.v1.etimeapi.pay.pay.domain.entity.Transaction;
import eruo.v1.etimeapi.pay.pay.domain.repo.TransactionRepository;
import eruo.v1.etimeapi.pay.pay.domain.service.FindUserService;
import org.springframework.transaction.annotation.Transactional;

public abstract class MakeTransactionService {
    private final FindUserService findUserService;
    private final TransactionRepository transactionRepository;

    protected MakeTransactionService(
            FindUserService findUserService,
            TransactionRepository transactionRepository
    ) {
        this.findUserService = findUserService;
        this.transactionRepository = transactionRepository;
    }

    @Transactional
    public void makeTransaction(long userId, double amount) {
        Owner owner = this.findUserService.findOwnerById(userId).orElseThrow(NoUserException::new);

        Transaction transaction = this.createTransaction(owner, amount);

        this.transactionRepository.save(transaction);
    }

    protected abstract Transaction createTransaction(Owner owner, double amount);
}
