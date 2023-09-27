"use client";
import React, { PropsWithChildren } from "react";

const CitiesStore = React.createContext<Map<string, string>>(new Map());

export const useCities = () => React.useContext(CitiesStore);

export const CityProvider = ({ children, cities }: PropsWithChildren<{ cities: Map<string, string>; }>) => (
  <CitiesStore.Provider value={cities}>{children}</CitiesStore.Provider>
);
