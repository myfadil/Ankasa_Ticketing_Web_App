import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '@/components/header';
import Footer from '@/components/footer/footer';
import PaymentBookingPass from '@/components/Ticket/BookingPass';

function TiketPaymentBarcode() {
  return (
    <div>
        <NavbarComponent />
            <div className='d-flex justify-content-center align-items-center p-5' style={{backgroundColor: '#2395FF'}}>
                <PaymentBookingPass />
            </div>
        <Footer/>
    </div>
  );
}

export default TiketPaymentBarcode;