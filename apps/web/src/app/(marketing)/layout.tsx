type MarketingLayoutProps = {
  children: React.ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="h-full bg-slate-100">
      {/* header  */}
      <main className="bg-slate-100 pb-20 pt-32">{children}</main>
      {/* footer  */}
    </div>
  );
}
