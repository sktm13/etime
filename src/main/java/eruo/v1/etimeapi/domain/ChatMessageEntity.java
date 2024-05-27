package eruo.v1.etimeapi.domain;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import eruo.v1.etimeapi.dto.ChatMessageSaveDTO;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "chat_table")
public class ChatMessageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chat_id")
    private Long id;

    @Column
    private String sender;      // 메시지를 보낸 사용자

    @Column
    private String receiver;    // 메시지를 받는 사용자

    @Column
    private String message;     // 채팅 메시지

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime sendDate;  // 메시지 전송 시간

    public static ChatMessageEntity toChatEntity(ChatMessageSaveDTO chatMessageSaveDTO){
        ChatMessageEntity chatMessageEntity = new ChatMessageEntity();

        chatMessageEntity.setSender(chatMessageSaveDTO.getSender());

        chatMessageEntity.setReceiver(chatMessageSaveDTO.getReceiver());

        chatMessageEntity.setMessage(chatMessageSaveDTO.getMessage());

        return chatMessageEntity;
    }
}