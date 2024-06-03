package eruo.v1.etimeapi.pay.donate.domain.repository;

import eruo.v1.etimeapi.pay.donate.domain.entity.Donate;
import eruo.v1.etimeapi.pay.donate.domain.entity.Donor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.Repository;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.Optional;

public interface DonateRepository extends Repository<Donate, Long> {
    Donate save(Donate donate);

    List<Donate> findByDonorAndCreatedTimeBetween(
            Donor donor,
            OffsetDateTime from, OffsetDateTime to,
            Pageable pageable
    );

    Optional<Donate> findByDonorAndId(Donor donor, long id);
}
