package eruo.v1.etimeapi.controller.post;

import eruo.v1.etimeapi.domain.post.Category;
import eruo.v1.etimeapi.repository.post.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryRepository categoryRepository;

    @GetMapping("/api/category/")
    private List<Category> getOneCategory() {
        return categoryRepository.findAll();
    }
}
