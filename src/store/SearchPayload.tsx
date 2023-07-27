"use client";
import React, { PropsWithChildren } from "react";
import { produce } from "immer";
import { SeachRoute } from "@/utils/type";

interface SeachPayloadStore {
  people: number;
  maxResults: number;
  agencies: string[];
  routes: SeachRoute[];
}

type SearchPayloadAction = "setPeople" | "setAgencies" | "setMaxResults" | "addRoute" | "deleteRoute" | "updateRoute";

const PayloadStore = React.createContext<SeachPayloadStore>({} as any);

const PayloadDispatchStore = React.createContext<
  React.Dispatch<{
    type: SearchPayloadAction;
    data: any;
  }>
>({} as any);

export const useSearchPayload = () => [React.useContext(PayloadStore), React.useContext(PayloadDispatchStore)] as const;

function searchPayloadReducer(payload: SeachPayloadStore, action: { type: string; data: any }) {
  switch (action.type) {
    case "setPeople": {
      return produce(payload, (draft) => {
        draft.people = action.data;
      });
    }

    case "setAgencies": {
      return produce(payload, (draft) => {
        draft.agencies = action.data;
      });
    }

    case "setMaxResults": {
      return produce(payload, (draft) => {
        draft.maxResults = action.data;
      });
    }

    case "addRoute": {
      return produce(payload, (draft) => {
        draft.routes.push(action.data);
      });
    }

    case "deleteRoute": {
      const { id } = action.data as SeachRoute;
      if (id == undefined) {
        throw Error("route is unvalid");
      }
      return produce(payload, (draft) => {
        draft.routes = draft.routes.filter((route) => route.id != id);
      });
    }

    case "updateRoute": {
      const { id } = action.data as SeachRoute;
      if (id == undefined) {
        throw Error("route is unvalid");
      }
      return produce(payload, (draft) => {
        const index = draft.routes.findIndex((route) => route.id == id);
        if (index == -1) {
          throw Error("route is not found");
        }
        draft.routes[index] = action.data;
      });
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const SearchPayloadProvider = ({ children }: PropsWithChildren<object>) => {
  const [payload, dispatch] = React.useReducer(searchPayloadReducer, {
    people: 1,
    maxResults: 10,
    agencies: [],
    routes: [],
  } as SeachPayloadStore);

  return (
    <PayloadStore.Provider value={payload}>
      <PayloadDispatchStore.Provider value={dispatch}>{children}</PayloadDispatchStore.Provider>
    </PayloadStore.Provider>
  );
};
