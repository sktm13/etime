package eruo1.etime1.domain.user;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import eruo1.etime1.domain.post.Category;
import jakarta.persistence.*;
// import static javax.persistence.FetchType.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Verify {
    
    @Id @GeneratedValue
    @Column(name = "verify_id")
    private Long id;

    @ManyToOne //(fetch = LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    //검증 받으려는 내용과 분야
    private String content; 
    
    @ManyToMany(mappedBy = "verifyList")
    private List<Category> categories = new ArrayList<>();
    
    private LocalDateTime verifyTime;

    @Enumerated(EnumType.STRING)
    private VerifyStatus status;
}
