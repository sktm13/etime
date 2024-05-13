package eruo.v1.etimeapi.domain.post;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;


@Entity
@Getter @Setter @ToString
public class Post {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Long id;

//    @ManyToOne //(fetch = LAZY)
//    private User user;
//
    private String title;
    private String content;
//
//    // 썸네일
//
    private LocalDateTime postTime;
//
//    @ManyToMany(mappedBy = "postList")
//    private List<Category> categories = new ArrayList<>();
//
//    @OneToMany(mappedBy = "post", cascade =  CascadeType.ALL)
//    private List<Review> reviewList = new ArrayList<>();
}
