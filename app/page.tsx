import AuthenticateUser from "@/components/auth/authenticateUser";
import Container from "@/components/container";
import AuthCard from "@/components/home/authCard";
import CreateTask from "@/components/home/createTask";
import WelcomeCard from "@/components/home/welcomeCard";
import NavBar from "@/components/navBar";
import Tasks from "@/components/tasks/tasks";

export default function Home() {
  return (
    <AuthenticateUser>
      <NavBar title="Todo Application | Home" />
      <Container className="flex flex-col gap-4 mt-28">
        <AuthCard />
        <WelcomeCard />
        <CreateTask />
        <Tasks />
      </Container>
    </AuthenticateUser>
  );
}
