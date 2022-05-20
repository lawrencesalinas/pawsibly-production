import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
import apiUrl from "../apiConfig";
import { useNavigate } from "react-router-dom";
import { createSitter } from "../context/sitter/SitterAction";
import SitterContext from "../context/sitter/SitterContext";
import Spinner from "./shared/Spinner";

export default function HostAPetForm({ user, setTrigger }) {
  const { dispatch, loading } = useContext(SitterContext);

  const [title, setTitle] = useState("");
  const [firstName, setfirstName] = useState(user.first_name);
  const [zipCode, setZipCode] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState();
  const post_owner = user.id;

  const navigate = useNavigate();

  const createPost = async (e) => {
    const uploadData = new FormData();
    uploadData.append("image", image);
    uploadData.append("title", title);
    uploadData.append("first_name", firstName);
    uploadData.append("zipcode", zipCode);
    uploadData.append("price", price);
    uploadData.append("city", city);
    uploadData.append("description", description);
    uploadData.append("post_owner", post_owner);

    const userData = await createSitter(user, uploadData);
    dispatch({ type: "CREATE_SITTER", payload: userData });
    navigate("/");

    // fetch(`${apiUrl}/sitters`, {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Token ${user.token}`,
    //   },
    //   body: uploadData,
    // })
    //   .then((res) => {
    //     setTrigger((x) => !x);
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <label>Title</label>
      <input
        className="input"
        type="text"
        required
        value={title}
        title="title"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Name</label>
      <input
        className="input"
        type="text"
        required
        value={firstName}
        first_name="first_name"
        id="name"
        onChange={(e) => setfirstName(e.target.value)}
      />

      <label>Zipcode</label>
      <input
        className="input"
        type="text"
        required
        value={zipCode}
        name="zipcode"
        id="zipcode"
        onChange={(e) => setZipCode(e.target.value)}
      />
      <label>Price</label>
      <input
        className="input"
        type="text"
        required
        value={price}
        name="price"
        id="price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <label>City</label>
      <input
        className="input"
        type="text"
        required
        value={city}
        name="city"
        id="city"
        onChange={(e) => setCity(e.target.value)}
      />
      <br />

      <label>Description</label>
      <textarea
        className="input"
        type="text"
        required
        value={description}
        name="description"
        id="description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <input type="file" onChange={(evt) => setImage(evt.target.files[0])} />

      <br></br>
      <br></br>
      <Button onClick={createPost} variant="success">
        Post
      </Button>
    </div>
  );
}
