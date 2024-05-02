package eruo.v1.etimeapi.repository.search;

import org.springframework.data.domain.Page;

import eruo.v1.etimeapi.domain.Todo;
import eruo.v1.etimeapi.dto.PageRequestDTO;

public interface TodoSearch {
    
    Page<Todo> search1(PageRequestDTO pageRequestDTO);
}
