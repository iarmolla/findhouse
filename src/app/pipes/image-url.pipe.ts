import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'imageUrl'
})

export class ImageUrl implements PipeTransform {

    transform(value: any) {
        if (value) {
            return `https://nocountry-production-78d6.up.railway.app/${value}`
        }
        return
    }
}