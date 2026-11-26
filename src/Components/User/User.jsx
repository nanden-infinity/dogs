import React from 'react';
import { UserHeader } from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import { Feed } from '../Feed/Feed';
import { UserStatus } from './UserStatus';
import { UserPhotoPost } from './UserPhotoPost';
// import { ProtectRouter } from '../Helper/ProtectRouter';

export const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatistica" element={<UserStatus />} />
      </Routes>
    </section>
  );
};
