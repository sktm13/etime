package eruo1.etime1.pay.application;

import eruo1.etime1.pay.domain.entity.Owner;
import eruo1.etime1.pay.domain.entity.Wallet;
import eruo1.etime1.pay.domain.repo.TransactionRepository;
import eruo1.etime1.pay.domain.repo.WalletRepository;
import eruo1.etime1.pay.domain.service.OwnerService;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CheckPaymentService {
    private final OwnerService ownerService;
    private final WalletRepository walletRepository;
    private final TransactionRepository transactionRepository;

    public CheckPaymentService(
            OwnerService ownerService,
            WalletRepository walletRepository,
            TransactionRepository transactionRepository
    ) {
        this.ownerService = ownerService;
        this.walletRepository = walletRepository;
        this.transactionRepository = transactionRepository;
    }

    @Transactional(readOnly = true)
    public List<TransactionDTO> getPaymentHistory(GetPaymentHistoryCmd cmd) {
        Owner owner = this.ownerService.getOwner(cmd.ownerId()).orElseThrow(NotFoundUserException::new);
        Wallet wallet = this.walletRepository.findByOwner(owner).orElseThrow(NotFoundWalletException::new);

        return this.transactionRepository.findByWalletIdAndCreatedTimeBetween(
                        wallet.getId(),
                        cmd.from(),
                        cmd.to(),
                        PageRequest.of(
                                cmd.page(), cmd.size(),
                                cmd.sort()
                        )
                )
                .stream()
                .map(transaction -> TransactionDTO.builder()
                        .transaction(transaction)
                        .wallet(wallet)
                        .owner(owner)
                        .build()
                )
                .toList();
    }

    @Transactional(readOnly = true)
    public Optional<TransactionDTO> getPaymentDetail(long ownerId, long transactionId) {
        Owner owner = this.ownerService.getOwner(ownerId).orElseThrow(NotFoundUserException::new);
        Wallet wallet = this.walletRepository.findByOwner(owner).orElseThrow(NotFoundWalletException::new);

        return this.transactionRepository.findByWalletIdAndId(wallet.getId(), transactionId)
                .map(transaction -> TransactionDTO.builder()
                        .transaction(transaction)
                        .owner(owner)
                        .wallet(wallet)
                        .build()
                );
    }
}
