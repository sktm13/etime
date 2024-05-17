package eruo.v1.etimeapi.domain.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Donate {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "donate_id")
    private Long id;

//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User donator;
//
//    // @ManyToOne
//    // @JoinColumn(name = "user_id")
//    // private User donatory;
//
//    private String money;
//
//    private LocalDateTime donateTime;

}
