package eruo1.etime1.pay.domain.repo;

import eruo1.etime1.pay.domain.entity.Owner;
import eruo1.etime1.pay.domain.entity.Wallet;
import org.springframework.data.repository.Repository;

import java.util.Optional;

@org.springframework.stereotype.Repository
public interface WalletRepository extends Repository<Wallet, Long> {
    Optional<Wallet> findByOwner(Owner owner);

    Wallet save(Wallet wallet);
}
