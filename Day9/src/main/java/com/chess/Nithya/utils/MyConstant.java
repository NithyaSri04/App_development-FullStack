package com.chess.Nithya.utils;

import static org.springframework.http.HttpHeaders.*;
import static org.springframework.http.HttpMethod.*;

import java.util.Arrays;
import java.util.List;

public class MyConstant {
    // Request mapping
    public static final String AUTH="/api/v1/auth";
    public static final String USER="/api/v1/user";
    
    // End points
    public static final String REGISTER="/register";
    public static final String LOGIN="/login";
    public static final String USERLIST="/list";
    
    // Course
    public static final String COURSE="/course";
    public static final String COURSELIST="/courselist";
    
    // Institute
    public static final String INSTITUTE="/institute";
    public static final String INSTITUTELIST="/institutelist";
    
    // UserCourse
    public static final String USERCOURSE="/usercourse";

    

    // Web security
    public static final List<String> ORIGINS = Arrays.asList("http://localhost:4002");
    public static final List<String> HEADERS = Arrays.asList(AUTHORIZATION, CONTENT_TYPE);
    public static final List<String> METHODS = Arrays.asList(GET.name(), POST.name(), PUT.name(), PATCH.name(), DELETE.name(),HEAD.name()); 

    
       // Swagger Info
    public static final String SWAGGER_INFO_TITLE = "Chess Academy";
    public static final String SWAGGER_INFO_DESCRIPTION = "This is a ChessAcademy";
    public static final String SWAGGER_INFO_VERSION = "1.0.0";
    public static final String SWAGGER_INFO_CONTACT_NAME = "Nithya Sri M";
    public static final String SWAGGER_INFO_CONTACT_EMAIL = "mnithya1704@gmail.com";
    public static final String SWAGGER_INFO_CONTACT_URL = "https://example.com";
    public static final String SWAGGER_INFO_LISENCE_NAME = "Apache 2.0";
    public static final String SWAGGER_INFO_LISENCE_URL = "https://www.apache.org/licenses/LICENSE-2.0.html";

    

    // JsonWebToken
    public static final String JWT_LOCALHOST_URL = "http://localhost:8181";
    public static final String JWT_SECURITY_SCHEME_NAME = "bearerAuth";
    public static final String JWT_SCHEME = "bearer";
    public static final String JWT_DESCRIPTION = "Provide the JWT token.";
    public static final String JWT_BEARER_FORMAT = "JWT";
}
