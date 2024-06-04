package eruo.v1.etimeapi.pay.pay.application;

import eruo.v1.etimeapi.pay.pay.domain.entity.Owner;
import eruo.v1.etimeapi.pay.pay.domain.entity.Wallet;
import eruo.v1.etimeapi.pay.pay.domain.repo.TransactionRepository;
import eruo.v1.etimeapi.pay.pay.domain.repo.WalletRepository;
import eruo.v1.etimeapi.pay.pay.domain.service.FindUserService;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentHistoryService {
    private final FindUserService findUserService;
    private final WalletRepository walletRepository;
    private final TransactionRepository transactionRepository;

    public PaymentHistoryService(
            FindUserService findUserService,
            WalletRepository walletRepository,
            TransactionRepository transactionRepository
    ) {
        this.findUserService = findUserService;
        this.walletRepository = walletRepository;
        this.transactionRepository = transactionRepository;
    }

    @Transactional(readOnly = true)
    public List<TransactionDTO> getPaymentHistory(PaymentHistoryQuery query) {
        Owner owner = this.findUserService.findOwnerById(query.ownerId()).orElseThrow(NoUserException::new);
        Wallet wallet = this.walletRepository.findByOwner(owner).orElseThrow(NoWalletException::new);

        return this.transactionRepository.findByWalletIdAndCreatedTimeBetween(
                        wallet.getId(),
                        query.from(),
                        query.to(),
                        PageRequest.of(
                                query.page(), query.size(),
                                query.sort()
                        )
                )
                .stream()
                .map(transaction -> new TransactionDTO(transaction, owner))
                .toList();
    }

    @Transactional(readOnly = true)
    public Optional<TransactionDTO> getPaymentDetail(long ownerId, long transactionId) {
        Owner owner = this.findUserService.findOwnerById(ownerId).orElseThrow(NoUserException::new);
        Wallet wallet = this.walletRepository.findByOwner(owner).orElseThrow(NoWalletException::new);

        return this.transactionRepository.findByWalletIdAndId(wallet.getId(), transactionId)
                .map(transaction -> new TransactionDTO(transaction, owner));
    }
}
