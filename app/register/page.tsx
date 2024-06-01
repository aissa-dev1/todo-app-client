import AuthGuard from "@/components/auth/authGuard";
import Container from "@/components/container";
import NavBar from "@/components/navBar";
import RegisterCard from "@/components/register/registerCard";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Register() {
  return (
    <AuthGuard>
      <NavBar title="Todo Application | Create account" />
      <Container className="flex flex-col gap-2 mt-28">
        <div className="flex items-center justify-between">
          <Link href="/login">
            <Badge variant="outline">Login</Badge>
          </Link>
          <Badge>Create account</Badge>
        </div>
        <RegisterCard />
      </Container>
    </AuthGuard>
  );
}
