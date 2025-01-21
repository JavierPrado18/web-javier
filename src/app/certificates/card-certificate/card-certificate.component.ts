import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-card-certificate',
  imports: [CommonModule],
  templateUrl: './card-certificate.component.html',
  styleUrl: './card-certificate.component.css'
})
export class CardCertificateComponent {
  @Input({required:true}) certificate!:{img:string,title:string};
themeService = inject(ThemeService);
}
