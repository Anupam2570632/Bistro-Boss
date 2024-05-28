import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../../components/SectionTitle'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_publishable_key)
const Payment = () => {
    
    return (
        <div>
            <SectionTitle heading={'Please Pay before Eat'} message={'Easy payment!'} />
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;