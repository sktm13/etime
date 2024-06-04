package eruo.v1.etimeapi.pay.donate.domain.entity;

import jakarta.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.util.Assert;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Embeddable
public class Receiver {
    private Long userId;
    private String userName;

    public Receiver(long userId, String userName) {
        Assert.hasText(userName, "userName must not be empty");

        this.userId = userId;
        this.userName = userName;
    }

    public long getUserId() {
        return this.userId;
    }

    String getUserName() {
        return this.userName;
    }
}
