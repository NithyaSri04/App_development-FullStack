package com.chess.Nithya.service;

import com.chess.Nithya.dto.request.UserCourseRequest;
import com.chess.Nithya.dto.response.UserCourseResponse;

import java.util.List;

public interface UserCourseService {
    UserCourseResponse enrollUserInCourse(UserCourseRequest userCourseRequest);
    List<UserCourseResponse> getCoursesEnrolledByUser(String userId);
    List<UserCourseResponse> getAllUserCourses();
}
