import {Injectable} from '@angular/core';
import {Project} from '../../shared/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private readonly projects: Project[] = [
    {
      id: 'case-dashboard',
      title: 'Case Management Dashboard',
      description: 'Enterprise-style Angular dashboard for managing cases.',
      problem: 'Teams needed a structured way to manage, filter, and track cases efficiently.',
      techStack: ['Angular', 'Angular Material', 'RxJS'],
      repoUrl: 'https://github.com/hasitha-lakmal-684/case-dashboard-web'
    },
    {
      id: 'expense-tracker',
      title: 'Expense Tracker',
      description: 'Full-stack expense tracking application.',
      problem: 'Small teams lacked visibility and control over shared expenses.',
      techStack: ['Angular', 'Spring Boot', 'PostgreSQL'],
      repoUrl: 'https://github.com/hasitha-lakmal-684/expense-tracker-web'
    },
    {
      id: 'audit-log',
      title: 'Audit Log System',
      description: 'System to record and analyze user activity logs.',
      problem: 'Applications needed traceability for user actions and compliance.',
      techStack: ['Angular', 'Spring Boot', 'Async Processing'],
      repoUrl: 'https://github.com/hasitha-lakmal-684/audit-log-web'
    }
  ];

  getAll(): Project[] {
    return this.projects;
  }

  getById(id: string): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
}
