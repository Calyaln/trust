import React from "react";
import { Link } from "react-router-dom";
import Recommand from "./Recommand";

const Welcome = () => {
  return (
    <div>
      <h4>Bienvenue sur</h4>
      <h1>TRUST</h1>
      <p>
        Cette application t'accompagne toi et tes amis, à trouver une ou un
        soignant (Gynécologue, sage-femmes ou médecins généralistes) en toute
        confiance.
      </p>
      <Link to={Recommand}>
        <button
          style={{
            width: "180px",
            height: "50px",
            borderRadius: "25px",
            border: "none",
            backgroundColor: "darkred",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Continuer
        </button>
      </Link>
      <Link to="/">J'ai déjà un compte</Link>
    </div>
  );
};

export default Welcome;
