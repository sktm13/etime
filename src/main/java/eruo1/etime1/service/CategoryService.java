package eruo1.etime1.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import eruo1.etime1.domain.post.Category;
import eruo1.etime1.repository.CategoryRepo;
import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CategoryService {
    
    private final CategoryRepo categoryRepo;

    @Transactional
    public void saveCategory(Category category){
        categoryRepo.save(category);
    }

    public List<Category> findCategory(){
        return categoryRepo.findAll();
    }
}
