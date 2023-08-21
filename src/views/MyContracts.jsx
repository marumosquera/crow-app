import React from "react";
import cancelled from "../assets/CANCELLED.svg";
import pending from "../assets/PENDING.svg";
import confirmed from "../assets/CONFIRMED.svg";
import "../styles/MyContracts.scss";

export const MyContracts = () => {
  return (
    <section className="my-contracts">
      <h1>My contracts</h1>
      <h2 className="">check the status of your contracts</h2>
      <div className="contracts-box">
        <div className="box flex justify-between p-4 m-4">
          <div className="contract-section">
            <div className="type-box">
              <span>Contract type:</span>
              <span>CRYPTO - NFT</span>
            </div>
            <div className="cp-box">
              <span>Counterparty</span>
              <span>0x09b2DcD8a88ECE53cbE2988c36CEFa79892F0019</span>
            </div>
          </div>
          <div className="status-div ">
            <img src={confirmed} alt="confirmed" className="status"/>
            <span>confirmed</span>
          </div>
        </div>

        <div className="box flex justify-between p-4 m-4">
          <div className="contract-section">
            <div className="type-box">
              <span>Contract type:</span>
              <span>CRYPTO - NFT</span>
            </div>
            <div className="cp-box">
              <span>Counterparty</span>
              <span>0x09b2DcD8a88ECE53cbE2988c36CEFa79892F0019</span>
            </div>
          </div>
          <div className="status-div ">
            <img src={pending} alt="pending" className="status" />
            <span>pending</span>
          </div>
        </div>

        <div className="box flex justify-between p-4 m-4">
          <div className="contract-section">
            <div className="type-box">
              <span>Contract type:</span>
              <span>CRYPTO - NFT</span>
            </div>
            <div>
              <span>Counterparty</span>
              <span>0x09b2DcD8a88ECE53cbE2988c36CEFa79892F0019</span>
            </div>
          </div>
          <div className="status-div ">
            <img src={cancelled} alt="cancelled" className="status"/>
            <span>cancelled</span>
          </div>
        </div>

        <div className="box flex justify-between p-4 m-4">
          <div className="contract-section">
            <div className="type-box">
              <span>Contract type:</span>
              <span>CRYPTO - NFT</span>
            </div>
            <div>
              <span>Counterparty</span>
              <span>0x09b2DcD8a88ECE53cbE2988c36CEFa79892F0019</span>
            </div>
          </div>
          <div className="status-div ">
            <img src={pending} alt="pending" className="status"/>
            <span>pending</span>
          </div>
        </div>

      </div>
    </section>
  );
};
