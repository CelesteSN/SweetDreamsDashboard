import React from 'react';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
function ContentWrapper(){
    return (
            <div id="content-wrapper" className="d-flex flex-column main-content">
                <div id="content">
                    <ContentRowTop />
                    <Footer />
                </div>
            </div>    
    )
}
export default ContentWrapper;