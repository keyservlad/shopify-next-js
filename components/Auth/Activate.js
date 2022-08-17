import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import axios from "axios";
import Loading from "../Loading";
import ActivateComp from "./ActivateComp";

const Activate = () => {
  // TODO redirect if not valid url

  const router = useRouter();
  const { activation_url } = router.query;

  if (!router.isReady) {
    return <Loading />;
  }
  return <ActivateComp activation_url={activation_url} />;
};

export default Activate;
