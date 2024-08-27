import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <Hero />
    <div className="container mx-auto">
      <SearchBar />
    </div>
    <main className="container mx-auto py-10 flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
