import { Helmet } from 'react-helmet-async';

import { PDFAnnotatorView } from 'src/sections/pdf-annotator/view';

// ----------------------------------------------------------------------

export default function PDFAnnotatorPage() {

    return (
        <>
            <Helmet>
                <title> PDF Annotator | RNA-Shop</title>
            </Helmet>

            <PDFAnnotatorView />
        </>
    )
}