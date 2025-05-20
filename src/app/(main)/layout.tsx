import TopNav from "@/components/TopNav";
import SideNav from "@/components/SideNav";

// export const metadata: Metadata = {
//   title: "Task Everything",
//   description: "A to to-do list app to help you keep track of your tasks",
// };

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <TopNav />
      <div className="flex">
        <SideNav />
        <section className="p-10 border-l border-t w-full">{children}</section>
      </div>
    </main>
  );
}
