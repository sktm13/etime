package eruo.v1.etimeapi.controller.post;

import eruo.v1.etimeapi.domain.post.Comment;
import eruo.v1.etimeapi.repository.post.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class CommentController {
    private final CommentRepository commentRepository;

    @GetMapping("/api/comment/")
    private List<Comment> getOneComment() {
        return commentRepository.findAll();
    }
}
