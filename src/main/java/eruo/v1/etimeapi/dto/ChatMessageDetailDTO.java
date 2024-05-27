package eruo.v1.etimeapi.dto;

import java.time.LocalDateTime;

import eruo.v1.etimeapi.domain.ChatMessageEntity;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChatMessageDetailDTO {
    private String sender;    // 메시지를 보낸 사용자
    private String receiver;  // 메시지를 받는 사용자
    private String message;   // 채팅 메시지 내용
    private LocalDateTime sendDate;  // 메시지 전송 시간

    public static ChatMessageDetailDTO toChatMessageDetailDTO(ChatMessageEntity chatMessageEntity){
        ChatMessageDetailDTO chatMessageDetailDTO = new ChatMessageDetailDTO();

        chatMessageDetailDTO.setSender(chatMessageEntity.getSender());
        chatMessageDetailDTO.setReceiver(chatMessageEntity.getReceiver());
        chatMessageDetailDTO.setMessage(chatMessageEntity.getMessage());
        chatMessageDetailDTO.setSendDate(chatMessageEntity.getSendDate());

        return chatMessageDetailDTO;
    }

}