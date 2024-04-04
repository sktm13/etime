package ejo.etime.Service.Member;

import ejo.etime.Model.Member.Member;

public interface MemberService {

    void join(Member member);

    Member findMember(Long memberId);

    Member login(Member loginMember);

    public Member updateForm(Long myId);

    public void update(Member member);
}
