package eruo.v1.etimeapi.domain;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@Table(name = "tbl_verify")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "imageList")
public class Verify {
    
    //vid, member(email), Date, image, approval
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long vid;

    @OneToOne(mappedBy = "verify")
    private Member member;

    private LocalDateTime verifyDate; // 등록 시간

    //파일
    @ElementCollection
    @Builder.Default
    private List<VerifyImage> imageList = new ArrayList<>();

    private boolean approval;

    private int result;

    public void changeApproval(boolean approval){
        this.approval = approval;
    }

    public void changeResult(int result){
        this.result = result;
    }

    public void addImage(VerifyImage image){
        
        image.setOrd(imageList.size());
        imageList.add(image);

    }

    public void addImageString(String fileName){

        VerifyImage verifyImage = VerifyImage.builder()
                                                .fileName(fileName)
                                                .build();
        addImage(verifyImage);

    }

    public void clearList(){
        this.imageList.clear();
    }
}
