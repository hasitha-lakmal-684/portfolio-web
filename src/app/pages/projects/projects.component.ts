import { Component } from '@angular/core';
import {Project} from '../../shared/models/project.model';
import {ProjectsService} from '../../core/services/projects.service';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from '@angular/material/card';
import {NgForOf} from '@angular/common';
import {MatAnchor} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [
    MatCard,
    NgForOf,
    MatCardContent,
    MatCardTitle,
    MatCardActions,
    MatAnchor,
    RouterLink
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: Project[];

  constructor(private  readonly projectsService: ProjectsService) {
    this.projects = this.projectsService.getAll();
  }

}
