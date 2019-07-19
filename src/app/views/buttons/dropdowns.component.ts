import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  templateUrl: 'dropdowns.component.html',
  styleUrls: ['dropdowns.component.css']
})
export class DropdownsComponent implements OnDestroy {

  status: { isOpen: boolean } = { isOpen: false };
  disabled: boolean = false;
  isDropup: boolean = true;
  autoClose: boolean = false;

  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  constructor(private router: Router) { }
  addbanner() {
    this.router.navigate(['/buttons/addfeaturedbuttons']);
  }
  ngOnDestroy() {
    this.status.isOpen = false;
  }

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

  toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isOpen = !this.status.isOpen;
  }

  change(value: boolean): void {
    this.status.isOpen = value;
  }
}
