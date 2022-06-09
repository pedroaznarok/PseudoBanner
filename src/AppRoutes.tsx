import { Component } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Navigation from "./components/navbar/navigation";
import DemoBanner from "./components/pages/DemoBanner/demoBanner";


class AppRoutes extends Component {
    render() {
        return(
            <>
            <Navigation></Navigation>
            <Container>
                <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path="/banner" element={<DemoBanner/>} />
                   {/*  <Route path="/formulario" element={<FormularioBanner/>} />
                    <Route path="/tabla" element={<TablaBanner/>} />  */}
                </Routes>
            </Container>
            </>
        )
    }
}

export default AppRoutes;