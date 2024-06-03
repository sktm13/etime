package eruo.v1.etimeapi.pay.donate.application;

import eruo.v1.etimeapi.pay.donate.domain.entity.Donor;
import eruo.v1.etimeapi.pay.donate.domain.repository.DonateRepository;
import eruo.v1.etimeapi.pay.donate.domain.service.FindUserService;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class DonationHistoryService {
    private final DonateRepository donateRepository;
    private final FindUserService findUserService;

    public DonationHistoryService(DonateRepository donateRepository, FindUserService findUserService) {
        this.donateRepository = donateRepository;
        this.findUserService = findUserService;
    }

    @Transactional(readOnly = true)
    public List<DonateDTO> getDonationHistory(DonationHistoryQuery query) {
        Donor donor = this.findUserService.findDonorById(query.donorId()).orElseThrow(NoUserException::new);

        return this.donateRepository.findByDonorAndCreatedTimeBetween(
                        donor,
                        query.from(), query.to(),
                        PageRequest.of(query.page(), query.size(), query.sort())
                ).stream()
                .map(DonateDTO::new)
                .toList();
    }

    @Transactional(readOnly = true)
    public Optional<DonateDTO> getDonationDetail(long donorId, long donationId) {
        Donor donor = this.findUserService.findDonorById(donorId).orElseThrow(NoUserException::new);

        return this.donateRepository.findByDonorAndId(donor, donationId)
                .map(DonateDTO::new);
    }
}
