import { Component, inject, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-card-project',
  imports: [CommonModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css'
})
export class CardProjectComponent {
@Input({required:true}) project!:Project;
  themeService = inject(ThemeService);

}
