

import newsletterimg from './compassets/mainnewsletter2.jpeg' 


const Newsletter =() => {
    return(

            <div className="newsletter-wrap">
                <div className="main-newsletter">

                    <img src={newsletterimg}></img>
                    <div className="main-newsletter-stuff">
                        <h1>
                            Let us keep you posted!

                        </h1>
                        <h2>
                            Join our newsletter and follow us on social media for access to exclusive discounts and featured promotions.

                        </h2>
                        <form>
                            <input 
                                type="email"
                                placeholder="YOUR EMAIL"
        
                            />
                            <button>SUBSCRIBE</button>
                        </form>

                    </div>




                </div>
            </div>


    )

}

export default Newsletter