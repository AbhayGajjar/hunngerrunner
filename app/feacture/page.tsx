import RestaurantHeader from '@/components/RestaurantHeader'
import React from 'react';


const Feacture = () => {

  return (
    <>
      <RestaurantHeader />

      <div>
        <section className="m-4 md:m-8  text-black">
          <div className="container mx-auto p-4 my-6 text-center">
            <h2 className="text-3xl font-bold">Unlock the Power of <span className='text-[#FF0000]'>HungryRunner </span></h2>
          </div>

          <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <div className="flex flex-col h-72 items-center p-3 rounded-lg hover:shadow-lg">
              <img src="/auth.png" className='w-12' alt="" />
              <h3 className="my-3 text-2xl font-semibold">Authentication</h3>
              <div className="space-y-1 leading-tight w-72">
                <p> Allow users to create accounts or log in using their email address, phone number, or social media accounts.
                </p>
              </div>
            </div>

            <div className="flex flex-col h-72 items-center p-3 rounded-lg hover:shadow-lg">
              <img src="/search.png" className='w-12' alt="" />
              <h3 className="my-3 text-2xl font-semibold">Restaurant Search</h3>
              <div className="space-y-1 leading-tight w-72">
                <p> Provide a search functionality for users to browse and discover restaurants based on location, cuisine type, ratings, and delivery options
                </p>
              </div>
            </div>

            <div className="flex flex-col h-72 items-center p-3 rounded-lg hover:shadow-lg">
              <img src="/clipboard.png" className='w-12' alt="" />
              <h3 className="my-3 text-2xl font-semibold">Order Placement</h3>
              <div className="space-y-1 leading-tight w-72">
                <p> Allow users to easily place orders from their chosen restaurants, selecting items from the menu and specifying any special instructions.
                </p>
              </div>
            </div>

            <div className="flex flex-col h-72 items-center p-3 rounded-lg hover:shadow-lg">
              <img src="/tracking.png" className='w-12' alt="" />
              <h3 className="my-3 text-2xl font-semibold">Order Tracking</h3>
              <div className="space-y-1 leading-tight w-72">
                <p> Provide real-time order tracking, allowing users to monitor the status of their orders from preparation to delivery.
                </p>
              </div>
            </div>

            <div className="flex flex-col h-72 items-center p-3 rounded-lg hover:shadow-lg">
              <img src="/delivery-bike.png" className='w-12' alt="" />
              <h3 className="my-3 text-2xl font-semibold">Delivery Options</h3>
              <div className="space-y-1 leading-tight w-72">
                <p> Offer flexibility in delivery options, including standard delivery, express delivery, and scheduled delivery times.
                </p>
              </div>
            </div>

            <div className="flex flex-col h-72 items-center p-3 rounded-lg hover:shadow-lg">
              <img src="/clock.png" className='w-12' alt="" />
              <h3 className="my-3 text-2xl font-semibold">Order History</h3>
              <div className="space-y-1 leading-tight w-72">
                <p>Maintain a record of users' past orders, allowing them to reorder their favorite items with ease.
                </p>
              </div>
            </div>
            <div className="flex flex-col h-72 items-center p-3 rounded-lg hover:shadow-lg">
              <img src="/rating.png" className='w-12' alt="" />
              <h3 className="my-3 text-2xl font-semibold">User Reviews and Ratings</h3>
              <div className="space-y-1 leading-tight w-72">
                <p>Enable users to leave reviews and ratings for restaurants and individual dishes, helping other users make informed decisions.
                </p>
              </div>
            </div>
            <div className="flex flex-col h-72 items-center p-3 rounded-lg hover:shadow-lg">
              <img src="/logistics.png" className='w-12' alt="" />
              <h3 className="my-3 text-2xl font-semibold">Location Services</h3>
              <div className="space-y-1 leading-tight w-72">
                <p>Utilize location services to automatically detect the user's location for accurate delivery estimates and restaurant suggestions.
                </p>
              </div>
            </div>
            <div className="flex flex-col h-72 items-center p-3 rounded-lg hover:shadow-lg">
              <img src="/accounting.png" className='w-12' alt="" />
              <h3 className="my-3 text-2xl font-semibold">Account Management</h3>
              <div className="space-y-1 leading-tight w-72">
                <p>Allow users to manage their profiles, including updating personal information, addresses, and payment methods.
                </p>
              </div>
            </div>
            <div className="flex flex-col h-72 items-center p-3 rounded-lg hover:shadow-lg">
              <img src="/customer-service.png" className='w-12' alt="" />
              <h3 className="my-3 text-2xl font-semibold">Customer Support</h3>
              <div className="space-y-1 leading-tight w-72">
                <p>Provide customer support channels such as live chat, email, or phone support to assist users with order-related queries or issues.
                </p>
              </div>
            </div>


          </div>
        </section>
      </div>
    </>
  )
}

export default Feacture