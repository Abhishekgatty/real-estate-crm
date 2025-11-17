import { Redirect } from "wouter";

interface Props {
  userId: string | null;
  children: React.ReactNode;
}

export default function ProtectedRoute({ userId, children }: Props) {
  if (!userId) {
    return <Redirect to="/login" />;
  }
  return <>{children}</>;
}
