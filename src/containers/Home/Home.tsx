import React, { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { TournamentForm } from "../../components/TournamentForm.tsx/TournamentForm";

export const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="">
      <h1>Tourney app hype hype</h1>
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal
        title="My Custom Modal"
        onSubmit={() => console.log("Submitted!!")}
        onClose={() => setShow(false)}
        show={show}
      >
        <TournamentForm />
      </Modal>
    </div>
  );
};
