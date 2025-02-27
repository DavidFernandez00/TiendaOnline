import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { TabNotificationComponent } from '../tabs/tab-notification/tab-notification.component';
import { SidebarStatusService } from '../../services/status/sidebar-status.service';
import { SettingsComponent } from '../tabs/settings/settings.component';
import { ProfileComponent } from '../tabs/profile/profile.component';
import { TabGridComponent } from '../tabs/tab-grid/tab-grid.component';

@Component({
  selector: 'app-header-backoffice',
  imports: [
    NgIf,
    TabNotificationComponent,
    SettingsComponent,
    ProfileComponent,
    TabGridComponent,
    TabGridComponent,
  ],
  standalone: true,
  templateUrl: './header-backoffice.component.html',
  styleUrl: './header-backoffice.component.scss',
})
export class HeaderBackofficeComponent {
  isActive: boolean = false;

  // Variables de tabs

  isActiveItems: any = {
    isActiveNotification: false,
    isActiveSettings: false,
    isActiveProfile: false,
    isActiveGrid: false,
  };

  constructor(private sidebarStatusService: SidebarStatusService) {}

  // isActiveNotification: boolean = false;

  toggleLogo() {
    this.isActive = !this.isActive;
    this.sidebarStatusService.changeStatus(this.isActive);
  }
  toggleProfile() {
    if (this.isActiveItems['isActiveProfile']) {
      this.isActiveItems['isActiveProfile'] = false;
    } else {
      Object.keys(this.isActiveItems).forEach((item) => {
        this.isActiveItems[item] = false;
      });
      this.isActiveItems['isActiveProfile'] = true;
    }
  }

  toggleItem(option: string) {
    if (this.isActiveItems[option]) {
      this.isActiveItems[option] = false;
    } else {
      Object.keys(this.isActiveItems).forEach((item) => {
        this.isActiveItems[item] = false;
      });
      this.isActiveItems[option] = true;
    }
  }
  toggleGrid() {
    if (this.isActiveItems['isActiveGrid']) {
      this.isActiveItems['isActiveGrid'] = false;
    } else {
      Object.keys(this.isActiveItems).forEach((item) => {
        this.isActiveItems[item] = false;
      });
      this.isActiveItems['isActiveGrid'] = true;
    }
  }
}
