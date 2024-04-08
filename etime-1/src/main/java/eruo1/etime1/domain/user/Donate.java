package eruo1.etime1.domain.user;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Donate {
    
    @Id @GeneratedValue
    @Column(name = "donate_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User donator;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User donatory;

    private String money;

    private LocalDateTime donateTime;
}