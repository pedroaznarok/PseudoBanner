import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { saveBanner, getBannerXId } from "../../../controller/FuncionesApi";
import Banner from "../../../models/banner";

export const FormularioBanner = () => {
    
    const [banner, setBanner] = useState<Banner>(new Banner());
    // const [ban, setBan] = useState<Banner>();
    const { id } = useParams();
    const navigate = useNavigate();
    let bannerId:number = 0;
  
        useEffect(() => {
            if(id){
                bannerId = parseInt(id);
            }
            traerBanner();
        }, []);

        const traerBanner = async () => {
            if(id){
                const dato = await getBannerXId(parseInt(id));
                await setBanner(dato);
            }
            return banner
        }
        
        const save = () => {
            console.log(banner?.id);
            saveBanner(banner);
            navigate('/tabla');
          }

          // handle change event
       /*  const handleChange = (e) => {
            e.preventDefault(); // prevent the default action
            setBanner(e.target?.value); // set name to e.target.value (event)
        };
        */ 
    if(banner){
        let ban = banner;
    return (
            <>
 <Form>
    <Form.Group className="mb-3" controlId="formBasicUrl" >
         <Form.Label>URL</Form.Label>
    <Form.Control key={ban.urlImageBanner} type="text" defaultValue={banner?banner.urlImageBanner:''} placeholder="Url" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicTitulo">
         <Form.Label>TItulo</Form.Label>
    <Form.Control key={ban.textCaption} type="text" defaultValue={banner?banner.textCaption:''} placeholder="Ingrese titulo para la imagen" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicDescrip">
         <Form.Label>Descripcion</Form.Label>
    <Form.Control key={ban.descripcionImagen} type="text" defaultValue={banner?banner.descripcionImagen:''} placeholder="Ingrese descripcion para la imagen" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicOrden">
         <Form.Label>Order Slider</Form.Label>
    <Form.Control key={ban.ordenSlider.toString()} type="text" defaultValue={banner?banner.ordenSlider.toString():''} placeholder="Ingrese orden de la imagen" />
    </Form.Group>
 </Form>
 <Button onClick={save} variant="primary" key={ban.id} type="button">
            Guardar
          </Button>
            </>
    )}
    else {
        return (
            <>
            <h3>Cargando...</h3>
            </>
        )
    }
    }

/*     <Form>
    <Form.Group className="mb-3" controlId="formBasicUrl" >
         <Form.Label>URL</Form.Label>
    <Form.Control key={banner?.urlImageBanner}  onChange={handleChange} type="text" value={banner?banner.urlImageBanner:''} placeholder="Url" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicTitulo">
         <Form.Label>TItulo</Form.Label>
    <Form.Control key={banner?.textCaption}  onChange={handleChange} type="text" value={banner?banner.textCaption:''} placeholder="Ingrese titulo para la imagen" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicDescrip">
         <Form.Label>Descripcion</Form.Label>
    <Form.Control key={banner?.descripcionImagen}  onChange={handleChange} type="text" value={banner?banner.descripcionImagen:''} placeholder="Ingrese descripcion para la imagen" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicOrden">
         <Form.Label>Order Slider</Form.Label>
    <Form.Control key={banner?.ordenSlider.toString()}  onChange={handleChange} type="text" value={banner?banner.ordenSlider.toString():''} placeholder="Ingrese orden de la imagen" />
    </Form.Group>
 </Form>
 <Button onClick={save} variant="primary" key={banner?.id} type="button">
            Guardar
          </Button> */