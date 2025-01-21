import { Component, inject } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';
import { CardProjectComponent } from './card-project/card-project.component';
import { Project } from '../../models/project';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, CardProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  themeService = inject(ThemeService);

  private readonly projects: Project[] = [
    {
      img: 'images/portfolio/flutter01.png',
      title: 'Acocro Express',
      url:"https://play.google.com/store/apps/details?id=com.javierprado.acocroexpress&hl=es",
      description: 'Aplicacion movil para viajar del distrito de Acocro a la ciudad de Ayacucho',
      icons: ['icons/flutter.svg', 'icons/supabase.svg'],
      area: 'mobile'
    },
  ];

  projectsFilter: Project[] = this.projects;
  filterArea: 'all' | 'web' | 'mobile' = 'all';

  filterProjects(area: 'all' | 'web' | 'mobile'): void {
    this.filterArea = area;
    this.projectsFilter = area === 'all' 
      ? this.projects 
      : this.projects.filter(project => project.area === area);
  }
}
