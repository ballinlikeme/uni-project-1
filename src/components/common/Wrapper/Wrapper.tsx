import React from "react";
import { Header } from "../Header/Header";
import "./wrapper.css";
import { Container } from "@mui/material";

export const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <Container maxWidth="xl">{children}</Container>
    </div>
  );
};
