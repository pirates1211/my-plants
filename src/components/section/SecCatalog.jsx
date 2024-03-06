import Card from "../blocks/Card"

export default function SecCatalog() {
    return (
        <section className="container">
            <div className=' grid grid-cols-3 gap-10 mt-32' >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="join grid grid-cols-2 w-72 mx-auto mt-10 ">
                <button className="join-item btn btn-outline">Previous page</button>
                <button className="join-item btn btn-outline">Next</button>
            </div>
        </section>
    )
}
