import Sidebar from "../../components/LandlordComponents/Sidebar";


export default function Dashboard (){

    return (
        <section>
            <div className="grid grid-cols-6">
                {/* sidebar */}
                <section className="col-span-1">
                    <Sidebar />
                </section>

                <section className="col-span-5">
                    hello from dashboard
                </section>
            </div>
            
        </section>
    )
}