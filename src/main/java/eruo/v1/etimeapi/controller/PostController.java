package eruo.v1.etimeapi.controller;

import eruo.v1.etimeapi.domain.post.Post;
import eruo.v1.etimeapi.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class PostController {
    private final PostRepository postRepository;

    @GetMapping("/api/posts")
    public List<Post> getPost() {
//        PostService.getPost()로 분리 예정
        return postRepository.findAll();
    }

    @PostMapping("/api/posts")
    public String savePost(@RequestBody Post post) {
//        PostService.savePost()로 분리 예정
        postRepository.save(post);
        return "Post 성공";
    }

    @PutMapping("/api/posts")
    public String putPost(@RequestBody Post post) {
//        PostService.putPost()로 분리 예정
        return "Put 성공";
    }

    @DeleteMapping("/api/posts")
    public String deletePost(@RequestBody Post post) {
//        PostService.deletePost()로 분리 예정
        return "Delete 성공";
    }
}
