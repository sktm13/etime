package eruo.v1.etimeapi.dto;

import java.time.LocalDate;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor // JSON 변환시 비어있는 생성자 필요
public class TodoDTO {
    
    private Long tno;

    private String title;

    private String content;

    private boolean complete;

    private LocalDate dueDate;

    
}
