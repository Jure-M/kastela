// global imports
import { Fragment } from "react";

//components
import SingleApartment from "./SingleApartment";

//data
import { apartmentsData } from "../data/apartments";

const Apartments = () => {
  return (
    <Fragment>
      {apartmentsData.map((apartment) => {
        return <SingleApartment key={apartment.id} apartment={apartment} />;
      })}
    </Fragment>
  );
};

export default Apartments;
