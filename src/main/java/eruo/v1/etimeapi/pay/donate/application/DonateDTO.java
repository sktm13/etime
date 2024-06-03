package eruo.v1.etimeapi.pay.donate.application;

import eruo.v1.etimeapi.pay.donate.domain.entity.Donate;
import lombok.Getter;
import org.springframework.util.Assert;

import java.time.OffsetDateTime;
import java.util.Objects;

@Getter
public class DonateDTO {
    private final long donateId;

    private final String donorName;
    private final String receiverName;

    private final double amount;

    private final OffsetDateTime createdTime;

    DonateDTO(Donate donate) {
        Assert.notNull(donate, "donate must not be null");

        this.donateId = donate.getId();
        this.donorName = Objects.requireNonNull(donate.getDonorName());
        this.receiverName = Objects.requireNonNull(donate.getReceiverName());
        this.amount = donate.getAmount();
        this.createdTime = Objects.requireNonNull(donate.getCreatedTime());
    }
}
