const About = () => {
    return(
<div className="w-full my-32">
    <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
            <h2 className="font-bold text-4xl my-5">Trustet by developers across the world</h2>
            <p className="text-2xl">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia</p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 mt-10 text-center">
            <div>
                <p className="text-indigo-500 text-5xl ">100%</p>
                <p>Completion</p>
            </div>
            <div>
                <p className="text-indigo-500 text-5xl ">24/7%</p>
                <p>Delivery</p>
            </div>
            <div>
                <p className="text-indigo-500 text-5xl ">100k</p>
                <p>Transaction</p>
            </div>
        </div>
    </div>
</div>
    )
}

export default About