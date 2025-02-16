import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EntregasService } from '../services/entregas.service';
import { MapaComponent } from "../mapa/mapa.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-painel-geral',
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive, CommonModule, MapaComponent],
  templateUrl: './painel-geral.component.html',
  styleUrl: './painel-geral.component.scss'
})
export class PainelGeralComponent {
  constructor(private http:HttpClient,  private entregasService: EntregasService) {}

  sidebarVisible = false;
  entregas: any[] = [];

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  ngOnInit() {
    this.entregasService.listarEntregas().subscribe(data => {
      this.entregas = data;
    });
  }
}