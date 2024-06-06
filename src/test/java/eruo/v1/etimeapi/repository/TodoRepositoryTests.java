package eruo.v1.etimeapi.repository;

import java.time.LocalDate;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import eruo.v1.etimeapi.domain.Todo;
import lombok.extern.log4j.Log4j2;

@SpringBootTest
@Log4j2
public class TodoRepositoryTests {
    @Autowired
    private TodoRepository todoRepository;

    @Test
    public void test1() {
        // log.info("--------------------------");
        // log.info(todoRepository);
        Assertions.assertNotNull(todoRepository);
        log.info(todoRepository.getClass().getName());
    }

    @Test
    public void testInsert() {
        Todo todo = Todo.builder()
                .title("Title...")
                .content("Component.....")
                .dueDate(LocalDate.of(2023, 12, 31))
                .build();
        Todo result = todoRepository.save(todo);

        log.info(result);
    }

    @Test
    public void testRead() {
        Long tno = 1L;

        Optional<Todo> result = todoRepository.findById(tno);

        Todo todo = result.orElseThrow();

        log.info(todo);
    }

    @Test
    public void testUpdate(){
        //먼저 로딩하고 엔티티 객체를 변경 /setter
        Long tno = 1L;

        Optional<Todo> result = todoRepository.findById(tno);

        Todo todo = result.orElseThrow();

        todo.setTitle("Update Title");
        todo.setContent("updated content");
        todo.setComplete(true);

        todoRepository.save(todo);
    }

    @Test
    public void testPaging(){
        //페이지 번호는 0부터
        Pageable pageable = PageRequest.of(0, 10, Sort.by("tno").descending());

        Page<Todo> result = todoRepository.findAll(pageable);

        log.info(result.getTotalElements());
        log.info(result.getContent());
    }

    // @Test
    // public void testSearch1(){
    //     todoRepository.search1();
    // }
}