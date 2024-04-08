package eruo1.etime1.domain.post;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import eruo1.etime1.domain.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Post {
    
    @Id @GeneratedValue
    @Column(name = "post_id")
    private Long id;

    @ManyToOne //(fetch = LAZY)
    private User user;

    private String title;
    private String content;
    
    // 썸네일

    private LocalDateTime postTime;

    @ManyToMany(mappedBy = "postList")
    private List<Category> categories = new ArrayList<>();

    @OneToMany(mappedBy = "review_id")
    private List<Review> reviewList = new ArrayList<>();

}
