import Grid from '@mui/material/Unstable_Grid2';
import { Container, Typography } from "@mui/material";


// import Iconify from "src/components/iconify/iconify";

// import PDFAnnotatorAnnotationLayer from '../pdf-annotator-annotation-layer';
import PDFAnnotatorRenderer from '../pdf-annotator-renderer';



export default function PdfAnnotatorView() {


    return (
        <Container maxWidth="xl">
            <Typography variant="h4" sx={{ mb: 5 }}>
                PDF Annotator
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                <PDFAnnotatorRenderer />
            </Grid>
        </Container>
    )

}