package eruo.v1.etimeapi.pay.donate.domain.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.util.Assert;

import java.time.OffsetDateTime;

@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Donate {
    @Id
    @GeneratedValue
    private Long id;

    @AttributeOverrides({
            @AttributeOverride(
                    name = "userId",
                    column = @Column(name = "DONOR_ID")
            ),
            @AttributeOverride(
                    name = "userName",
                    column = @Column(name = "DONOR_NAME")
            )
    })
    @Embedded
    private Donor donor;
    @AttributeOverrides({
            @AttributeOverride(
                    name = "userId",
                    column = @Column(name = "RECEIVER_ID")
            ),
            @AttributeOverride(
                    name = "userName",
                    column = @Column(name = "RECEIVER_NAME")
            )
    })
    @Embedded
    private Receiver receiver;

    private Double amount;

    private OffsetDateTime createdTime;

    public Donate(Donor donor, Receiver receiver, double amount) {
        Assert.notNull(donor, "donor must not be null");
        Assert.notNull(receiver, "receiver must not be null");
        Assert.isTrue(amount > 0, "amount must be greater than zero");

        this.donor = donor;
        this.receiver = receiver;
        this.amount = amount;

        this.createdTime = OffsetDateTime.now();
    }

    public long getId() {
        return this.id;
    }

    public String getDonorName() {
        return donor.getUserName();
    }

    public String getReceiverName() {
        return receiver.getUserName();
    }

    public double getAmount() {
        return this.amount;
    }

    public OffsetDateTime getCreatedTime() {
        return this.createdTime;
    }
}
