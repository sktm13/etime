package ejo.etime.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class RestControllerTest {
    @GetMapping("/api/test")
    String apiTest() {
        return "통신 성공";
    }
}
