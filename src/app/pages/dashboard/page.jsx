"use client";

import React from "react";
import { redirect } from "next/navigation";
import { useSessionContext } from "@/app/context/SessionProvider";
import ClientSearchForm from "@/app/components/client_search_form/clientSearchForm";
import AppointmentTable from "@/app/components/appointment_table/AppointmentTable";

const Dashboard = () => {
  const { hasSession } = useSessionContext();
  if (!hasSession) {
    redirect("/");
  }
  return (
    <div className="p-4">
      <ClientSearchForm />
      <AppointmentTable />
    </div>
  );
};

export default Dashboard;
