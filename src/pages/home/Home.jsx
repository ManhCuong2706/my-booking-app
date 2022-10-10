import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MailList from '../../components/MailList/MailList';
import HomeList from '../../Features/Home/HomeList';

const Home = () => {
  return (
    <div className='home__container'>
      <Header />
      <HomeList />
      <MailList />
      <Footer />
    </div>
  );
};

export default Home;
