import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type Item = { title: string; link: URL };

@Component({
  selector: 'fa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private readonly navListener = (e: Event) => this.toggleNav(e);

  @Input() items!: Item[];
  nav: boolean = false;

  constructor(private router: Router) {
    router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    window.removeEventListener('click', this.toggleNav);
  }

  isInternal(item: Item): boolean {
    return window.location.host === item.link.host;
  }

  search(e: Event, query: string) {
    e.preventDefault();
    if (query) {
      this.router.navigate(['previews', 'search'], {
        queryParams: { q: encodeURIComponent(query) },
      });
    } else {
      ((e.target as HTMLFormElement).elements.namedItem(
        'query'
      ) as HTMLInputElement)!.focus();
    }
  }

  toggleNav(e: Event) {
    this.nav = !this.nav;
    if (this.nav) {
      e.stopPropagation();
      window.addEventListener('click', this.navListener);
    } else {
      e.stopPropagation();
      window.removeEventListener('click', this.navListener);
    }
  }
}
