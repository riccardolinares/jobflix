import Container from "@/components/template/Container";
import { Title } from "@/components/template/PageTypography";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AccountForm from "./AccountForm";

export default async function Page() {
  const session = await getServerSession(authOptions);
  return (
    <Container>
      <Title>Account</Title>
      <AccountForm user={session?.user} />
    </Container>
  );
}
