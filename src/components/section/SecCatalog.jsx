import Card from "../blocks/Card"

export default function SecCatalog() {
    return (
        <section className="container mt-32 mb-10">
            <div className="text-center mb-20">
                <h3 className="text-5xl font-bold text-malachite-800"> New Produckts </h3>
            </div>
            <div className=' grid grid-cols-3 gap-14 ' >
                <Card />
            </div>
            <div className="join grid grid-cols-2 w-72 mx-auto mt-10 ">
                <button className="join-item btn btn-outline">Previous page</button>
                <button className="join-item btn btn-outline">Next</button>
            </div>
        </section>
    )
}
