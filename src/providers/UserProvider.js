import React, { useState, useEffect, createContext } from 'react';
import { auth } from '../server/firebase'

export const UserContext = createContext({user: null})