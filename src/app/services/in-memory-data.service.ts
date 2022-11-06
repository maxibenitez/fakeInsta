import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { User } from '../interfaces/user';
import { Image } from '../interfaces/image';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService extends InMemoryDbService {

  createDb()  {
    const users: User[] = [
      {id: 1, firstName: 'Valiant', lastName: 'Toro', username: '@torito10', profilePic: 9},
      {id: 2, firstName: 'Ginebra', lastName: 'Barrios', username: '@ginebra', profilePic: 13},
      {id: 3, firstName: 'Dulas', lastName: 'Sarabia', username: '@dsarabia', profilePic: 10},
      {id: 4, firstName: 'Reynaldo', lastName: 'Rincón', username: '@reyrincon', profilePic: 12}
    ];

    const images: Image[] = [
      { id: 1, src: '../../assets/posts/perro1.jpg', description: 'dogs'},
      { id: 2, src: '../../assets/posts/perro2.jpg', description: 'dogs'},
      { id: 3, src: '../../assets/posts/perro3.jpg', description: 'dogs'},
      { id: 4, src: '../../assets/posts/perro4.jpg', description: 'dogs'},
      { id: 5, src: '../../assets/posts/perro5.jpg', description: 'dogs'},
      { id: 6, src: '../../assets/posts/perro6.jpg', description: 'dogs'},
      { id: 7, src: '../../assets/posts/capybara1.jpg', description: 'capybara'},
      { id: 8, src: '../../assets/posts/capybara2.jpg', description: 'capybara'},
      { id: 9, src: '../../assets/profile-pics/cesar-rincon.jpg', description: 'people'},
      { id: 10, src: '../../assets/profile-pics/michael-dam.jpg', description: 'people'},
      { id: 11, src: '../../assets/profile-pics/oguz-yagiz-kara.jpg', description: 'people'},
      { id: 12, src: '../../assets/profile-pics/podpros.jpg', description: 'people'},
      { id: 13, src: '../../assets/profile-pics/toa-heftiba.jpg', description: 'people'},
      { id: 14, src: '../../assets/posts/capybara3.jpg', description: 'capybara'},
      { id: 15, src: '../../assets/posts/capybara4.jpg', description: 'capybara'},
      { id: 16, src: '../../assets/posts/capybara5.jpg', description: 'capybara'},
      { id: 17, src: '../../assets/posts/capybara6.jpg', description: 'capybara'},
      { id: 18, src: '../../assets/posts/capybara7.jpg', description: 'capybara'},
      { id: 19, src: '../../assets/posts/helado1.jpg', description: 'helado'},
      { id: 20, src: '../../assets/posts/helado2.jpg', description: 'helado'},
      { id: 21, src: '../../assets/posts/helado3.jpg', description: 'helado'},
      { id: 22, src: '../../assets/posts/helado4.jpg', description: 'helado'},
      { id: 23, src: '../../assets/posts/helado5.jpg', description: 'helado'},
      { id: 24, src: '../../assets/posts/helado6.jpg', description: 'helado'},
      { id: 25, src: '../../assets/posts/helado7.jpg', description: 'helado'},
      { id: 26, src: '../../assets/posts/paisaje1.jpg', description: 'paisaje'},
      { id: 27, src: '../../assets/posts/paisaje2.jpg', description: 'paisaje'},
      { id: 28, src: '../../assets/posts/paisaje3.jpg', description: 'paisaje'},
      { id: 29, src: '../../assets/posts/paisaje4.jpg', description: 'paisaje'}
    ];

    const posts: Post[] = [
      { id: 1, userId: 1, imageId: 1},
      { id: 12, userId: 2, imageId: 25},
      { id: 15, userId: 3, imageId: 6},
      { id: 3, userId: 1, imageId: 14},
      { id: 17, userId: 3, imageId: 19},
      { id: 4, userId: 1, imageId: 15},
      { id: 21, userId: 4, imageId: 8},
      { id: 5, userId: 1, imageId: 23},
      { id: 19, userId: 3, imageId: 28},
      { id: 7, userId: 1, imageId: 29},
      { id: 8, userId: 2, imageId: 3},
      { id: 10, userId: 2, imageId: 16},
      { id: 6, userId: 1, imageId: 24},
      { id: 23, userId: 4, imageId: 21},
      { id: 13, userId: 2, imageId: 26},
      { id: 16, userId: 3, imageId: 18},
      { id: 20, userId: 4, imageId: 7},
      { id: 9, userId: 2, imageId: 4},
      { id: 14, userId: 3, imageId: 5},
      { id: 22, userId: 4, imageId: 20},
      { id: 18, userId: 3, imageId: 27},
      { id: 2, userId: 1, imageId: 2},
      { id: 11, userId: 2, imageId: 17},
      { id: 24, userId: 4, imageId: 22}
    ];

    return {users, images, posts};
  }
}
