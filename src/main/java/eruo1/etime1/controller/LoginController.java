package eruo1.etime1.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;

import org.springframework.validation.BindingResult;

import eruo1.etime1.domain.user.User;
import eruo1.etime1.service.UserService;
import eruo1.etime1.session.SessionConst;
import eruo1.etime1.session.SessionManager;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;






@Controller
@RequiredArgsConstructor
public class LoginController {
    
    private final UserService userService;
    private final SessionManager sessionManager;
    // @Autowired
    // private BCryptPasswordEncoder bCryptPasswordEncoder;

    //로그인---------------------------------
    @GetMapping("/login")
    public String login(@ModelAttribute("loginForm") LoginForm form) {
        return "login/loginForm";
    }
    //V1
    // @PostMapping("/login")
    // public String login(@Valid @ModelAttribute LoginForm form, BindingResult bindingResult, HttpServletResponse response) {
    //     if (bindingResult.hasErrors()){
    //         return "login/loginForm";
    //     }
    //     User loginUser = userService.login(form.getLoginId(), form.getPassword());

    //     if (loginUser == null){
    //         bindingResult.reject("loginFail", "아이디 또는 비밀번호가 맞지 않습니다.");
    //         return "login/loginForm";
    //     }
    //     //로그인 성공 후처리

    //     //쿠키에 시간 정보를 주지 않으면 세션 쿠키 (브라우저 종료시 만료)
    //     Cookie idCookie = new Cookie("userId", String.valueOf(loginUser.getId()));
    //     response.addCookie(idCookie);
    //     //웹브라우저는 종료시 까지 계속 userId를 줌

    //     return "redirect:/";
    // }

    //V2
    // @PostMapping("/login")
    // public String loginV2(@Valid @ModelAttribute LoginForm form, BindingResult bindingResult, HttpServletResponse response) {
    //     if (bindingResult.hasErrors()){
    //         return "login/loginForm";
    //     }
    //     User loginUser = userService.login(form.getLoginId(), form.getPassword());

    //     if (loginUser == null){
    //         bindingResult.reject("loginFail", "아이디 또는 비밀번호가 맞지 않습니다.");
    //         return "login/loginForm";
    //     }
    //     //로그인 성공 후처리

    //     //세션 관리자를 통해 세션을 생성하고, 회원 데이터 보관
    //     sessionManager.createSession(loginUser, response);

    //     return "redirect:/";
    // }

    @PostMapping("/login")
    public String loginV3(@Valid @ModelAttribute LoginForm form, BindingResult bindingResult, HttpServletRequest request) {
        if (bindingResult.hasErrors()){
            return "login/loginForm";
        }
        User loginUser = userService.login(form.getLoginId(), form.getPassword());

        if (loginUser == null){
            bindingResult.reject("loginFail", "아이디 또는 비밀번호가 맞지 않습니다.");
            return "login/loginForm";
        }
        //로그인 성공 후처리

        //세션이 있으면 세션 반환, 없으면 신규 세션 생성
        // getSession() 은 true가 default, false면 세션 없을때 신규생성 x
        HttpSession session = request.getSession(); 
        //세션에 로그인 회원 정보 보관
        session.setAttribute(SessionConst.LOGIN_USER, loginUser);

        return "redirect:/";
    }

    //-로그아웃---------------------------------
    // @PostMapping("/logout")
    // public String logout(HttpServletResponse response) {
    //     expireCookie(response, "userId");
    //     return "redirect:/";
    // }
    // private void expireCookie(HttpServletResponse response, String cookieName) {
    //     Cookie cookie = new Cookie(cookieName, null);
    //     cookie.setMaxAge(0);
    //     response.addCookie(cookie);
    // }

    // @PostMapping("/logout")
    // public String logoutV2(HttpServletRequest request) {
    //     sessionManager.expire(request);
    //     return "redirect:/";
    // }

    @PostMapping("/logout")
    public String logoutV3(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if(session != null){
            session.invalidate();//세션 데이터 다 날아감
        }
        return "redirect:/";
    }
    
    //----------------------------------
    // @GetMapping("/joinForm")
    // public String joinForm(Model model) {
    //     model.addAttribute("joinForm", new JoinForm());
    //     return "joinForm";
    // }
    // @PostMapping("/join")
    // public String join(User user) {
        // @Valid JoinForm form, BindingResult result
        // if (result.hasErrors()) {
        //     return "joinForm";
        // }
        
        // User user = new User();
        
        // user.setUsername(form.getUsername());

        // //패스워드 암호화 저장
        // String rawPassword = form.getPassword();
        // String encPassword = bCryptPasswordEncoder.encode(rawPassword);
        // user.setPassword(encPassword);

        // user.setName(form.getName());
        
        // //초기 nickName <- name
        // user.setNickName(form.getName());
        // user.setRole("USER");

        // userService.join(user);
        
    //     System.out.println(user);
    //     user.setRole("USER");
    //      // //패스워드 암호화 저장
    //     String rawPassword = user.getPassword();
    //     String encPassword = bCryptPasswordEncoder.encode(rawPassword);
    //     user.setPassword(encPassword);
    //     userService.join(user);
    //     return "redirect:/loginForm";
    // }

    // @GetMapping("/joinProc")
    // public @ResponseBody String joinProc() {
    //     return "joinProc 회원가입 완료";
    // }
    //----------------------------------
    //----------------------------------




    // @GetMapping("/user/login")
    // public String login(Model model) {
    //     model.addAttribute("loginForm", new LoginForm());
    //     return "user/login/login";
    // }

    // @PostMapping("/user/login")
    // public String verifyLogin(@Valid LoginForm loginForm, BindingResult result) {
        
    //     if (result.hasErrors()) {
    //         return "user/register/register";
    //     }

    //     return "user/userHome";
    // }
    
    // @GetMapping("/user/new")
    // public String register(Model model) {
    //     model.addAttribute("registerForm", new JoinForm());
    //     return "user/register/register";
    // }

    // @PostMapping("/user/new")
    // public String create(@Valid JoinForm form, BindingResult result) {
        
    //     if (result.hasErrors()) {
    //         return "user/register/register";
    //     }
        
    //     User user = new User();
        
    //     user.setLoginId(form.getLoginId());
    //     user.setPassword(form.getPassword());
    //     user.setName(form.getName());
        
    //     //초기 nickName <- name
    //     user.setNickName(form.getName());
        
    //     userService.join(user);
    //     return "redirect:/";
    // }
    
}
