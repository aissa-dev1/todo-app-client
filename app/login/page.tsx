import AuthGuard from "@/components/auth/authGuard";
import Container from "@/components/container";
import LoginCard from "@/components/login/loginCard";
import NavBar from "@/components/navBar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Login() {
  return (
    <AuthGuard>
      <NavBar title="Todo Application | Login" />
      <Container className="flex flex-col gap-2 mt-28">
        <div className="flex items-center justify-between">
          <Badge>Login</Badge>
          <Link href="/register">
            <Badge variant="outline">Create account</Badge>
          </Link>
        </div>
        <LoginCard />
      </Container>
    </AuthGuard>
  );
}
