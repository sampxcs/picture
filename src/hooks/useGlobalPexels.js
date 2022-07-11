import { useContext } from "react";
import PexelsContext from "../context/PexelsContext";

export default function useGlobalPexels() {
  const { globalPexels } = useContext(PexelsContext);
  return globalPexels;
}
