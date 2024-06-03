package eruo.v1.etimeapi.pay.pay.application;

import eruo.v1.etimeapi.pay.pay.domain.entity.Wallet;
import lombok.Getter;
import org.springframework.util.Assert;

import java.util.Objects;

@Getter
public class WalletDTO {
    private final long walletId;
    private final String ownerName;
    private final double point;

    WalletDTO(Wallet wallet) {
        Assert.notNull(wallet, "wallet must not be null");

        this.walletId = wallet.getId();
        this.ownerName = Objects.requireNonNull(wallet.getOwnerName());
        this.point = wallet.getPoint();
    }
}
