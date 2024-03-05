package com.chess.Nithya.service.impl;

import static com.chess.Nithya.enumerated.Role.USER;

// import java.util.Map;
import java.util.Optional;

// import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties.Jwt;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.chess.Nithya.dto.request.LoginRequest;
import com.chess.Nithya.dto.request.RegisterRequest;
import com.chess.Nithya.dto.response.LoginResponse;
import com.chess.Nithya.dto.response.RegisterResponse;
import com.chess.Nithya.model.User;
import com.chess.Nithya.repository.UserRepository;
import com.chess.Nithya.service.AuthenticationService;
import com.chess.Nithya.utils.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")


public class AuthenticationServiceImpl implements AuthenticationService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    @Override
    public RegisterResponse register(RegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        // Map<String ,Object> extraClaims =new HashMap<>();
        
        if(isUserExists.isPresent())
        {
            return RegisterResponse.builder().message("User with mail id "+request.getEmail()+" is already exists!")
            .build();
        }
        var user = User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .address(request.getAddress())
            .college(request.getCollege())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(USER)
            .build();
        userRepository.save(user);
        return RegisterResponse.builder()
            .message("User created successfully")
            .build();
    }
    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user=userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token=jwtUtil.generateToken(user);
        return LoginResponse.builder().message("User Logged in success").token(token).build();
        // throw new UnsupportedOperationException("Unimplemented method 'login'");
    }
}
