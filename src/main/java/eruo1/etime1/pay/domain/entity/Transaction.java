package eruo1.etime1.pay.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import java.time.OffsetDateTime;

@NoArgsConstructor(access = AccessLevel.PROTECTED, force = true)
@Entity
public class Transaction {
    @Id
    @GeneratedValue
    private Long id;

    private final Long walletId;
    private final Double amount;

    private final OffsetDateTime createdTime;

    Transaction(Wallet wallet, double amount) {
        this.walletId = wallet.getId();
        this.amount = amount;

        this.createdTime = OffsetDateTime.now();
    }

    public long getId() {
        return this.id;
    }

    public double getAmount() {
        return this.amount;
    }

    public OffsetDateTime getCreatedTime() {
        return this.createdTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Transaction that = (Transaction) o;

        return this.id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return this.id.hashCode();
    }
}
