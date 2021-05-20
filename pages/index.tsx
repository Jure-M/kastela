// global imports
import Head from "next/head";
import { Fragment, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { ToastContainer } from "react-toastify";

// styles
import { Container } from "../styles/Container";
import "react-toastify/dist/ReactToastify.css";

// components
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Apartments from "../components/Apartments";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import Overlay from "../components/Overlay";

// context
import { AppContext } from "../context/AppContext";
import MobileNavSlide from "../components/MobileNavSlide";

export default function Home() {
  const { isSideOpen } = useContext(AppContext);

  return (
    <Fragment>
      <Head>
        <title>Apartments Cigulica</title>
        <meta
          name="Apartments Cigulica"
          content="Holiday apartments in Kastela, close to Split and Trogir"
        />
      </Head>
      <CSSTransition
        in={isSideOpen}
        timeout={300}
        unmountOnExit
        classNames="nav"
      >
        <MobileNavSlide />
      </CSSTransition>
      <Container>
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={true}
        />
        <NavBar />
        <Hero />
        <Features />
      </Container>
      <Apartments />
      <Reviews />
      <Footer />
      <Overlay />
      <Modal />
    </Fragment>
  );
}
