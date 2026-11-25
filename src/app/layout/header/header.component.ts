import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public cartService: CartService) {}
}
