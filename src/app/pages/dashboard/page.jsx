"use client";

import React from "react";
import useSession from "@/app/hooks/useSession";
import { redirect } from "next/navigation";
import { useSessionContext } from "@/app/context/SessionProvider";
import ClientSearchForm from "@/app/components/client_search_form/clientSearchForm";

const Dashboard = () => {
  const { hasSession } = useSessionContext();
  if (!hasSession) {
    redirect("/");
  }
  return (
    <div className="p-4">
      <ClientSearchForm />
      <div className="bg-white rounded-md p-4">
        <table className="w-full border-collapse border">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2">John Doe</td>
              <td className="border p-2">john@example.com</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
