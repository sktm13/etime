package eruo.v1.etimeapi.domain.user;

import eruo.v1.etimeapi.domain.post.Comment;
import eruo.v1.etimeapi.domain.post.Post;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter @Setter
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    //회원가입 필요 정보
    private String loginId;

    private String password;

    private String name;

    //마이페이지
    private String nickName; //nickName <- name, 추후 변경 가능

    private String money;

    @Enumerated(EnumType.STRING)
    private Grade grade;

    // 작성
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Post> postList;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Comment> commentList;



//    //-----------------------------
//
//    @OneToMany(mappedBy = "sender")
//    private List<Message> sendMassageList = new ArrayList<>();
//
//    // @OneToMany(mappedBy = "receiver")
//    // private List<Message> receiveMassageList = new ArrayList<>();
//
//    @OneToMany(mappedBy = "subscriber")
//    private List<Subscribe> subscriberList = new ArrayList<>();
//
//    // @OneToMany(mappedBy = "creator")
//    // private List<Subscribe> creatorList = new ArrayList<>();
//
//    @OneToMany(mappedBy = "donator")
//    private List<Donate> sendDonateList = new ArrayList<>();
//
//    // @OneToMany(mappedBy = "donatory")
//    // private List<Donate> receiveDonateList = new ArrayList<>();
//
//    //-------------------------------
//
//    @OneToMany(mappedBy = "user")
//    private List<Verify> verifyList = new ArrayList<>();
//
//    @OneToMany(mappedBy = "user")
//    private List<Post> postList = new ArrayList<>();
//
//    @OneToMany(mappedBy = "user")
//    private List<Comment> reviewList = new ArrayList<>();
//
//    //------------------------------
}
