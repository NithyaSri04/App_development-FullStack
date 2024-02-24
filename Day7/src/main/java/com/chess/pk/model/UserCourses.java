package com.chess.pk.model;

// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "usercourse")

public class UserCourses {
    private String usercourse_id;

    // @ManyToOne
    // @JoinColumn(name="user_id")
    //  private String user_id;
 
    //  @ManyToOne
    //  @JoinColumn(name="course_id")
    //  private String course_id;

}






