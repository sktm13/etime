package eruo1.etime1.controller;

import eruo1.etime1.domain.user.User;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class DonateForm {
    
    @NotEmpty(message = "후원받을 크리에이터를 입력해주세요.")
    private User donator;
    @NotEmpty(message = "후원금액을 입력해주세요.")
    private String money;
}
