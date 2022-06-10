import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteBanner, getBanners } from "../../../controller/FuncionesApi";
import Banner from "../../../models/banner";
import "./tablaBanner.css";

function TablaBanner() {
  
    const [banner, setBanner] = useState<Banner>();
    const [banners, setBanners] = useState<Banner[]>([]);
    const navigate = useNavigate();
  
  
      useEffect(() => {
          traerBanners();
  
      }, []);
   
      const traerBanners = async () => {
          let datos: Banner[] = await getBanners();
          setBanners(datos);
      }
  

      const mostrarTabla = () => {
        if (banners.length > 0) {
            return (
                <div className="grid-container-agenda-botones">
                    <div className="grid-item-agenda">Foto</div>
                    <div className="grid-item-agenda">Titulo</div>
                    <div className="grid-item-agenda">Descripcion</div>
                    <div className="grid-item-agenda">Orden</div>
                    <div className="grid-item-agenda">Editar</div>
                    <div className="grid-item-agenda">Eliminar</div>
                    {
                        banners.map(banner => {
                            return (
                                <>
                                    <div className='grid-item'><img alt="" src={banner.urlImageBanner} /></div>
                                    <div className='grid-item'>{banner.textCaption}</div>
                                    <div className='grid-item'>{banner.descripcionImagen}</div>
                                    <div className='grid-item'>{banner.ordenSlider.toString()}</div>
                                   
                                    <div className='grid-item'>
                                        <Button variant="primary"onClick={() => navigate(`/formulario/${banner.id}`)}>Modificar</Button></div>
                                    <div className='grid-item'>
                                        <Button variant="danger" onClick={() => deleteBanner(banner.id)}>Baja</Button></div>

                                </>
                            )
                        })
                    }

                </div>
            )

        } else {
            return (
                <h4>Cargando Banners</h4>
            )
        }
    }


    return (
        <>{mostrarTabla()}</>)
}
export default TablaBanner;