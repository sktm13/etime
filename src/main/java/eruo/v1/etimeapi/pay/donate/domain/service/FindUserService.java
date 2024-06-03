package eruo.v1.etimeapi.pay.donate.domain.service;

import eruo.v1.etimeapi.pay.donate.domain.entity.Donor;
import eruo.v1.etimeapi.pay.donate.domain.entity.Receiver;

import java.util.Optional;

public interface FindUserService {
    Optional<Donor> findDonorById(long userId);
    Optional<Receiver> findReceiverById(long userId);
}
