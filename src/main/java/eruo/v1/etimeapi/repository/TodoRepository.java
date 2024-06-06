package eruo.v1.etimeapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import eruo.v1.etimeapi.domain.Todo;
import eruo.v1.etimeapi.repository.search.TodoSearch;

public interface TodoRepository extends JpaRepository<Todo, Long>, TodoSearch{


    
}
