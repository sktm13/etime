package eruo.v1.etimeapi.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import eruo.v1.etimeapi.domain.Verify;
import eruo.v1.etimeapi.domain.VerifyImage;
import eruo.v1.etimeapi.dto.PageRequestDTO;
import eruo.v1.etimeapi.dto.PageResponseDTO;
import eruo.v1.etimeapi.dto.VerifyDTO;
import eruo.v1.etimeapi.repository.VerifyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
@RequiredArgsConstructor
public class VerifyServiceImpl implements VerifyService{
    
    private final VerifyRepository verifyRepository;

    @Override
    public PageResponseDTO<VerifyDTO> getList(PageRequestDTO pageRequestDTO) {

        Pageable pageable = PageRequest.of(pageRequestDTO.getPage() - 1,
                pageRequestDTO.getSize(),
                Sort.by("vid").descending());

        Page<Object[]> result = verifyRepository.selectList(pageable);

        // Object[] => 0 product 1 productImage
        // Object[] => 0 product 1 productImage
        // Object[] => 0 product 1 productImage

        List<VerifyDTO> dtoList = result.get().map(arr -> {

            VerifyDTO verifyDTO = null;

            Verify verify = (Verify) arr[0];
            VerifyImage verifyImage = (VerifyImage) arr[1];

            verifyDTO = VerifyDTO.builder()
                    .vid(verify.getVid())
                    .member(verify.getMember())
                    .verifyDate(verify.getVerifyDate())
                    .approval(verify.isApproval())
                    .result(verify.getResult())
                    .build();

            String imageStr = verifyImage.getFileName();
            verifyDTO.setUploadFileNames(List.of(imageStr));

            return verifyDTO;
        }).collect(Collectors.toList());

        long totalCount = result.getTotalElements();

        return PageResponseDTO.<VerifyDTO>withAll()
                .dtoList(dtoList)
                .totalCount(totalCount)
                .pageRequestDTO(pageRequestDTO)
                .build();

    }

    @Override
    public Long register(VerifyDTO verifyDTO) {

        Verify verify = dtoToEntity(verifyDTO);

        log.info("--------");
        log.info(verify);
        log.info(verify.getImageList());

        Long vid = verifyRepository.save(verify).getVid();

        return vid;
    }

    // 등록에서 dto 로 들어온걸 entity에 추가
    private Verify dtoToEntity(VerifyDTO verifyDTO) {

        Verify verify = Verify.builder()
                .vid(verifyDTO.getVid())
                .member(verifyDTO.getMember())
                .verifyDate(verifyDTO.getVerifyDate())
                .approval(verifyDTO.isApproval())
                .result(verifyDTO.getResult())
                .build();

        List<String> uploadFileNames = verifyDTO.getUploadFileNames();

        if (uploadFileNames == null || uploadFileNames.size() == 0) {
            return verify;
        }

        uploadFileNames.forEach(fileName -> {
            verify.addImageString(fileName);
        });

        return verify;
    }

    @Override
    public VerifyDTO get(Long vid) {

        Optional<Verify> result = verifyRepository.findById(vid);

        Verify verify = result.orElseThrow();

        return entityToDTO(verify);
    }

    private VerifyDTO entityToDTO(Verify verify) {

        VerifyDTO verifyDTO = VerifyDTO.builder()
                .vid(verify.getVid())
                .member(verify.getMember())
                .verifyDate(verify.getVerifyDate())
                .approval(verify.isApproval())
                .result(verify.getResult())
                .build();

        List<VerifyImage> imageList = verify.getImageList();

        if (imageList == null || imageList.isEmpty()) {
            return verifyDTO;
        }

        List<String> fileNameList = imageList.stream().map(verifyImage -> verifyImage.getFileName()).toList();

        verifyDTO.setUploadFileNames(fileNameList);

        return verifyDTO;
    }

    @Override
    public void modify(VerifyDTO verifyDTO) {
        // 조회
        Optional<Verify> result = verifyRepository.findById(verifyDTO.getVid());

        Verify verify = result.orElseThrow();
        // 변경내용 반영(approval, result 만)
        verify.changeApproval(verifyDTO.isApproval());
        verify.changeResult(verifyDTO.getResult());

        // // 이미지 처리
        // List<String> uploadFileNames = verifyDTO.getUploadFileNames();

        // verify.clearList();

        // if (uploadFileNames != null && !uploadFileNames.isEmpty()) {
        //     uploadFileNames.forEach(uploadName -> {
        //         verify.addImageString(uploadName);
        //     });
        // }

        // 저장
        verifyRepository.save(verify);
    }

    @Override
    public void remove(Long vid) {

        verifyRepository.deleteById(vid);

    }
    
}
