package eruo.v1.etimeapi.pay.donate.application;

import eruo.v1.etimeapi.pay.donate.domain.entity.Donate;
import eruo.v1.etimeapi.pay.donate.domain.entity.Donor;
import eruo.v1.etimeapi.pay.donate.domain.entity.Receiver;
import eruo.v1.etimeapi.pay.donate.domain.repository.DonateRepository;
import eruo.v1.etimeapi.pay.donate.domain.service.FindUserService;
import eruo.v1.etimeapi.pay.donate.domain.service.TransmitPointService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DonateService {
    private final DonateRepository donateRepository;
    private final FindUserService findUserService;
    private final TransmitPointService transmitPointService;

    public DonateService(
            DonateRepository donateRepository,
            FindUserService findUserService,
            TransmitPointService transmitPointService
    ) {
        this.donateRepository = donateRepository;
        this.findUserService = findUserService;
        this.transmitPointService = transmitPointService;
    }

    @Transactional
    public void donate(long donorId, long receiverId, double amount) {
        Donor donor = this.findUserService.findDonorById(donorId).orElseThrow(NoUserException::new);
        Receiver receiver = this.findUserService.findReceiverById(receiverId).orElseThrow(NoUserException::new);

        this.transmitPointService.transmitPoint(donor, receiver, amount);

        this.donateRepository.save(new Donate(donor, receiver, amount));
    }
}
