package com.course.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="CourseDetail")
public class MyCourse {
	@Id
	private int courseId;
	@Column
	private String courseTitle;
	@Column
	private String courseDescreption;
//	------------------------------------------------------------------------------------------
	public MyCourse() {
		super();
	}
//	------------------------------------------------------------------------------------------
	public MyCourse(int courseId, String courseTitle, String courseDescreption) {
		super();
		this.courseId = courseId;
		this.courseTitle = courseTitle;
		this.courseDescreption = courseDescreption;
	}
//	------------------------------------------------------------------------------------------
	public int getCourseId() {
		return courseId;
	}
	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}
	public String getCourseTitle() {
		return courseTitle;
	}
	public void setCourseTitle(String courseTitle) {
		this.courseTitle = courseTitle;
	}
	public String getCourseDescreption() {
		return courseDescreption;
	}
	public void setCourseDescreption(String courseDescreption) {
		this.courseDescreption = courseDescreption;
	}
//	------------------------------------------------------------------------------------------
	

}
