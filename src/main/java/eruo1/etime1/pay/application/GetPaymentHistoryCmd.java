package eruo1.etime1.pay.application;

import lombok.Builder;
import org.springframework.data.domain.Sort;
import org.springframework.util.Assert;

import java.time.OffsetDateTime;

@Builder
public record GetPaymentHistoryCmd(
        long ownerId,
        OffsetDateTime from,
        OffsetDateTime to,
        int page,
        int size,
        String direction
) {
    public GetPaymentHistoryCmd {
        Assert.notNull(from, "시작일이 null일 수 없습니다.");
        Assert.notNull(to, "종료일이 null일 수 없습니다.");
    }

    public Sort sort() {
        return Sort.by(Sort.Direction.fromString(direction()), "createdTime");
    }
}
