import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../interfaces/job';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  getJobList(): Observable<Job[]> {
    return this.http.get<Job[]>(`${environment.apiUrl}/job-list`);
  }
}
