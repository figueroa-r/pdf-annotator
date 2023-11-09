import { useState } from 'react';
import PropTypes from 'prop-types';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Page, pdfjs, Outline, Document } from 'react-pdf';

import Grid from '@mui/material/Unstable_Grid2';
import { Button, Typography } from '@mui/material';

import Iconify from 'src/components/iconify/iconify';

// sample pdf
// import RESUME from '../../../public/assets/RESUME.pdf';

// ----------------------------------------------------------------------

PDFAnnotatorRenderer.propTypes = {
  pdfFile: PropTypes.oneOf([PropTypes.string, PropTypes.object, PropTypes.pdfFile]),
};

// ----------------------------------------------------------------------

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

export default function PDFAnnotatorRenderer({ pdfFile = './assets/RESUME.pdf' }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages: pages }) => {
    setNumPages(pages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  const onItemClick = ({ pageNumber: itemPageNumber }) => {
    setPageNumber(itemPageNumber)
  }

  const onLoad = (loadStatus) => () => {
    console.log(loadStatus);
  }

  return (
    <>
      <Grid>
        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          <Outline onItemClick={onItemClick} onLoadError={onLoad("Error")} onLoadSuccess={onLoad("Success")}/>
          <Page pageNumber={pageNumber} />
        </Document>
      </Grid>

      <Grid container spacing={3} textAlign="center">
        <Grid xs={12}>
          <Typography>
            {`Page ${pageNumber || (numPages ? 1 : '--')} of ${numPages || '--'}`}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:arrow-circle-left-outline" />}
            onClick={previousPage}
            disabled={pageNumber <= 1}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:arrow-circle-right-outline" />}
            onClick={nextPage}
            disabled={pageNumber >= numPages}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
