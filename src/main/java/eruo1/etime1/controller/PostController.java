package eruo1.etime1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import eruo1.etime1.service.PostService;
import eruo1.etime1.domain.post.Post;

@RestController
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping("/api/test1")
    public String savePost_test1() {
        Post Post = new Post();
        Post.setTitle("TestTitle");
        Post.setContent("testContent");
        postService.savePost(Post);
        return "Post 성공";
    }

    @GetMapping("/api/test2")
    public String getPost_test2() {
        Post post = postService.findOne(1L);
        if (post != null) {
            return post.getTitle();
        }
        return "데이터 없음";
    }

    @PostMapping("/api/savepost")
    public String savePost(@RequestBody Post post) {
        postService.savePost(post);
        return "Post 성공";
    }
}
