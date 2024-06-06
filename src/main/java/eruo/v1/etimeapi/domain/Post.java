package eruo.v1.etimeapi.domain;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.Type;

@Entity
@Getter
@Table(name = "tbl_post")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "imageList")
public class Post {

    //기본정보 : pid, 타이틀, 게시자, 등록 시간
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pid;

    private String title;

    @ManyToOne(fetch = FetchType.LAZY) //다대일관계
    @JoinColumn(name = "email") // foreign 키 이름 member_id
    private Member member;

    private LocalDateTime postDate; // 오더 시간 자동 등록

    //내용
    @Lob
    @Column(columnDefinition = "TEXT")
    private String content;

    //크리에이터 별점
    private int creatorScore;
    //일반 별점
    private int score;

    //파일
    @ElementCollection
    @Builder.Default
    private List<PostImage> imageList = new ArrayList<>();

    private boolean delFlag;

    public void changeTitle(String title){
        this.title = title;
    }

    public void changeContent(String content){
        this.content = content;
    }

    public void changeDel(boolean delFlag){
        this.delFlag = delFlag;
    }

    public void changeCreatorScore(int creatorScore){
        this.creatorScore = creatorScore;
    }

    public void changeScore(int score){
        this.score = score;
    }

    public void addImage(PostImage image){
        
        image.setOrd(imageList.size());
        imageList.add(image);

    }

    public void addImageString(String fileName){

        PostImage postImage = PostImage.builder()
                                                .fileName(fileName)
                                                .build();
        addImage(postImage);

    }

    public void clearList(){
        this.imageList.clear();
    }

}
