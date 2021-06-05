import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any [] ): string {
    var imagePipe: string;

    if( !images ){

      imagePipe = 'assets/img/noimage.png';

    }else if( images.length > 0 ){

      imagePipe = images[0].url;

    }else{

      imagePipe = 'assets/img/noimage.png';

    }

    return imagePipe;

  }

}
