package eruo1.etime1.controller;



import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;

import eruo1.etime1.domain.user.User;
import eruo1.etime1.repository.UserRepo;
import eruo1.etime1.service.UserService;
import eruo1.etime1.session.SessionConst;
import eruo1.etime1.session.SessionManager;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;


@Controller
@RequiredArgsConstructor
public class HomeController {

    private final UserService userService;
    private final SessionManager sessionManager;

    // private final PostService postService;
    // private final CategoryService categoryService;
    // @GetMapping("/")
    // public String home(Model model) {

    // List<Post> postList = postService.findPosts();
    // model.addAttribute("postList", postList);
    // List<Category> categoryList = categoryService.findCategory();
    // model.addAttribute("categoryList", categoryList);

    // return "home";
    // }

    //기본 홈
    // @GetMapping("/")
    // public String home() {
    //     return "home";
    // }
    
    //쿠키 홈
    // @GetMapping("/")
    // public String homeLogin(@CookieValue(name = "userId", required = false) Long userId, Model model) {

    //     if (userId == null){
    //         return "home";
    //     }

    //     User loginUser = userService.findById(userId);
    //     if (loginUser == null){
    //         return "home";
    //     }

    //     model.addAttribute("user", loginUser);
    //     return "loginHome";
    // }

    //세션 홈
    // @GetMapping("/")
    // public String homeLoginV2(HttpServletRequest request, Model model) {

    //     //세션 관리자에 저장된 회원 정보 조회
    //     User user = (User)sessionManager.getSession(request);

    //     //로그인
    //     if (user == null){
    //         return "home";
    //     }

    //     model.addAttribute("user", user);
    //     return "loginHome";
    // }

    //서블릿 세션
    // @GetMapping("/")
    // public String homeLoginV3(HttpServletRequest request, Model model) {

    //     //비로그인 회원 입장시 세션 없음
    //     HttpSession session = request.getSession(false);
    //     if (session == null){
    //         return "home";
    //     }

    //     User loginUser  = (User)session.getAttribute(SessionConst.LOGIN_USER);

    //     //세션에 회원 데이터가 없으면 home
    //     if (loginUser == null){
    //         return "home";
    //     }
    //     //세션이 유지되면 로그인으로 이동
    //     model.addAttribute("user", loginUser);
    //     return "loginHome";
    // }

    //스프링이 제공하는 세션 애트리뷰트
    @GetMapping("/")
    public String homeLoginV3Spring(
        @SessionAttribute(name = SessionConst.LOGIN_USER, required = false) User loginUser, Model model) {

        //세션에 회원 데이터가 없으면 home
        if (loginUser == null){
            return "home";
        }
        //세션이 유지되면 로그인으로 이동
        model.addAttribute("user", loginUser);
        return "loginHome";
    }
    

}
