package br.com.resume.configuration;

import java.util.Locale;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import javax.servlet.Filter;

@EnableWebMvc
@Configuration
public class WebConfig implements WebMvcConfigurer {

   // @Autowired
   // private WebApplicationContext context;

   // @Bean
	// public ServletContextTemplateResolver templateResolver() {
	// 	final ServletContextTemplateResolver resolver = new ServletContextTemplateResolver(context.getServletContext());
	// 	resolver.setPrefix("/WEB-INF/views/");
	// 	resolver.setSuffix(".html");
	// 	resolver.setTemplateMode(TemplateMode.HTML);
	// 	return resolver;
   // }

   @Override
   public void addResourceHandlers(ResourceHandlerRegistry registry) {
       registry.addResourceHandler(        
               "/img/**",
               "/css/**",
               "/js/**",
               "/lib/**",
               "/fonts/**")
               .addResourceLocations(                       
                       "classpath:/static/img/",
                       "classpath:/static/css/",
                       "classpath:/static/js/",
                       "classpath:/static/lib/",
                       "classpath:/static/fonts/");
   }
   
   @Bean
   public LocaleResolver localeResolver() {
      SessionLocaleResolver sessionLocaleResolver = new SessionLocaleResolver();
      sessionLocaleResolver.setDefaultLocale(Locale.US);
      return sessionLocaleResolver;
   }

   @Bean
   public LocaleChangeInterceptor localeChangeInterceptor() {
      LocaleChangeInterceptor localeChangeInterceptor = new LocaleChangeInterceptor();
      localeChangeInterceptor.setParamName("language");
      return localeChangeInterceptor;
   }
   
   @Override
   public void addInterceptors(InterceptorRegistry registry) {
      registry.addInterceptor(localeChangeInterceptor());
   }

   @Bean("messageSource")
   public MessageSource messageSource() {
      ResourceBundleMessageSource resourceBundleMessageSource = new ResourceBundleMessageSource();
      resourceBundleMessageSource.setBasename("messages");
      resourceBundleMessageSource.setDefaultEncoding("UTF-8");
      return resourceBundleMessageSource;
   }
}