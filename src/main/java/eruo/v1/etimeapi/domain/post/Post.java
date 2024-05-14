package eruo.v1.etimeapi.domain.post;


import eruo.v1.etimeapi.domain.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Entity
@Getter @Setter @ToString
public class Post {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Long id;

    private String title;

    private LocalDateTime postTime;

    // 썸네일


    @Column(columnDefinition = "TEXT")
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "post", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Comment> commentList = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;



//    @ManyToMany(mappedBy = "postList")
//    private List<Category> categories = new ArrayList<>();

//    @OneToMany(mappedBy = "post", cascade =  CascadeType.ALL)
//    private List<Comment> reviewList = new ArrayList<>();
}
