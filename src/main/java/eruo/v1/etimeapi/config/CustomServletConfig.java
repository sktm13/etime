package eruo.v1.etimeapi.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import eruo.v1.etimeapi.controller.fomatter.LocalDateFomatter;
import lombok.extern.log4j.Log4j2;

@Configuration
@Log4j2
public class CustomServletConfig implements WebMvcConfigurer{

    @Override
    public void addFormatters(FormatterRegistry registry) {

        log.info("--------------------------");
        log.info("addFormatters");
        registry.addFormatter(new LocalDateFomatter());
    }

//     @Override
//     public void addCorsMappings(CorsRegistry registry) {
//
//         registry.addMapping("/**")
//                 .maxAge(500)
//                 .allowedOrigins("http://localhost:8080")
//                 .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS")
//                 .allowedOrigins("*");
//     }

    
    
}
