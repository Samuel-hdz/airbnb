import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";

const PropertyDetailPage = () => {
    return(
        <main className="max-w-[1500px] mx-auto pb-6 px-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image 
                    fill
                    src='/beach_1.jpg'
                    className="object-cover w-full h-full"
                    alt="Beach house"
                    />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Protpery name</h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 bedrooms - 1 bathroom
                    </span>

                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        <Image 
                            src="/profile_pic_1.jpg"
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="the user name"
                        />
                        <p><strong>John Doe</strong> is your host</p>
                    </div>
                    <hr />

                    <p className="mt-6 text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero perspiciatis dolores repudiandae ab perferendis exercitationem mollitia vitae, doloribus sapiente enim rerum dicta inventore dolorem velit laborum blanditiis eius officiis quo.
                    </p>

                </div>

                <ReservationSidebar />

            </div>

        </main>
    )
}

export default PropertyDetailPage;