package eruo.v1.etimeapi.service;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.cglib.core.Local;

import eruo.v1.etimeapi.dto.PageRequestDTO;
import eruo.v1.etimeapi.dto.TodoDTO;
import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class TodoServiceTests {
    
    @Autowired
    TodoService todoService;

    @Test
    public void testGet(){

        Long tno = 50L;

        log.info(todoService.get(tno));

    }

    @Test
    public void testRegister(){
        TodoDTO todoDTO = TodoDTO.builder()
                    .title("Title...")
                    .content("Content....")
                    .dueDate(LocalDate.of(2023,12,31))
                    .build();
        
        log.info(todoService.register(todoDTO));
    }

    @Test
    public void testGetList(){
        PageRequestDTO pageRequestDTO = PageRequestDTO.builder().page(11).build();

        log.info(todoService.getList(pageRequestDTO));
    }
}
