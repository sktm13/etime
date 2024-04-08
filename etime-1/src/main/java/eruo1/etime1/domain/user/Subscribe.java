package eruo1.etime1.domain.user;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Subscribe {
    
    @Id @GeneratedValue
    @Column(name = "subscribe_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User subscriber;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User creator;

    private LocalDateTime subscribeTime;
}
