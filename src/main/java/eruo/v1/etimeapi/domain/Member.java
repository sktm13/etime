package eruo.v1.etimeapi.domain;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString(exclude = "memberRoleList") // 연관관계시 처리해줘야함
public class Member {

    @Id
    private String email;

    private String pw;
    private String nickname;

    private boolean social;

    private int grade;
    private int primitiveGrade;

    private int point;

    @ElementCollection(fetch = FetchType.LAZY)
    @Builder.Default
    private List<MemberRole> memberRoleList = new ArrayList();

    @OneToOne // 연관관계의 주인이 아닌 곳에 넣음 // 읽기 전용이 되는 곳 // 여기서 바꿔도 orders 에서는 안바뀜
    @JoinColumn(name = "vid")
    private Verify verify;



    public void addRole(MemberRole memberRole) {
        memberRoleList.add(memberRole);
    }

    public void clearRole() {
        memberRoleList.clear();
    }

    public void changeNickname(String nickname) {
        this.nickname = nickname;
    }

    public void changePw(String pw) {
        this.pw = pw;
    }

    public void changeSocial(boolean social) {
        this.social = social;
    }

    public void changeGrade(int grade) {
        this.grade = grade;
    }

    public void changePrimitiveGrade(int primitiveGrade) {
        this.primitiveGrade = primitiveGrade;
    }

    public void changePoint(int point) {
        this.point = point;
    }

}
