import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Image } from '../interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private imagesUrl = 'api/images';

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.imagesUrl);
  }

  searchImages(term: string): Observable<Image[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Image[]>(`${this.imagesUrl}/?description=${term}`);
  }

  getImage(id: number): Observable<Image> {
    const url = `${this.imagesUrl}/${id}`;
    return this.http.get<Image>(url);
  }

}
