import React from "react";
import "../styles/Create.scss";

export const Create = () => {
  return (
    <section className="create-contract">
      <h1>Create a new contract</h1>
      <h2>Select contract conditions and initiate transaction</h2>
      <div className="type-selection">
        <span className="active">CRYPTO-NFT</span>
        <span className="inactive">NFT-NFT</span>
      </div>
      <div className="form">
        <div className="input-data">
          <span>CRYPTO</span>
          <label htmlFor="">wallet address</label>
          <input type="text" />
          <label htmlFor="">amount</label>
          <div>
            <input type="text" />
            <select name="USDT" id="USDT"></select>
          </div>
        </div>
        <div className="input-data">
          <span>NFT</span>
          <label htmlFor="">wallet address</label>
          <input type="text" />
          <label htmlFor="">NFT id</label>
          <input type="text" />
        </div>
        <div className="input-data">
          <span>CONDITIONS</span>
          <label htmlFor="">condition A</label>
          <input type="text" />
          <label htmlFor="">condition B</label>
          <input type="text" />
        </div>
      </div>
      <button className="initiate">INITIATE CRYPTO-NFT ESCROW AGENT TRANSACTION</button>
      <span className="disclaimer">Once transaction is confirmed, assets will be freezed until the counterparty accepts the escrow agent transaction.</span>
    </section>
  );
};
