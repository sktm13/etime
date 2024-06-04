package eruo.v1.etimeapi.pay.pay.domain.entity;

import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.util.Assert;

@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Wallet {
    @Id
    @GeneratedValue
    private Long id;

    @Embedded
    private Owner owner;
    private Double point;

    public Wallet(Owner owner) {
        Assert.notNull(owner, "주인이 null일 수 없습니다.");

        this.owner = owner;
        this.point = 0.0;
    }

    public void addPoint(double point) {
        Assert.isTrue(point > 0, "point must be greater than 0.");

        this.point += point;
    }

    public void subtractPoint(double point) {
        Assert.isTrue(point > 0, "point must be greater than 0.");

        if (this.point < point) {
            throw new InSufficientPointException();
        }

        this.point -= point;
    }

    public long getId() {
        return this.id;
    }

    public String getOwnerName() {
        return this.owner.getName();
    }

    public double getPoint() {
        return this.point;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || this.getClass() != o.getClass()) return false;

        Wallet that = (Wallet) o;

        return this.id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return this.id.hashCode();
    }
}
