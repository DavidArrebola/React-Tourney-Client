import React, { useState } from "react";
import { Modal } from "../../components/Modal/Modal";

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
        <p>This is my Modal Body</p>
      </Modal>
    </div>
  );
};
