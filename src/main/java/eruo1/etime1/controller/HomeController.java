package eruo1.etime1.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import eruo1.etime1.domain.post.Category;
import eruo1.etime1.domain.post.Post;
import eruo1.etime1.service.CategoryService;
import eruo1.etime1.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
@RequiredArgsConstructor
public class HomeController {
    
    private final PostService postService;
    private final CategoryService categoryService;

    @GetMapping("/")
    public String home(Model model) {

        List<Post> postList = postService.findPosts();
        model.addAttribute("postList", postList);
        List<Category> categoryList = categoryService.findCategory();
        model.addAttribute("categoryList", categoryList);

        return "home";
    }
    
}
