package eruo.v1.etimeapi.controller.post;

import eruo.v1.etimeapi.domain.post.Post;
import eruo.v1.etimeapi.repository.post.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class PostController {
    private final PostRepository postRepository;

    // id 역순 정렬로 GET
    @GetMapping("/api/post/desc")
    public List<Post> getAllPostDesc() {
        return postRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    // id 정순 정렬로 GET
    @GetMapping("/api/post/asc")
    public List<Post> getAllPostAsc() {
        return postRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    // 지정한 id의 post를 GET
    @GetMapping("/api/post/{id}")
    public Optional<Post> getOnePost(@PathVariable Long id) {
        return postRepository.findById(id);
    }

    // post를 받아 POST
    @PostMapping("/api/post")
    public String savePost(@RequestBody Post post) {
        postRepository.save(post);
        return "Post 성공";
    }

    // post를 받아 PUT
    @PutMapping("/api/post/")
    public String putPost(@RequestBody Post post) {
        postRepository.save(post);
        return "Put 성공";
    }

    // id를 받아 DELETE
    @DeleteMapping("/api/post/{id}")
    public String deletePost(@PathVariable Long id) {
        postRepository.deleteById(id);
        return "Delete 성공";
    }
}
