package eruo.v1.etimeapi.pay.donate.domain.service;

import eruo.v1.etimeapi.pay.donate.domain.entity.Donor;
import eruo.v1.etimeapi.pay.donate.domain.entity.Receiver;

public interface TransmitPointService {
    void transmitPoint(Donor donor, Receiver receiver, double amount);
}
