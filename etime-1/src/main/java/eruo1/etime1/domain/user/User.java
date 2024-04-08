package eruo1.etime1.domain.user;

import java.util.ArrayList;
import java.util.List;

import eruo1.etime1.domain.post.Post;
import eruo1.etime1.domain.post.Review;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class User {
    
    @Id @GeneratedValue
    @Column(name = "user_id")
    private Long id;

    private String password;

    private String name;

    private String nickName;

    private String money;

    @Enumerated(EnumType.STRING)
    private Grade grade;
    //-----------------------------

    @OneToMany(mappedBy = "sender")
    private List<Message> sendMassageList = new ArrayList<>();

    @OneToMany(mappedBy = "receiver")
    private List<Message> receiveMassageList = new ArrayList<>();

    @OneToMany(mappedBy = "subscriber")
    private List<Subscribe> subscriberList = new ArrayList<>();

    @OneToMany(mappedBy = "creator")
    private List<Subscribe> creatorList = new ArrayList<>();

    @OneToMany(mappedBy = "donator")
    private List<Donate> sendDonateList = new ArrayList<>();

    @OneToMany(mappedBy = "donatory")
    private List<Donate> receiveDonateList = new ArrayList<>();

    //-------------------------------

    @OneToMany(mappedBy = "user")
    private List<Verify> verifyList = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Post> postList = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Review> reviewList = new ArrayList<>();

    //------------------------------
}
