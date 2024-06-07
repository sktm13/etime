package eruo.v1.etimeapi.service;

import java.util.List;
import eruo.v1.etimeapi.domain.ChatMessageEntity;

public interface ChatService{

    public List<ChatMessageEntity> getAllMessagesBetweenUsers(String user1, String user2);

    public List<ChatMessageEntity> getAllMessagesByUser(String user);

    public boolean isSender(ChatMessageEntity message, String user);

    
}