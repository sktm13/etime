package eruo1.etime1.service;

import eruo1.etime1.domain.post.Post;
import eruo1.etime1.repository.PostReposit;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PostService2 {
    
    private final PostReposit postRepo;

    @Transactional
    public void savePost(Post post) {
        postRepo.save(post);
    }

//    @Transactional
//    public void updatePost(Long postId, String title, String content) {
//        Post post = postRepo.findOne(postId);
//        post.setTitle(title);
//        post.setContent(content);
//    }

    public List<Post> findAll() {
        return postRepo.findAll();
    }

//    public Post findOne(Long postId) {
//        return postRepo.findOne(postId);
//    }
}
