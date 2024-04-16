package eruo1.etime1.pay.domain.repo;

import eruo1.etime1.pay.domain.entity.Transaction;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.Repository;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Repository
public interface TransactionRepository extends Repository<Transaction, Long> {
    Transaction save(Transaction transaction);

    List<Transaction> findByWalletIdAndCreatedTimeBetween(
            long walletId,
            OffsetDateTime from, OffsetDateTime to,
            Pageable pageable
    );

    Optional<Transaction> findByWalletIdAndId(long walletId, long transactionId);
}
