
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogCreationService } from '../blog/blog.service';

@Injectable({
  providedIn: 'root',
})
export class BlogResolver implements Resolve<any> {
  constructor(private blogCreationService: BlogCreationService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const keyword = route.params['keyword'];
    return this.blogCreationService.getBlogByKeyword(keyword);
  }
}
