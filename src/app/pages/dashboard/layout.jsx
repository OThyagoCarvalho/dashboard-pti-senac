import Navbar from "@/app/components/navbar/Navbar"

export default function DashboardLayout({
    children
  }) {
    return (
      <section>
        <Navbar />   
        {children}
      </section>
    )
  }