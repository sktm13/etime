package eruo.v1.etimeapi.domain.post;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Category {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    private List<Post> postList = new ArrayList<>();

//    @ManyToMany
//    @JoinTable(name = "category_verify",
//            joinColumns = @JoinColumn(name = "category_id"),
//            inverseJoinColumns = @JoinColumn(name = "verify_id"))
//    private List<Verify> verifyList = new ArrayList<>();

//    @ManyToOne(fetch = LAZY)
//    @JoinColumn(name = "parent_id")
//    private Category parent;

//    @OneToMany(mappedBy = "parent")
//    private List<Category> child = new ArrayList<>();

//    public void addChildCategory(Category child) {
//        this.child.add(child);
//        child.setParent(this);
//    }
}
