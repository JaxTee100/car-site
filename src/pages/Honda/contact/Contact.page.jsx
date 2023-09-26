import React from 'react'
import './contact.page.css'
import { Footer, HondaNavbar } from '../../../components'
import { Link } from 'react-router-dom'
import {MdArrowBack} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMailOpen} from 'react-icons/hi'
import {HiLocationMarker} from 'react-icons/hi'

const Contact = () => {
  return (
    <div className='contact-page-container'>
      
      <div className='contacts-nav'>
        <HondaNavbar />
      </div>
      
      <div className='contact-info'>
        <div className='contact-header'>
            <Link className='contact-link'>
              <MdArrowBack size={20} color='#475569'/>
              <p>Back to Quote</p>
            </Link>
            <div className='contact-session'>
              <h2>Contact Us</h2>
              <button>
                Book a Training Session
              </button>
            </div>
            
    
          
          
        </div>
        
        <div className='info-container'>
          <div className='contact-information'>
            <div className='phone'>
              <div className='phone-icon'>
                <FaPhoneAlt size={20} color='#ea0029'/>
              </div>
              <div className='detail'>
                <h3>Phone</h3>
                <p>(007) 095-6890</p>
              </div>
              
            </div>
            <div className='email'>
              <div className='email-icon'>
                <HiMailOpen size={20} color='#ea0029'/>
              </div>
              <div className='detail'>
                <h3>Email</h3>
                <p>honda@gmail.com</p>
              </div>
            </div>
            <div className='address'>
              <div className='address-icon'>
                <HiLocationMarker size={20} color='#ea0029'/>
              </div>
              <div className='detail'>
                <h3>Address</h3>
                <p>13245-OakStret, New york City(9123400)</p>
              </div>
            </div>
          </div>
          <div className='customer-service'>
            <h2>Tire Wizard Customer Service</h2>
            <p>Our Business Hours</p>
            <div className='schedules'>
              <div className='days'>
                <p>Monday:</p>
                <span>08:00 am to 05:00pm (EST)</span>
              </div>
              <div className='days'>
                <p>Tuesday:</p>
                <span>08:00 am to 05:00pm (EST)</span>
              </div>
              <div className='days'>
                <p>Wednesday:</p>
                <span>08:00 am to 05:00pm (EST)</span>
              </div>
              <div className='days'>
                <p>Thursday:</p>
                <span>08:00 am to 05:00pm (EST)</span>
              </div>
              <div className='days'>
                <p>Friday:</p>
                <span>08:00 am to 05:00pm (EST)</span>
              </div>
              <div className='days'>
                <p>Saturday:</p>
                <span>Closed</span>
              </div>
              <div className='days'>
                <p>Sunday:</p>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
