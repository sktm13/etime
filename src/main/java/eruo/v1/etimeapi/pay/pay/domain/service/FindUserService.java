package eruo.v1.etimeapi.pay.pay.domain.service;

import eruo.v1.etimeapi.pay.pay.domain.entity.Owner;

import java.util.Optional;

public interface FindUserService {
    Optional<Owner> findOwnerById(long userId);
}
