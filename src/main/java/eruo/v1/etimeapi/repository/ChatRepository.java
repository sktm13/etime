package eruo.v1.etimeapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import eruo.v1.etimeapi.domain.ChatMessageEntity;


public interface ChatRepository extends JpaRepository<ChatMessageEntity,Long> {
    
    List<ChatMessageEntity> findAllBySenderAndReceiverOrSenderAndReceiverOrderBySendDate(String user1, String user2,
            String user22, String user12);

    List<ChatMessageEntity> findAllBySenderOrReceiverOrderBySendDate(String user);
}

