package eruo.v1.etimeapi.pay.pay.domain.entity;

import jakarta.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.util.Assert;

@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Embeddable
public class Owner {
    private Long userId;
    private String userName;

    public Owner(long userId, String userName) {
        Assert.hasText(userName, "userName must not be empty");

        this.userId = userId;
        this.userName = userName;
    }

    public long getId() {
        return this.userId;
    }

    public String getName() {
        return this.userName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Owner that = (Owner) o;

        return this.userId.equals(that.userId);
    }

    @Override
    public int hashCode() {
        return this.userId.hashCode();
    }
}