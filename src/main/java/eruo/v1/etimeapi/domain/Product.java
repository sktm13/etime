package eruo.v1.etimeapi.domain;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@Table(name = "tbl_product")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "imageList")
public class Product {
    

    // id, 제목, 내용, 썸네일, 게시 시간, 게시자 객체,  


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pno;

    private String pname;

    private int price;

    //상품 설명
    private String pdesc;

    private boolean delFlag;

    @ElementCollection
    @Builder.Default
    private List<ProductImage> imageList = new ArrayList<>();

    public void changePrice(int price){
        this.price = price;
    }

    public void changeDesc(String desc){
        this.pdesc = desc;
    }

    public void changeName(String name){
        this.pname = name;
    }

    public void changeDel(boolean delFlag){
        this.delFlag = delFlag;
    }

    public void addImage(ProductImage image){
        
        image.setOrd(imageList.size());
        imageList.add(image);

    }

    public void addImageString(String fileName){

        ProductImage productImage = ProductImage.builder()
                                                .fileName(fileName)
                                                .build();
        addImage(productImage);

    }

    public void clearList(){
        this.imageList.clear();
    }
}