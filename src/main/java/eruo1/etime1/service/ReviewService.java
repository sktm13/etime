package eruo1.etime1.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import eruo1.etime1.domain.post.Review;
import eruo1.etime1.repository.ReviewRepo;
import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepo reviewRepo;

    @Transactional
    public void saveReview(Review review) {
        reviewRepo.save(review);
    }

    public List<Review> findReviews() {
        return reviewRepo.findAll();
    }

    public Review findOne(Long reviewId) {
        return reviewRepo.findOne(reviewId);
    }
}
