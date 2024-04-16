package eruo1.etime1.pay.application;

import eruo1.etime1.pay.domain.entity.Owner;
import eruo1.etime1.pay.domain.entity.Transaction;
import eruo1.etime1.pay.domain.entity.Wallet;
import lombok.Builder;
import lombok.Getter;
import org.springframework.util.Assert;

import java.time.OffsetDateTime;
import java.util.Objects;

@Getter
public class TransactionDTO {
    private final long transactionId;
    private final long walletId;
    private final long ownerId;
    private final String ownerName;
    private final double amount;
    private final OffsetDateTime createdTime;

    @Builder
    private TransactionDTO(Transaction transaction, Wallet wallet, Owner owner) {
        Assert.notNull(transaction, "transaction must not be null");
        Assert.notNull(wallet, "wallet must not be null");
        Assert.notNull(owner, "owner must not be null");

        this.transactionId = transaction.getId();
        this.walletId = wallet.getId();
        this.ownerId = owner.getId();
        this.ownerName = Objects.requireNonNull(owner.getName());
        this.amount = transaction.getAmount();
        this.createdTime = Objects.requireNonNull(transaction.getCreatedTime());
    }
}
