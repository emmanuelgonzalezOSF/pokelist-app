import { useState } from "react";
import styled from "@emotion/styled";
import colors from "../colors";

const FormWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .pokemon_form {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    box-shadow: 0 4px 8px 0 ${colors.dark};
    border-radius: 10px;
    padding: 10px;
    margin: 0 0 20px;

    > input:not(.form_submit) {
      margin: 0 0 10px;
    }

    .form_image-preview {
      width: 96px;
      max-height: 96px;
      margin-bottom: 10px;
    }
  }
`;

const Form = ({ onSubmit }) => {
  const defaultImageSrc = "/images/Pokeball.png";
  const acceptedImages = "image/png, image/gif, image/jpeg";
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImage, setPokemonImage] = useState(defaultImageSrc);
  const [pokemonDetails, setPokemonDetails] = useState("");
  const [pokemonLocation, setPokemonLocation] = useState("");

  const handleInputPokemonName = (event) => {
    setPokemonName(event.target.value);
  };

  const handleInputPokemonDetails = (event) => {
    setPokemonDetails(event.target.value);
  };

  const handleInputPokemonLocation = (event) => {
    setPokemonLocation(event.target.value);
  };

  const handleInputFileChange = (event) => {
    if (event?.target?.files[0]) {
      setPokemonImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const getRandomId = () => {
    const min = 100;
    const max = 1000;
    const randomId = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomId;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      name: pokemonName,
      image: pokemonImage,
      location: pokemonLocation ? pokemonLocation : "unkown",
      details: pokemonDetails,
      id: getRandomId(),
    });

    setPokemonImage(defaultImageSrc);
    setPokemonName("");
    setPokemonDetails("");
    setPokemonLocation("");
  };

  return (
    <FormWrapper>
      <form
        className="pokemon_form"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label htmlFor="pokemonName">Pokemon Name:</label>
        <input
          type="text"
          id="pokemonName"
          name="pokemonName"
          required
          onChange={handleInputPokemonName}
          value={pokemonName}
        />
        <label htmlFor="pokemonDetails">Pokemon Details:</label>
        <input
          type="text"
          id="pokemonDetails"
          name="pokemonDetails"
          onChange={handleInputPokemonDetails}
          value={pokemonDetails}
        />
        <label htmlFor="pokemonLocation">Pokemon Location:</label>
        <input
          type="text"
          id="pokemonLocation"
          name="pokemonLocation"
          onChange={handleInputPokemonLocation}
          value={pokemonLocation}
        />
        <label htmlFor="pokemonImageSrc">Select a Pokemon Image:</label>
        <input
          type="file"
          id="pokemonImageSrc"
          name="pokemonImageSrc"
          accept={acceptedImages}
          onChange={handleInputFileChange}
        />
        <img className="form_image-preview" src={pokemonImage} />
        <input className="form_submit" type="submit" value="Submit" />
      </form>
    </FormWrapper>
  );
};

export default Form;
