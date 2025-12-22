import { Component } from '@angular/core';
import {Project} from '../../shared/models/project.model';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {ProjectsService} from '../../core/services/projects.service';
import {NgForOf, NgIf} from '@angular/common';
import {MatAnchor} from '@angular/material/button';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-project-details',
  imports: [
    NgIf,
    MatAnchor,
    RouterLink,
    MatCard,
    MatCardTitle,
    MatCardContent,
    NgForOf,
    MatCardActions
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {

  project?: Project;

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.project = this.projectsService.getById(projectId);
    }
  }

}
