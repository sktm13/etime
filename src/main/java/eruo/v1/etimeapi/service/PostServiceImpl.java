package eruo.v1.etimeapi.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import eruo.v1.etimeapi.domain.Post;
import eruo.v1.etimeapi.domain.PostImage;
import eruo.v1.etimeapi.dto.PageRequestDTO;
import eruo.v1.etimeapi.dto.PageResponseDTO;
import eruo.v1.etimeapi.dto.PostDTO;
import eruo.v1.etimeapi.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;

    @Override
    public PageResponseDTO<PostDTO> getList(PageRequestDTO pageRequestDTO) {

        Pageable pageable = PageRequest.of(pageRequestDTO.getPage() - 1,
                pageRequestDTO.getSize(),
                Sort.by("pid").descending());

        Page<Object[]> result = postRepository.selectList(pageable);

        // Object[] => 0 product 1 productImage
        // Object[] => 0 product 1 productImage
        // Object[] => 0 product 1 productImage

        List<PostDTO> dtoList = result.get().map(arr -> {

            PostDTO postDTO = null;

            Post post = (Post) arr[0];
            PostImage postImage = (PostImage) arr[1];

            postDTO = PostDTO.builder()
                    .pid(post.getPid())
                    .title(post.getTitle())
                    .member(post.getMember())
                    .postDate(post.getPostDate())
                    .content(post.getContent())
                    .creatorScore(post.getCreatorScore())
                    .score(post.getScore())
                    .build();

            String imageStr = postImage.getFileName();
            postDTO.setUploadFileNames(List.of(imageStr));

            return postDTO;
        }).collect(Collectors.toList());

        long totalCount = result.getTotalElements();

        return PageResponseDTO.<PostDTO>withAll()
                .dtoList(dtoList)
                .totalCount(totalCount)
                .pageRequestDTO(pageRequestDTO)
                .build();

    }

    @Override
    public Long register(PostDTO postDTO) {

        Post post = dtoToEntity(postDTO);

        log.info("--------");
        log.info(post);
        log.info(post.getImageList());

        Long pid = postRepository.save(post).getPid();

        return pid;
    }

    // 등록에서 dto 로 들어온걸 entity에 추가
    private Post dtoToEntity(PostDTO postDTO) {

        Post post = Post.builder()
                .pid(postDTO.getPid())
                .title(postDTO.getTitle())
                .member(postDTO.getMember())
                .postDate(postDTO.getPostDate())
                .content(postDTO.getContent())
                .creatorScore(postDTO.getCreatorScore())
                .score(postDTO.getScore())
                .build();

        List<String> uploadFileNames = postDTO.getUploadFileNames();

        if (uploadFileNames == null || uploadFileNames.size() == 0) {
            return post;
        }

        uploadFileNames.forEach(fileName -> {
            post.addImageString(fileName);
        });

        return post;
    }

    @Override
    public PostDTO get(Long pid) {

        Optional<Post> result = postRepository.findById(pid);

        Post post = result.orElseThrow();

        return entityToDTO(post);
    }

    private PostDTO entityToDTO(Post post) {

        PostDTO postDTO = PostDTO.builder()
                .pid(post.getPid())
                .title(post.getTitle())
                .member(post.getMember())
                .postDate(post.getPostDate())
                .content(post.getContent())
                .delFlag(post.isDelFlag())
                .creatorScore(post.getCreatorScore())
                .score(post.getScore())
                .build();

        List<PostImage> imageList = post.getImageList();

        if (imageList == null || imageList.isEmpty()) {
            return postDTO;
        }

        List<String> fileNameList = imageList.stream().map(postImage -> postImage.getFileName()).toList();

        postDTO.setUploadFileNames(fileNameList);

        return postDTO;
    }

    @Override
    public void modify(PostDTO postDTO) {
        // 조회
        Optional<Post> result = postRepository.findById(postDTO.getPid());

        Post post = result.orElseThrow();
        // 변경내용 반영
        post.changeTitle(postDTO.getTitle());
        post.changeContent(postDTO.getContent());
        post.changeDel(postDTO.isDelFlag());
        post.changeCreatorScore(postDTO.getCreatorScore());
        post.changeScore(postDTO.getScore());
        // 이미지 처리
        List<String> uploadFileNames = postDTO.getUploadFileNames();

        post.clearList();

        if (uploadFileNames != null && !uploadFileNames.isEmpty()) {
            uploadFileNames.forEach(uploadName -> {
                post.addImageString(uploadName);
            });
        }

        // 저장
        postRepository.save(post);
    }

    @Override
    public void remove(Long pid) {

        postRepository.deleteById(pid);

    }
}
