import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Lesson {
  id: string;
  name: string;
  schoolSportId: string;
  coachId: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  facilityId: string;
  maxStudents: number;
  active: boolean;
  schoolSport?: any;
  coach?: any;
  facility?: any;
  _count?: { enrollments: number };
}

export interface CreateLessonDto {
  name: string;
  schoolSportId: string;
  coachId: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  facilityId: string;
  maxStudents: number;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/lessons`;

  getLessons(): Observable<{ data: Lesson[] }> {
    return this.http.get<{ data: Lesson[] }>(this.apiUrl, { withCredentials: true });
  }

  getLesson(id: string): Observable<Lesson> {
    return this.http.get<Lesson>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }

  createLesson(data: CreateLessonDto): Observable<Lesson> {
    return this.http.post<Lesson>(this.apiUrl, data, { withCredentials: true });
  }

  deleteLesson(id: string): Observable<Lesson> {
    return this.http.delete<Lesson>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }

  enrollStudent(lessonId: string, studentId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${lessonId}/enroll`, { studentId }, { withCredentials: true });
  }

  unenrollStudent(lessonId: string, studentId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${lessonId}/enroll/${studentId}`, { withCredentials: true });
  }
}
