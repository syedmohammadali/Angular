import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'shortnen'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any) {
       return value.substr(0,5) + '...'
    }  

}