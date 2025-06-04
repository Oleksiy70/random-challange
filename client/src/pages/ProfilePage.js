// client/src/pages/ProfilePage.js
import React from 'react';
import Header from '../components/Header';
import HistoryList from '../components/HistoryList';

const ProfilePage = () => (
  <div>
    <Header />
    <div className="container">
      <h2>Profile</h2>
      <HistoryList />
    </div>
  </div>
);

export default ProfilePage;