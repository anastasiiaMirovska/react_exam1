import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, MyRootState} from "../redux/store";

export const useAppDispatch =useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<MyRootState>();

