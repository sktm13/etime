package ejo.etime.Controller;

import org.springframework.web.bind.annotation.GetMapping;

public class ControllerTest {
    @GetMapping("/")
    String home(){
        return "index.html";
    }
}
