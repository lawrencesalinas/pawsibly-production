import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import apiUrl from "../apiConfig";
export default function PetDetailScreen(props) {
  //   console.log("user", props.user);

  const [pet, setPet] = useState([]);
  const [newPetName, setNewPetName] = useState("");
  const [petId, setPetId] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getPets = () => {
      axios({
        url: `${apiUrl}/pets/${id}`,
        method: "GET",
        headers: {
          Authorization: `Token ${props.user.token}`,
        },
      })
        .then((foundPet) => {
          console.log("pet", foundPet);
          setPet(foundPet);
          setNewPetName(foundPet?.data?.pet?.name);
          setPetId(foundPet?.data?.pet?.id);
          console.log("all", foundPet);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getPets();
  }, [id, props.user.token]);
// console.log('owner',props.user);
  const editPetById = (id) => {
    let newData = {
      pet: {
        name: newPetName,
      },
    };
    fetch(`${apiUrl}/pets/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${props.user.token}`,
      },
      body: JSON.stringify(newData),
    })
      //   .then(() => {
      //     console.log("new pet added");

      //     props.setTrigger((x) => !x);
      //     // useNavigate(-1)
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   })
      .then((foundPet) => {
        console.log("pet edited", foundPet);

        props.setTrigger((x) => !x);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //<pre>{JSON.stringify(pet, null,2)}</pre>
  return (
    <div>
      <h2>Edit Pet details</h2>

      {/* <p>{pet && pet?.data?.pet?.pet_owner}</p> */}
      <label>Name
      <input
        value={newPetName}
        onChange={(e) => setNewPetName(e.target.value)}
      />
      </label>
      <button onClick={() => editPetById(petId)}>Update {petId}</button>
    </div>
  );
}
