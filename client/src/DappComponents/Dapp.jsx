import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import Messenger from './Messenger';
import Login from './Login'

const Dapp = () => {

    return (
        <>
            <Login />
            <Messenger />
        </>
    );
        
};

export default Dapp;