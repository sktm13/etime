package eruo.v1.etimeapi.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import eruo.v1.etimeapi.domain.ChatMessageEntity;
import eruo.v1.etimeapi.dto.ChatMessageDetailDTO;
import eruo.v1.etimeapi.dto.ChatMessageSaveDTO;
import eruo.v1.etimeapi.repository.ChatRepository;
import eruo.v1.etimeapi.service.ChatService;
import lombok.RequiredArgsConstructor;


@Controller
@RequiredArgsConstructor
public class StompChatController {

    private final SimpMessagingTemplate template;
    private final ChatRepository cr;
    private final ChatService cs;

    @MessageMapping(value = "/chat/message")        //  '/pub/chat/message' 로 전송
    public void message(ChatMessageDetailDTO message) {
        template.convertAndSendToUser(message.getReceiver(), "/message", message);

        ChatMessageSaveDTO chatMessageSaveDTO = new ChatMessageSaveDTO(message.getSender(), message.getReceiver(), message.getMessage(), message.getSendDate());
        cr.save(ChatMessageEntity.toChatEntity(chatMessageSaveDTO));
    }


    @GetMapping("/chat/u1Mlist")        //user 한명으로 리스트 검색
    @ResponseBody
    public List<ChatMessageDetailDTO> getMessageList(@RequestParam String sender) {
        List<ChatMessageEntity> messageEntities = cs.getAllMessagesByUser(sender);
        
        List<ChatMessageDetailDTO> messageList = new ArrayList<>();
        for (ChatMessageEntity entity : messageEntities) {
            ChatMessageDetailDTO dto = ChatMessageDetailDTO.toChatMessageDetailDTO(entity);
            messageList.add(dto);
        }
        return messageList;
    }

    @GetMapping("/chat/u2Mlist")        //user 수신자, 송신자로 리스트 검색
    @ResponseBody
    public List<ChatMessageDetailDTO> getMessageList(@RequestParam String sender, @RequestParam String receiver) {
        List<ChatMessageEntity> messageEntities = cs.getAllMessagesBetweenUsers(sender, receiver);
        
        List<ChatMessageDetailDTO> messageList = new ArrayList<>();
        for (ChatMessageEntity entity : messageEntities) {
            ChatMessageDetailDTO dto = ChatMessageDetailDTO.toChatMessageDetailDTO(entity);
            messageList.add(dto);
        }
        return messageList;
    }
}