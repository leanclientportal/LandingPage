const Footer = () => {
  return (
    <footer className="border-t border-border py-10 bg-card">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-medium text-primary">UdyamiHub</span>
        <span>© {new Date().getFullYear()} CXNext Technologies. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
