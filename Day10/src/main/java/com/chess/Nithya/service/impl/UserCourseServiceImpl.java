package com.chess.Nithya.service.impl;

import com.chess.Nithya.dto.request.UserCourseRequest;
import com.chess.Nithya.dto.response.UserCourseResponse;
import com.chess.Nithya.model.Courses;
import com.chess.Nithya.model.UserCourses;
import com.chess.Nithya.repository.CourseRepository;
import com.chess.Nithya.repository.UserCourseRepository;
import com.chess.Nithya.service.UserCourseService;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserCourseServiceImpl implements UserCourseService {
@Autowired
    private CourseRepository courseRepository;
    private UserCourseRepository userCourseRepository;

    @Override
    public UserCourseResponse enrollUserInCourse(UserCourseRequest userCourseRequest) {
        Courses course = courseRepository.findByCourseName(userCourseRequest.getCourseName())
                .orElseThrow(() -> new IllegalArgumentException("Course not found with name: " + userCourseRequest.getCourseName()));

        UserCourses userCourse = new UserCourses();
        userCourse.setCourse(course);

        userCourseRepository.save(userCourse);

        return mapUserCourseToResponse(userCourse);
    }

    @Override
    public List<UserCourseResponse> getAllUserCourses() {
        List<UserCourses> userCourses = userCourseRepository.findAll();
        return userCourses.stream()
                .map(this::mapUserCourseToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public List<UserCourseResponse> getCoursesEnrolledByUser(String userId) {
        return List.of();
    }

    private UserCourseResponse mapUserCourseToResponse(UserCourses userCourses) {
        UserCourseResponse response = new UserCourseResponse();
        response.setCourseName(userCourses.getCourse().getCourseName());
        response.setContent(userCourses.getCourse().getContent());
        return response;
    }
}
