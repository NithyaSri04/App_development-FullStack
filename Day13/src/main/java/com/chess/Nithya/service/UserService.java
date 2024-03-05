package com.chess.Nithya.service;

import com.chess.Nithya.dto.response.BasicResponse;
import com.chess.Nithya.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}
