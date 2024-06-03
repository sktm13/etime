package eruo.v1.etimeapi.pay.pay.application;

import eruo.v1.etimeapi.pay.pay.domain.entity.Owner;
import eruo.v1.etimeapi.pay.pay.domain.entity.Transaction;
import lombok.Getter;
import org.springframework.util.Assert;

import java.time.OffsetDateTime;
import java.util.Objects;

@Getter
public class TransactionDTO {
    private final long transactionId;

    private final double amount;
    private final double balance;

    private final long ownerId;
    private final String ownerName;

    private final OffsetDateTime createdTime;

    TransactionDTO(Transaction transaction, Owner owner) {
        Assert.notNull(transaction, "transaction must not be null");
        Assert.notNull(owner, "owner must not be null");

        this.transactionId = transaction.getId();

        this.amount = transaction.getAmount();
        this.balance = transaction.getBalance();

        this.ownerId = owner.getId();
        this.ownerName = Objects.requireNonNull(owner.getName());

        this.createdTime = Objects.requireNonNull(transaction.getCreatedTime());
    }
}
