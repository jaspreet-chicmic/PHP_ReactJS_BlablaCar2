import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
export default function Loader({ show }) {
  const loader = useSelector(
    (state) => state?.loaderStateReducer?.loader || false
  );
  return (
    <>
      {loader && (
        <div className="LoaderDiv">
          <div class="loader"></div>
        </div>
      )}
    </>
  );
}
