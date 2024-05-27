package eruo.v1.etimeapi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import eruo.v1.etimeapi.domain.ChatMessageEntity;
import eruo.v1.etimeapi.repository.ChatRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ChatService {

    private final ChatRepository chatRepository;

    public List<ChatMessageEntity> findAllMessagesBetweenUsers(String user1, String user2) {
        return chatRepository.findAllBySenderAndReceiverOrSenderAndReceiverOrderBySendDate(user1, user2, user2, user1);
    }
}