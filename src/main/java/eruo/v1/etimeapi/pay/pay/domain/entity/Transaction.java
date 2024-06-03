package eruo.v1.etimeapi.pay.pay.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.util.Assert;

import java.time.OffsetDateTime;

@NoArgsConstructor(access = AccessLevel.PROTECTED, force = true)
@Entity
public class Transaction {
    @Id
    @GeneratedValue
    private Long id;

    private final Long walletId;
    private final Double balance;

    private final Double amount;

    private final OffsetDateTime createdTime;

    public Transaction(Wallet wallet, double amount) {
        Assert.notNull(wallet, "wallet must not be null");

        this.walletId = wallet.getId();
        this.balance = wallet.getPoint();

        this.amount = amount;

        this.createdTime = OffsetDateTime.now();
    }

    public long getId() {
        return this.id;
    }

    public double getBalance() {
        return this.balance;
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
