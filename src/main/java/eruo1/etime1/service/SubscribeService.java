package eruo1.etime1.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import eruo1.etime1.domain.user.Subscribe;
import eruo1.etime1.repository.SubscribeRepo;
import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class SubscribeService {
    private final SubscribeRepo subscribeRepo;

    @Transactional
    public void saveSubscribe(Subscribe subscribe) {
        subscribeRepo.save(subscribe);
    }

    public List<Subscribe> findSubscribes() {
        return subscribeRepo.findAll();
    }

    public Subscribe findOne(Long subscribeId) {
        return subscribeRepo.findOne(subscribeId);
    }
}
