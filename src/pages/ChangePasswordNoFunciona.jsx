import React, { useState } from "react";
import { appFirebase } from "../utils/conexionAPIFirebase";
import { getAuth } from "firebase/auth";
import ChangePasswordInputData from "../components/ChangePasswordInputData";
import ChangePasswordPost from "../components/ChangePasswordPost";

const auth = getAuth(appFirebase);

export const ChangePassword = ({ usuario }) => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(false);

  return successMessage ? (
    <ChangePasswordPost usuario={usuario} />
  ) : (
    <ChangePasswordInputData usuario={usuario} />
  );
};
