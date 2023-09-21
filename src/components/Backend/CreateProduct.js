import { useState } from "react";
import BackendSideBar from "./BackendSideBar";
// import Btn from "../pages/Btn"
// import BlogsideBar from "./BlogdashBoard"

function CreateProduct() {
    const [name, setName] = useState("");
    const [category, setcategory] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [err, setErr] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || category === "" || description === "" || image === "" || price === "" || quantity === "") {
            setErr(true);
            return;
        }
        let product = {
            name: name,
            category: category,
            description: description,
            image: image,
            price: price,
            quantity: quantity,
            date: new Date().toLocaleString(),
        };
        fetch("http://159.65.21.42:9000/create/product", {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(product),
        })
            .then((resp) => resp.json())
            .then((data) => {
                alert("Product Created");
                console.log(data);
            })
            .catch((err) => console.log(err));
    };


    return (
        <div>
            <div className="createproduct-section">
                <div>
                    <BackendSideBar />


                </div>
                <div className="createproduct-form">
                    <form className="form" onSubmit={handleSubmit}>
                        <h2>Create Product</h2>

                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            {err === true && name === "" ? <span>Name Required</span> : null}
                        </div>


                        <div className="form-group">
                            <label htmlFor="">Category</label>
                            <select value={category} onChange={(e) => setcategory(e.target.value)}>
                                <option value="Select">Select</option>
                                <option value="segee">segee</option>

                            </select>
                            {err === true && category === "" ? <span>Category Required</span> : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Description</label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                            {err === true && description === "" ? <span>Description Required</span> : null}
                        </div>


                        <div className="form-group">
                            <label htmlFor="">Price</label>
                            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                            {err === true && price === "" ? <span>Price Required</span> : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Quantity</label>
                            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                            {err === true && quantity === "" ? <span>Quantity Required</span> : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="image">Image:</label>
                            <input type="file" onChange={handleFileChange} className="input-field" />
                            {err && image === "" && <span>Image Required</span>}
                        </div>


                        {/* <Btn title = "Submit" bgColor="black" width="100%"/> */}
                        <button>Submit</button>
                    </form>
                </div>

            </div>


        </div>

    );
}

export default CreateProduct;









































