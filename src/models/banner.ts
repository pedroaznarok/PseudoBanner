
export default class Banner {

    id:number = 0;
    urlImageBanner:string = "";
    textCaption:string = "";
    descripcionImagen:string = "";
    ordenSlider:Number = 0;

}

export type BannerParams = {
    id:number;
    urlImageBanner:string;
    textCaption:string;
    descripcionImagen:string;
    ordenSlider:Number;
}
