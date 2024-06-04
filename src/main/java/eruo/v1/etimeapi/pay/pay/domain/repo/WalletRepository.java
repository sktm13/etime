package eruo.v1.etimeapi.pay.pay.domain.repo;

import eruo.v1.etimeapi.pay.pay.domain.entity.Owner;
import eruo.v1.etimeapi.pay.pay.domain.entity.Wallet;
import org.springframework.data.repository.Repository;

import java.util.Optional;

@org.springframework.stereotype.Repository
public interface WalletRepository extends Repository<Wallet, Long> {
    Optional<Wallet> findByOwner(Owner owner);

    Wallet save(Wallet wallet);
}
