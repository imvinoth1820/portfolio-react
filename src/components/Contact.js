import phoneImg from '../Assets/phone-call.png'
import whatsappImg from '../Assets/whatsapp.png'
import gmailImg from '..//Assets/gmail.png'

const Contact = () => {
  return (
    <section id='contact' className='flex flex-col md:flex-row px-5 contact px-5 py-20'>
   
    <div className=' flex flex-col item-center'>

            <h1 className='text-4xl text-white border-b-4 border-[#585cd1] mb-5 font-bold'>Contact 📞</h1>
            <p className='text-white pb-5'>If you want to discuss more in detail please Contact me  </p>
            <div className='flex gap-2'>
                
                <img  src={phoneImg} alt="phone-icon" className='icon' />
                <img src={whatsappImg} alt="whatsapp-icon" className='icon' />
                <img src={gmailImg} alt="gmail-icon" className='icon'/>
                </div>
                <p className='py-2 mt-2 text-white'><span className='font-bold'>Email:imvinoth1828@gmail.com</span></p>
                <p className='py-2 text-white'><span  className='font-bold'>Phone: +91 8667431528</span></p>
           
        </div>

   
</section>
  )
}

export default Contact