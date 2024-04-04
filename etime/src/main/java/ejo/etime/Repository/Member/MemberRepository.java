package ejo.etime.Repository.Member;

import ejo.etime.Model.Member.Member;

public interface MemberRepository {

    void save(Member member);

    Member findById(Long memberId);
    
}
