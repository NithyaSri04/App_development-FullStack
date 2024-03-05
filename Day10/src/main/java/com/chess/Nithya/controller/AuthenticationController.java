package com.chess.Nithya.controller;

import static com.chess.Nithya.utils.MyConstant.AUTH;
import static com.chess.Nithya.utils.MyConstant.LOGIN;
import static com.chess.Nithya.utils.MyConstant.REGISTER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chess.Nithya.dto.request.LoginRequest;
import com.chess.Nithya.dto.request.RegisterRequest;
import com.chess.Nithya.dto.response.LoginResponse;
import com.chess.Nithya.dto.response.RegisterResponse;
import com.chess.Nithya.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(AUTH)
@RequiredArgsConstructor

public class AuthenticationController {
private final AuthenticationService authenticationService;
    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request)
    {
        RegisterResponse response=new RegisterResponse();
        try {
            response=authenticationService.register(request);
            return new ResponseEntity<>(response,ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Something went wrong");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
    @PostMapping(LOGIN)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request)
    {
        LoginResponse response = new LoginResponse();
        try {
            response = authenticationService.login(request);
            return new ResponseEntity<>(response, ACCEPTED);
            
        } catch (Exception e) {
            LoginResponse.builder()
            .message("Something went wrong!").token("").build();
            // System.out.println(e);
            // response.setMessage("Something went wrong!");
            // response.setToken("");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }
}
