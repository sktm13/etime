package eruo.v1.etimeapi.repository.search;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import com.querydsl.jpa.JPQLQuery;

import eruo.v1.etimeapi.domain.QTodo;
import eruo.v1.etimeapi.domain.Todo;
import eruo.v1.etimeapi.dto.PageRequestDTO;
import lombok.extern.log4j.Log4j2;

@Log4j2
public class TodoSearchImpl extends QuerydslRepositorySupport implements TodoSearch{

    public TodoSearchImpl(){
        super(Todo.class);
    }

    @Override
    public Page<Todo> search1(PageRequestDTO pageRequestDTO) {

        log.info("search1......................");

        QTodo todo = QTodo.todo;

        JPQLQuery<Todo> query = from(todo);

        query.where(todo.title.contains("1"));

        Pageable pageable = PageRequest.of(
            pageRequestDTO.getPage() -1,
            pageRequestDTO.getSize(),
            Sort.by("tno").descending());

        this.getQuerydsl().applyPagination(pageable, query);

        List<Todo> list = query.fetch(); //목록 데이터

        long total = query.fetchCount();//Long 타입

        return new PageImpl<>(list, pageable, total);
    }
    
}
