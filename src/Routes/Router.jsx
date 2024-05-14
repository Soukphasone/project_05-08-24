import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../pages/Home";
import Modal from "../components/Modal/ModalNav";
import Deposit_Withdraw from "../pages/DepositWithdraw";
import Promotion from "../pages/Promotion";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Slot from "../components/Category/Slot";
import Bag from "../pages/Bag";
import Register from "../pages/Register";
import GameType from "../pages/Typegame";
import Deposit from "../pages/Deposit";
import BankList from "../pages/BankList";
import Withdraw from "../pages/Withdraw";
import Cashback from "../pages/Cashback";
import Casino from "../components/Category/Casino";
import Fish from "../components/Category/Fish";
import Sport from "../components/Category/Sport";
function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login/:data" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/slot" element={<Slot />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/fish" element={<Fish />} />
          <Route path="/sports" element={<Sport />} />
          <Route path="/navbar" element={<Modal />} />
          <Route path="/bank" element={<Deposit_Withdraw />} />
          <Route path="bank/deposit" element={<Deposit />} />
          <Route path="/bank/deposit/banklist" element={<BankList />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/bag/cashback" element={<Cashback />} />
          <Route path="/gametype" element={<GameType />} />
          <Route path="/bank/withdraw" element={<Withdraw />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
