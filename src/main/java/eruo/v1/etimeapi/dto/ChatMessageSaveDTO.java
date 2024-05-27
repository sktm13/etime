package eruo.v1.etimeapi.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChatMessageSaveDTO {
    private String sender;    // 메시지를 보낸 사용자
    private String receiver;  // 메시지를 받는 사용자
    private String message;   // 채팅 메시지
    private LocalDateTime sendDate;  // 메시지 전송 시간
}