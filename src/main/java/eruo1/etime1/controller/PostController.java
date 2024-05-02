package eruo1.etime1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import eruo1.etime1.service.PostService2;
import eruo1.etime1.domain.post.Post;

import java.util.List;

@RestController
public class PostController {

    @Autowired
    private PostService2 postService;

    @PostMapping("/api/posts")
    public String savePost(@RequestBody Post post) {
        postService.savePost(post);
        return "Post 성공";
    }

    @GetMapping("/api/posts")
    public List<Post> getPost() {
        return postService.findAll();
    }
}
