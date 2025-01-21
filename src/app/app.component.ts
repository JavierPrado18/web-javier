import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ContactComponent } from './contact/contact.component';
import { FotterComponent } from './fotter/fotter.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,HomeComponent,AboutComponent,ResumeComponent,PortfolioComponent,CertificatesComponent,ContactComponent,FotterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-javier';
}
