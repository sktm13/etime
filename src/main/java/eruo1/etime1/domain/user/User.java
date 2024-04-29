package eruo1.etime1.domain.user;

import java.util.ArrayList;
import java.util.List;

import eruo1.etime1.domain.post.Post;
import eruo1.etime1.domain.post.Review;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class User {
    
    @Id @GeneratedValue
    @Column(name = "user_id")
    private Long id;

    //회원가입 필요 정보
    @NotEmpty
    private String loginId;
    @NotEmpty
    private String password;
    @NotEmpty
    private String name;
    
    //마이페이지 
    private String nickName; //nickName <- name, 추후 변경 가능
    private String money;
    private String role; //ADMIN, USER
    private String grade; // 1, 2, 3, 4, 5
    //-----------------------------

    @OneToMany(mappedBy = "sender")
    private List<Message> sendMassageList = new ArrayList<>();

    // @OneToMany(mappedBy = "receiver")
    // private List<Message> receiveMassageList = new ArrayList<>();

    @OneToMany(mappedBy = "subscriber")
    private List<Subscribe> subscriberList = new ArrayList<>();

    // @OneToMany(mappedBy = "creator")
    // private List<Subscribe> creatorList = new ArrayList<>();

    @OneToMany(mappedBy = "donator")
    private List<Donate> sendDonateList = new ArrayList<>();

    // @OneToMany(mappedBy = "donatory")
    // private List<Donate> receiveDonateList = new ArrayList<>();

    //-------------------------------

    @OneToMany(mappedBy = "user")
    private List<Verify> verifyList = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Post> postList = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Review> reviewList = new ArrayList<>();

    //------------------------------
}
