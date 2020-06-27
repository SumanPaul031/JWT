import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Subscription, Observable } from 'rxjs';
import { Job } from 'src/app/interfaces/job';
import { AuthService } from 'src/app/services/auth.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  user: User;
  userSub: Subscription;
  jobList$: Observable<Job[]>;

  constructor(private authService: AuthService,
    private jobService: JobService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user$.subscribe((user: User) => {
      this.user = user;
      this.jobList$ = this.jobService.getJobList();
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
