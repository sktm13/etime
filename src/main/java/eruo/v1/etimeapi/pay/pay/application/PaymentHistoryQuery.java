package eruo.v1.etimeapi.pay.pay.application;

import lombok.Builder;
import org.springframework.data.domain.Sort;
import org.springframework.util.Assert;

import java.time.OffsetDateTime;
import java.util.Optional;

public record PaymentHistoryQuery(
        long ownerId,
        OffsetDateTime from,
        OffsetDateTime to,
        int page,
        int size,
        String direction
) {
    @Builder
    public PaymentHistoryQuery {
        Assert.isTrue(page > 0, "page must be greater than 0");
        Assert.isTrue(size > 0, "size must be greater than 0");
    }

    @Override
    public OffsetDateTime from() {
        return Optional.ofNullable(this.from).orElse(OffsetDateTime.now().minusDays(7));
    }

    @Override
    public OffsetDateTime to() {
        return Optional.ofNullable(this.to).orElse(OffsetDateTime.now());
    }

    @Override
    public String direction() {
        return Optional.ofNullable(this.direction).orElse("desc");
    }

    public Sort sort() {
        return Sort.by(Sort.Direction.fromString(this.direction()), "createdTime");
    }
}
