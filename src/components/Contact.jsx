const Contact = () => {
    return (
        <div className=" items-center">
            <h1 className="font-bold text-center text-3xl p-4 mx-auto my-4">Contact Us</h1>
            <form>
                <input type="text" className="block border border-black p-2 mx-auto my-2 rounded-sm" placeholder="name"/>
                <input type="text" className="block border border-black p-2 mx-auto my-2 rounded-sm" placeholder="message"/>
                <button className="block px-4 py-2 bg-green-100 m-4 shadow-md rounded-xl mx-auto my-2">Submit</button>
            </form>
        </div>
    )
}

export default Contact;