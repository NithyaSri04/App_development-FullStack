package com.chess.Nithya.service;

import java.util.List;

import com.chess.Nithya.dto.request.InstituteRequest;
import com.chess.Nithya.dto.response.InstituteResponse;

public interface InstituteService {
    List<InstituteResponse> getAllInstitutes();
    InstituteResponse getInstituteById(Long instituteId);
    InstituteResponse createInstitute(InstituteRequest instituteRequest);
    InstituteResponse updateInstitute(Long instituteId, InstituteRequest instituteRequest);
    void deleteInstitute(Long instituteId);
}
