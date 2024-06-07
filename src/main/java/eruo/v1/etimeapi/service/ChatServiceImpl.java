package eruo.v1.etimeapi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import eruo.v1.etimeapi.domain.ChatMessageEntity;
import eruo.v1.etimeapi.repository.ChatRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ChatServiceImpl implements ChatService {

    private final ChatRepository chatRepository;

    @Override
    public List<ChatMessageEntity> getAllMessagesBetweenUsers(String user1, String user2) {
        return chatRepository.findAllBySenderAndReceiverOrSenderAndReceiverOrderBySendDate(user1, user2, user2, user1);
    }

    @Override
    public List<ChatMessageEntity> getAllMessagesByUser(String user){
        return chatRepository.findAllBySenderOrReceiverOrderBySendDate(user);
    }

    @Override   
    public boolean isSender(ChatMessageEntity message, String user) {
        if(user == message.getSender()) return true;
        return false;
    }
}