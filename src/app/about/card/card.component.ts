import { Component, inject, Input } from '@angular/core';
import { Tecnology } from '../../../models/tecnology';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({required:true})tecnology!: Tecnology;
  themeService = inject(ThemeService);
}
