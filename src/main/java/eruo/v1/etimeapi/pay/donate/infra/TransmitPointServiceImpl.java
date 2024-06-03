package eruo.v1.etimeapi.pay.donate.infra;

import eruo.v1.etimeapi.pay.donate.domain.entity.Donor;
import eruo.v1.etimeapi.pay.donate.domain.entity.Receiver;
import eruo.v1.etimeapi.pay.donate.domain.service.TransmitPointService;
import eruo.v1.etimeapi.pay.pay.domain.service.EarnPointService;
import eruo.v1.etimeapi.pay.pay.domain.service.SpendPointService;
import org.springframework.stereotype.Service;

@Service
public class TransmitPointServiceImpl implements TransmitPointService {
    private final SpendPointService spendPointService;
    private final EarnPointService earnPointService;

    public TransmitPointServiceImpl(SpendPointService spendPointService, EarnPointService earnPointService) {
        this.spendPointService = spendPointService;
        this.earnPointService = earnPointService;
    }

    @Override
    public void transmitPoint(Donor donor, Receiver receiver, double amount) {
        this.spendPointService.makeTransaction(donor.getUserId(), amount);
        this.earnPointService.makeTransaction(receiver.getUserId(), amount);
    }
}
