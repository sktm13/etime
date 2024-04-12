package eruo1.etime1.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import eruo1.etime1.domain.user.Message;
import eruo1.etime1.repository.MessageRepo;
import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MessageService {

    private final MessageRepo messageRepo;

    @Transactional
    public void saveMessage(Message message) {
        messageRepo.save(message);
    }

    public List<Message> findMessages() {
        return messageRepo.findAll();
    }

    public Message findOne(Long messageId) {
        return messageRepo.findOne(messageId);
    }
}
