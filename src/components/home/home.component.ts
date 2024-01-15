import { Component, AfterViewInit } from '@angular/core';
declare const bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  title = 'clublist';

  ngAfterViewInit() {
    this.initializeScripts();
  }

  initializeScripts() {
    window.addEventListener('DOMContentLoaded', (event: Event) => {
      const navbarShrink = () => {
        const navbarCollapsible: HTMLElement | null = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
          return;
        }
        if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
        } else {
          navbarCollapsible.classList.add('navbar-shrink')
        }
      };

      navbarShrink();
      document.addEventListener('scroll', navbarShrink);

      const mainNav: HTMLElement | null = document.body.querySelector('#mainNav');
      if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
          target: '#mainNav',
          rootMargin: '0px 0px -40%',
        });
      };

      const navbarToggler: HTMLElement | null = document.body.querySelector('.navbar-toggler');
      const responsiveNavItems: NodeListOf<HTMLElement> = document.querySelectorAll('#navbarResponsive .nav-link');
      responsiveNavItems.forEach((responsiveNavItem: HTMLElement) => {
        responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler!).display !== 'none') {
            navbarToggler!.click();
          }
        });
      });
    });
  }
}