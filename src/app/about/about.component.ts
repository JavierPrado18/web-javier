import { Component, inject } from '@angular/core';
import { Tecnology } from '../../models/tecnology';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-about',
  imports: [CardComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  themeservice=inject(ThemeService);
  tecnologies: Tecnology[] = [
    {
      name: 'Angular',
      img: 'icons/angular.svg',
    },
    {
      name: 'bitbucket',
      img: 'icons/bitbucket.svg',
    },
    {
      name: 'Bootstrap',
      img: 'icons/bootstrap.svg',
    },
    {
      name: 'CSS',
      img: 'icons/css.svg',
    },
    {
      name: 'Docker',
      img: 'icons/docker.svg',
    },
    {
      name: 'Figma',
      img: 'icons/figma.svg',
    },
    {
      name: 'Flutter',
      img: 'icons/flutter.svg',
    },
    {
      name: 'Git',
      img: 'icons/git.svg',
    },
    {
      name: 'GitHub',
      img: 'icons/github.svg',
    },
    {
      name: 'HTML',
      img: 'icons/html.svg',
    },
    {
      name: 'Java',
      img: 'icons/java.svg',
    },
    {
      name: 'JavaScript',
      img: 'icons/javascript.svg',
    },
    {
      name: 'Material Design',
      img: 'icons/material.svg',
    },
    {
      name: 'MySQL',
      img: 'icons/mysql.svg',
    },
    {
      name: 'NodeJS',
      img: 'icons/node.svg',
    },
    {
      name: 'PostgreSQL',
      img: 'icons/postgres.svg',
    },
    {
      name: 'Postman',
      img: 'icons/postman.svg',
    },
    {
      name: 'SaaS',
      img: 'icons/sass.svg',
    },
    {
      name: 'Spring Boot',
      img: 'icons/springboot.svg',
    },
    {
      name: 'Supabase',
      img: 'icons/supabase.svg',
    },
  ];
}
