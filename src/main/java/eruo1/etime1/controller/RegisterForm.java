package eruo1.etime1.controller;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RegisterForm {
    
    @NotEmpty(message = "아이디를 입력해주세요.")
    private String loginId;
    @NotEmpty(message = "비밀번호를 입력해주세요.")
    private String password;
    @NotEmpty(message = "회원이름을 입력해주세요.")
    private String name;

}
