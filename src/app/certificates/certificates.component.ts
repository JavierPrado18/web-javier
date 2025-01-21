import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { CardCertificateComponent } from './card-certificate/card-certificate.component';

@Component({
  selector: 'app-certificates',
  imports: [CommonModule,CardCertificateComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
themeService = inject(ThemeService);
certificates = [
  {
    img: 'images/certificates/certus.png',
    title: 'Desarrollo de aplicaciones moviles',
  },
  {
    img: 'images/certificates/java.png',
    title: 'Java Orientado a Objetos',
  },
]
}
