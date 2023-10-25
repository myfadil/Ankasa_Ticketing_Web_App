'use client'
import React from 'react';
import NavbarComponent from '@/components/header';
import Footer from '@/components/footer/footer';
import CardPayment from '@/components/Ticket/Payment';
export default function payment () {

    return (
        <div className='container-fluid'>
            <NavbarComponent />
            <div className='d-flex justify-content-center align-items-center p-5' style={{backgroundColor: '#2395FF'}}>
                <CardPayment/>
            </div>
            <Footer/>
        </div>
    )
    
}