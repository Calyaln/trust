import React from "react";
import { Link } from "react-router-dom";

const Recommand = () => {
  return (
    <div>
      <h4>Recommander avec</h4>
      <h1>TRUST</h1>
      <p>
        Cette application te permet de recommander à tes amis un praticien que
        tu as déjà consulté. Cele leur permettra de trouver un soignant
        sereinement.
      </p>
      <Link to="/signup">
        <button>Continuer</button>
      </Link>
      <Link to="/signin">J'ai déjà un compte</Link>
    </div>
  );
};

export default Recommand;
