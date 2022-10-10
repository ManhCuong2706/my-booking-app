import DetailBody from '../../components/DetailList/DetailBody';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MailList from '../../components/MailList/MailList';

const Detail = () => {
  return (
    <div>
      <Header type='list' />
      <DetailBody />
      <MailList />
      <Footer />
    </div>
  );
};

export default Detail;
