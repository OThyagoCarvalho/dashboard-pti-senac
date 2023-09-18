'use client'
import { useAppointments } from "@/app/context/AppointmentsContext"

export default function AppointmentTable() {
    
    const { appointments } = useAppointments();

    return (
        <div className="bg-white rounded-md p-4">
        <table className="w-full border-collapse border">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2 content">Data</th>
              <th className="border p-2">Nome</th>
              <th className="border p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {
                appointments.map((appointment, index) => (
                    <tr key={index}>
                        <td className="border p-2">{appointment.date}</td>
                        <td className="border p-2">{appointment.name}</td>
                        <td className="border p-2">{appointment.email}</td>
                    </tr>
                ))
            }      
          </tbody>
        </table>
      </div>
    )
}
