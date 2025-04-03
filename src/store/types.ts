import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// Typage du dispatch pour gérer les actions asynchrones
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Typage du useSelector pour accéder au state avec TypeScript
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
