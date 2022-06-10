import { useEffect, useState } from "react";
import { Button, Card, Carousel, Container, Row } from "react-bootstrap";
import { getBanners } from "../../../controller/FuncionesApi";
import BannerParams  from '../../../models/banner';
import Banner from '../../../models/banner';

import './banner.css';


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

    return (
      <>
       <Carousel>
               <Carousel.Item>
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
            </Carousel.Item>
              </Carousel>
      </> 
)
}
function Entry() {
  return (
    <div>
                {/* <Entry key={ban.id} id={ban.id} urlImageBanner={ban.urlImageBanner} textCaption={ban.textCaption} ordenSlider={ban.ordenSlider} descripcionImagen={banner.descripcionImagen} /> */}

      <h1 className="reviews-h1">Reviews</h1>
      <Carousel>
        {banners.map(ban => (
          <Carousel.Item key={ban.id}>
            <img
              className="testimonialImages d-block w-50"
              src={ban.urlImageBanner}
              alt={ban.textCaption}
            />
            <Carousel.Caption>
              <h3>{ban.textCaption}</h3>
              <p>{ban.descripcionImagen}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}



        if(banners){
          return (
          <>
              <h1>Banners</h1>
              <Entry></Entry>
          </>
          )
      }else{
        return <h1>no anda</h1>
      }}
        
        export default DemoBanner;
  