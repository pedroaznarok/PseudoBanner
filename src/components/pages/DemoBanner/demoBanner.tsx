import { useEffect, useState } from "react";
import { Button, Card, Carousel, Container, Row } from "react-bootstrap";
import { getBanners } from "../../../controller/FuncionesApi";
import BannerParams  from '../../../models/banner';
import Banner from '../../../models/banner';

import './banners.css';


function DemoBanner() {

  
  
  const [banner, setBanner] = useState<Banner>();
  const [banners, setBanners] = useState<Banner[]>([]);


    useEffect(() => {
        traerBanners();

    }, []);
 
    const traerBanners = async () => {
        let datos: Banner[] = await getBanners();
        setBanners(datos);
    }

  
    
    const ItemBanner = (args : BannerParams) => {
console.log(args.urlImageBanner)
    return (
      <>
        <Card>
          <Card.ImgOverlay>
            <Card.Title>{args.ordenSlider.toString()}/4</Card.Title>
            </Card.ImgOverlay>
              <Card.Img src={args.urlImageBanner.toString()} ></Card.Img>
            <Card.Body>
              <Card.Title>{args.textCaption}</Card.Title>
              <Card.Text>{args.descripcionImagen}</Card.Text>
              </Card.Body>
            </Card>
      </> 
)
}

        if(banners){
          return (
          <>
              <h1>Banners</h1>
               {banners.map((banner:Banner) => 
                <ItemBanner key={banner.id} id={banner.id} urlImageBanner={banner.urlImageBanner} textCaption={banner.textCaption} ordenSlider={banner.ordenSlider} descripcionImagen={banner.descripcionImagen} />
               )}
          </>
          )
      }else{
        return <h1>no anda</h1>
      }}
        
        export default DemoBanner;
  