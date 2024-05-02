package eruo.v1.etimeapi.util;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Component
@Log4j2
@RequiredArgsConstructor
public class CustomFileUtil {
    
    @Value("${eruo.v1.upload.path}")
    private String uploadPath;
    public List<String> saveFiles(List<MultipartFile> files) throws RuntimeException{

        return null;

    }
}
