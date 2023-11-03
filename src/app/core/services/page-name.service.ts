import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageNameService {
  getPageName(path: string): string {
    if (path === 'list') {
      path = 'waybills/list';
    }

    const routeMappings: Record<string, string> = {
      'support': 'Contact Support',
      'drivers_location': 'Map with drivers',
      'settings': 'Settings',
      'track_spending': 'Track spending',
      'waybills': 'Orders',
      'detail/:id': 'Order Detail',
      'waybills/list': 'Orders',
    };

    if (routeMappings[path]) {
      return routeMappings[path];
    }

    const detailMatch = /^detail\/\w+$/.exec(path);
    if (detailMatch) {
      return 'Order Detail';
    }

    return path;
  }


}
