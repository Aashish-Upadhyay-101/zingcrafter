type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="h-full">
      <div className="pb-20 pt-32">{children}</div>
    </div>
  );
}
