package eruo1.etime1.pay.domain.service;

import eruo1.etime1.pay.domain.entity.Owner;

import java.util.Optional;

public interface OwnerService {
    Optional<Owner> getOwner(long userId);
}
