package eruo.v1.etimeapi.pay.donate.application;

import org.springframework.data.domain.Sort;
import org.springframework.util.Assert;

import java.time.OffsetDateTime;
import java.util.Optional;

public record DonationHistoryQuery(
        long donorId,
        OffsetDateTime from,
        OffsetDateTime to,
        int page,
        int size,
        String direction
) {
    public DonationHistoryQuery {
        Assert.isTrue(page > 0, "page must be greater than 0");
        Assert.isTrue(size > 0, "size must be greater than 0");
    }

    @Override
    public OffsetDateTime from() {
        return Optional.ofNullable(from).orElse(OffsetDateTime.now().minusDays(7));
    }

    @Override
    public OffsetDateTime to() {
        return Optional.ofNullable(to).orElse(OffsetDateTime.now());
    }

    @Override
    public String direction() {
        return Optional.ofNullable(direction).orElse("desc");
    }

    public Sort sort() {
        return Sort.by(Sort.Direction.fromString(direction()), "createdTime");
    }
}
