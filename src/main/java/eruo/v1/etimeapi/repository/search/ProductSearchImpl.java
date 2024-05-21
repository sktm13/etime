package eruo.v1.etimeapi.repository.search;

import java.util.List;
import java.util.Objects;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import com.querydsl.core.Tuple;
import com.querydsl.jpa.JPQLQuery;

import eruo.v1.etimeapi.domain.Product;
import eruo.v1.etimeapi.domain.QProduct;
import eruo.v1.etimeapi.domain.QProductImage;
import eruo.v1.etimeapi.dto.PageRequestDTO;
import eruo.v1.etimeapi.dto.PageResponseDTO;
import eruo.v1.etimeapi.dto.ProductDTO;
import lombok.extern.log4j.Log4j2;

@Log4j2
public class ProductSearchImpl extends QuerydslRepositorySupport implements ProductSearch{
    
    public ProductSearchImpl(){
        super(Product.class);
    }

    @Override
    public PageResponseDTO<ProductDTO> searchList(PageRequestDTO pageRequestDTO) {
        
        log.info("-----searchList-----");

        Pageable pageable = PageRequest.of(pageRequestDTO.getPage() -1, pageRequestDTO.getSize(), Sort.by("pno").descending());

        QProduct product = QProduct.product;
        QProductImage productImage = QProductImage.productImage;

        JPQLQuery<Product> query = from(product);

        query.leftJoin(product.imageList, productImage);

        query.where(productImage.ord.eq(0));

        Objects.requireNonNull(getQuerydsl()).applyPagination(pageable, query);

        List<Tuple> productList = query.select(product, productImage).fetch();

        // List<Product> productList = query.fetch();

        long count = query.fetchCount();

        log.info("--------------");
        log.info(productList);
        
        return null;
        
    }
}
