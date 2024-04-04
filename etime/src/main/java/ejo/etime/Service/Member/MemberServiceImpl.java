package ejo.etime.Service.Member;

import ejo.etime.Model.Member.Member;
import ejo.etime.Repository.Member.MemoryMemberRepository;

public class MemberServiceImpl implements MemberService{

    private final MemoryMemberRepository memberRepository = new MemoryMemberRepository();

    @Override
    public void join(Member member) {
        memberRepository.save(member);
    }
    
    @Override
    public Member findMember(Long memberId) {
        return memberRepository.findById(memberId);
    }

    @Override
    public Member login(Member loginMember) {
        Member foundMember = memberRepository.findById(loginMember.getId());
        if(foundMember == null) return null;
        if(!foundMember.getPwd().equals(loginMember.getPwd())) return null;       
        else return loginMember; 
    }

    @Override
    public Member updateForm(Long myId) {
        Member updateMember = memberRepository.findById(myId);
        return updateMember;
    }

    @Override
    public void update(Member member) {
        Member preMember = memberRepository.findById(member.getId());
        preMember.setPwd(member.getPwd());
    }

}
