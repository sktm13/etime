package eruo1.etime1.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostController {


    @GetMapping("/api/post")
    public String post() {
        return "통신 성공";
    }
}
