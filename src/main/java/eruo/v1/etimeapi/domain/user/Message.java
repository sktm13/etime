package eruo.v1.etimeapi.domain.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Message {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "message_id")
    private Long id;

//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User sender;
//
//    // @ManyToOne
//    // @JoinColumn(name = "user_id")
//    // private User receiver;
//
//    private String content;
//
//    private LocalDateTime sendTime;

}
