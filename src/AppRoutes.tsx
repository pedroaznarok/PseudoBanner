class AppRoutes extends Component {
    render() {
        return(
            <>
            <Navigation></Navigation>
            <Container>
                <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path="/banner" element={<Banner/>} />
                    <Route path="/formulario" element={<FormularioBanner/>} />
                    <Route path="/tabla" element={<TablaBanner/>} /> 
                </Routes>
            </Container>
            </>
        )
    }
}

export default AppRoutes;