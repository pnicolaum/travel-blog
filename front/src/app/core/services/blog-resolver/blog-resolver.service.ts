
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogCreationService } from '../blog-creation/blog-creation.service';

@Injectable({
  providedIn: 'root',
})
export class BlogResolver implements Resolve<any> {
  constructor(private blogCreationService: BlogCreationService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const title = route.params['title'];
    return this.blogCreationService.getBlogByTitle(title);
  }
}
