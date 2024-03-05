package com.chess.Nithya.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chess.Nithya.dto.request.UserCourseRequest;
import com.chess.Nithya.dto.response.UserCourseResponse;
import com.chess.Nithya.service.UserCourseService;
import com.chess.Nithya.utils.MyConstant;

@RestController
@RequestMapping(MyConstant.USERCOURSE)
public class UserCourseController {

    @Autowired
    private UserCourseService userCourseService;

    public UserCourseController(UserCourseService userCourseService) {
        this.userCourseService = userCourseService;
    }

    @GetMapping
    public ResponseEntity<List<UserCourseResponse>> getAllUserCourses() {
        List<UserCourseResponse> userCourses = userCourseService.getAllUserCourses();
        return ResponseEntity.ok(userCourses);
    }

    @PostMapping
    public ResponseEntity<UserCourseResponse> enrollUserInCourse(@RequestBody UserCourseRequest userCourseRequest) {
        UserCourseResponse enrolledCourse = userCourseService.enrollUserInCourse(userCourseRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(enrolledCourse);
    }
}
