package eruo.v1.etimeapi.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import eruo.v1.etimeapi.domain.Product;
import eruo.v1.etimeapi.domain.ProductImage;
import eruo.v1.etimeapi.dto.PageRequestDTO;
import eruo.v1.etimeapi.dto.PageResponseDTO;
import eruo.v1.etimeapi.dto.ProductDTO;
import eruo.v1.etimeapi.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService{

    private final ProductRepository productRepository;

    @Override
    public PageResponseDTO<ProductDTO> getList(PageRequestDTO pageRequestDTO) {
        
        Pageable pageable = PageRequest.of(pageRequestDTO.getPage() -1,
            pageRequestDTO.getSize(),
            Sort.by("pno").descending());

        Page<Object[]> result = productRepository.selectList(pageable);

        //Object[] => 0 product 1 productImage
        //Object[] => 0 product 1 productImage
        //Object[] => 0 product 1 productImage
        
        List<ProductDTO> dtoList = result.get().map(arr -> {

            ProductDTO productDTO = null;

            Product product = (Product) arr[0];
            ProductImage productImage = (ProductImage) arr[1];

            productDTO = ProductDTO.builder()
                .pno(product.getPno())
                .pname(product.getPname())
                .pdesc(product.getPdesc())
                .price(product.getPrice())
                .build();

            
            String imageStr = productImage.getFileName();
            productDTO.setUploadFileNames(List.of(imageStr));

            return productDTO;
        }).collect(Collectors.toList());

        long totalCount = result.getTotalElements();

        return PageResponseDTO.<ProductDTO>withAll()
            .dtoList(dtoList)
            .totalCount(totalCount)
            .pageRequestDTO(pageRequestDTO)
            .build();

    }

    // @Override
    // public PageResponseDTO<PostDTO> getPostList(PageRequestDTO pageRequestDTO) {
    //     Pageable pageable = PageRequest.of(pageRequestDTO.getPage() -1,
    //         pageRequestDTO.getSize(),
    //         Sort.by("pno").descending());

    //     Page<Object[]> result = productRepository.selectList(pageable);

    //     //Object[] => 0 product 1 productImage
    //     //Object[] => 0 product 1 productImage
    //     //Object[] => 0 product 1 productImage
        
    //     List<PostDTO> dtoList = result.get().map(arr -> {

    //         PostDTO homePostDTO = null;

    //         Product product = (Product) arr[0];
    //         ProductImage productImage = (ProductImage) arr[1];

    //         PostDTO = PostDTO.builder()
    //             .pno(product.getPno())
    //             .pname(product.getPname())
    //             .build();

            
    //         String imageStr = productImage.getFileName();
    //         homePostDTO.setUploadFileNames(List.of(imageStr));

    //         return homePostDTO;
    //     }).collect(Collectors.toList());

    //     long totalCount = result.getTotalElements();

    //     return PageResponseDTO.<PostDTO>withAll()
    //         .dtoList(dtoList)
    //         .totalCount(totalCount)
    //         .pageRequestDTO(pageRequestDTO)
    //         .build();
    // }

    @Override
    public Long register(ProductDTO productDTO){

        Product product = dtoToEntity(productDTO);

        log.info("--------");
        log.info(product);
        log.info(product.getImageList());

        Long pno = productRepository.save(product).getPno();

        return pno;
    }
    
    //등록에서 dto 로 들어온걸 entity에 추가
    private Product dtoToEntity(ProductDTO productDTO){
        
        Product product = Product.builder()
                            .pno(productDTO.getPno())
                            .pname(productDTO.getPname())
                            .pdesc(productDTO.getPdesc())
                            .price(productDTO.getPrice())
                            .build();
        
        List<String> uploadFileNames = productDTO.getUploadFileNames();

        if(uploadFileNames == null || uploadFileNames.size() == 0){
            return product;
        }

        uploadFileNames.forEach(fileName -> {
            product.addImageString(fileName);
        });
        
        return product;
    }

    @Override
    public ProductDTO get(Long pno) {
        
        Optional<Product> result = productRepository.findById(pno);

        Product product = result.orElseThrow();

        return entityToDTO(product);
    }
    
    private ProductDTO entityToDTO(Product product){
        
        ProductDTO productDTO = ProductDTO.builder()
                            .pno(product.getPno())
                            .pname(product.getPname())
                            .pdesc(product.getPdesc())
                            .price(product.getPrice())
                            .delFlag(product.isDelFlag())
                            .build();
        
        List<ProductImage> imageList = product.getImageList();

        if(imageList == null || imageList.isEmpty()){
            return productDTO;
        }

        List<String> fileNameList = imageList.stream().map(productImage ->
                    productImage.getFileName()).toList();

        productDTO.setUploadFileNames(fileNameList);
        
        return productDTO;
    }

    @Override
    public void modify(ProductDTO productDTO) {
        //조회
        Optional<Product> result = productRepository.findById(productDTO.getPno());

        Product product = result.orElseThrow();
        //변경내용 반영
        product.changePrice(productDTO.getPrice());
        product.changeName(productDTO.getPname());
        product.changeDesc(productDTO.getPdesc());
        product.changeDel(productDTO.isDelFlag());

        //이미지 처리
        List<String> uploadFileNames = productDTO.getUploadFileNames();

        product.clearList();

        if(uploadFileNames != null && !uploadFileNames.isEmpty()){
            uploadFileNames.forEach(uploadName -> {
                product.addImageString(uploadName);
            });
        }

        //저장
        productRepository.save(product);
    }

    @Override
    public void remove(Long pno) {
        
        productRepository.deleteById(pno);

    }
}
