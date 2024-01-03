import React from 'react';
import './Move.css'; // Import your CSS file

const YourComponent = () => {
  return (
    <div>
      <h1 className="title">3D slider with pure CSS3</h1>
     
      <section className="three-d-container">
        <input type="radio" checked className="three-d-bullet a" name="three-d" />
        <input type="radio" className="three-d-bullet b" name="three-d" />
        <input type="radio" className="three-d-bullet c" name="three-d" />
        <input type="radio" className="three-d-bullet d" name="three-d" />
        <input type="radio" className="three-d-bullet e" name="three-d" />
        <input type="radio" className="three-d-bullet f" name="three-d" />
        <div className="three-d-cube">
          <figure className="three-d-item">
            <img src="https://tse4.explicit.bing.net/th?id=OIP.AjqBu1iM4640RoK4HIwuZAHaEK&pid=Api&P=0&h=180" alt="" />
          </figure>
          <figure className="three-d-item">
            <img src="https://tse3.mm.bing.net/th?id=OIP.FUWemmiC_dRF9PF-PwLDUgHaEo&pid=Api&P=0&h=180" alt="" />
          </figure>
          <figure className="three-d-item">
            <img src="https://tse3.mm.bing.net/th?id=OIP.LwUJr4puB9TaGWD0x-8bDQHaEK&pid=Api&P=0&h=180" alt="" />
          </figure>
          <figure className="three-d-item">
            <img src="https://tse4.mm.bing.net/th?id=OIP.Vm6sa0Wl98gdekBb-PI27wHaEK&pid=Api&P=0&h=180" alt="" />
          </figure>
          <figure className="three-d-item">
            <img src="https://tse4.mm.bing.net/th?id=OIP.LLlxXAyr6Yz6IxITeXWm9QHaEK&pid=Api&P=0&h=180" alt="" />
          </figure>
          <figure className="three-d-item">
            <img src="https://tse1.mm.bing.net/th?id=OIP.eunPXnNU2gNKPNHD8KdwegHaEA&pid=Api&P=0&h=180" alt="" />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default YourComponent;
