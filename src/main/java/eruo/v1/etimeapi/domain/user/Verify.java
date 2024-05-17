package eruo.v1.etimeapi.domain.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Verify {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "verify_id")
    private Long id;

//    @ManyToOne //(fetch = LAZY)
//    @JoinColumn(name = "user_id")
//    private User user;
//
//    //검증 받으려는 내용과 분야
//    private String content;
//
//    @ManyToMany(mappedBy = "verifyList")
//    private List<Category> categories = new ArrayList<>();
//
//    private LocalDateTime verifyTime;
//
//    @Enumerated(EnumType.STRING)
//    private VerifyStatus status;
}
