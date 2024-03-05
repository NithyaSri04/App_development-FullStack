package com.chess.Nithya.service;

import com.chess.Nithya.dto.request.LoginRequest;
import com.chess.Nithya.dto.request.RegisterRequest;
import com.chess.Nithya.dto.response.LoginResponse;
import com.chess.Nithya.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

}
